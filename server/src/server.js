require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const pool = require('./db');
const authRoutes = require('./routes/auth');
const bookingRoutes = require('./routes/bookings');
const hotelRoutes = require('./routes/hotels');
const couponRoutes = require('./routes/coupons');
const coinRoutes = require('./routes/coins');
const aiRoutes = require('./routes/ai');
if (!process.env.JWT_SECRET || process.env.JWT_SECRET.length < 32) {
  console.error('JWT_SECRET must be set to a random secret of at least 32 characters in server/.env');
  process.exit(1);
}
const app = express();
app.disable('x-powered-by');
app.use(helmet());
const allowedOrigin = process.env.FRONTEND_ORIGIN || 'http://127.0.0.1:5500';
app.use(cors({ origin: allowedOrigin.split(',').map(s => s.trim()), methods: ['GET', 'POST', 'PATCH'], allowedHeaders: ['Content-Type', 'Authorization'] }));
app.use(express.json({ limit: '20kb' }));
app.use('/api/auth', rateLimit({ windowMs: 15 * 60 * 1000, limit: 30, standardHeaders: 'draft-7', legacyHeaders: false }), authRoutes);
app.use('/api/bookings', rateLimit({ windowMs: 15 * 60 * 1000, limit: 100, standardHeaders: 'draft-7', legacyHeaders: false }), bookingRoutes);
app.use('/api/hotels', hotelRoutes);
app.use('/api/coupons', couponRoutes);
app.use('/api/coins', coinRoutes);
app.use('/api/ai', aiRoutes);
app.get('/api/health', async (_req, res) => {
  try {
    const [rows] = await pool.query(
  'SELECT DATABASE() AS database_name, @@port AS port, @@hostname AS host'
);
    res.json({
      status: 'ok',
      database: rows[0].database_name,
port: rows[0].port,
host: rows[0].host
    });
  } catch (err) {
    res.status(503).json({
      status: 'error',
      database: 'unavailable'
    });
  }
});
app.use((_req, res) => res.status(404).json({ error: 'API route not found.' }));
app.use((err, _req, res, _next) => {
  console.error(err.message);
  if (res.headersSent) return;
  res.status(500).json({ error: 'Unexpected server error. Check the server log.' });
});

const port = Number(process.env.PORT || 4000);
app.listen(port, () => console.log(`Roam India API listening on http://localhost:${port}`));
