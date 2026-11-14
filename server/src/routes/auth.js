const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const pool = require('../db');
const router = express.Router();

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function issueToken(user) {
  return jwt.sign({ email: user.email, role: user.role || "customer" }, process.env.JWT_SECRET, {
    subject: String(user.id), expiresIn: process.env.JWT_EXPIRES_IN || '2h', algorithm: 'HS256'
  });
}

router.post('/register', async (req, res, next) => {
  try {
    const name = typeof req.body.name === 'string' ? req.body.name.trim() : '';
    const email = typeof req.body.email === 'string' ? req.body.email.trim().toLowerCase() : '';
    const phone = typeof req.body.phone === 'string'
  ? req.body.phone.replace(/\D/g, '')
  : '';
    const password = typeof req.body.password === 'string' ? req.body.password : '';
    if (name.length < 2 || name.length > 100) return res.status(400).json({ error: 'Name must be 2–100 characters.' });
    if (email.length > 254 || !emailPattern.test(email)) return res.status(400).json({ error: 'Enter a valid email address.' });
    if (password.length < 10 || password.length > 72) return res.status(400).json({ error: 'Password must be 10–72 characters.' });
if (phone && !/^[6-9]\d{9}$/.test(phone)) {
  return res.status(400).json({ error: 'Enter a valid 10-digit Indian mobile number.' });
}
    const passwordHash = await bcrypt.hash(password, 12);
    const [result] = await pool.execute(
  'INSERT INTO users (name, email, password_hash, phone) VALUES (?, ?, ?, ?)',
  [name, email, passwordHash, phone || null]
);
const user = { id: result.insertId, name, email, phone: phone || null, role: 'customer' };
    
    return res.status(201).json({ user, token: issueToken(user) });
  } catch (err) {
    if (err.code === 'ER_DUP_ENTRY') return res.status(409).json({ error: 'An account with that email already exists.' });
    next(err);
  }
});

router.post('/login', async (req, res, next) => {
  try {
    const email = typeof req.body.email === 'string' ? req.body.email.trim().toLowerCase() : '';
    const phone = typeof req.body.phone === 'string'
  ? req.body.phone.replace(/\D/g, '')
  : '';
    
    if (phone && !/^[6-9]\d{9}$/.test(phone)) {
  return res.status(400).json({ error: 'Enter a valid 10-digit Indian mobile number.' });
}
    const password = typeof req.body.password === 'string' ? req.body.password : '';
    if ((!emailPattern.test(email) && !/^[6-9]\d{9}$/.test(phone)) || !password) {
  return res.status(400).json({
    error: 'Enter your email or mobile number and password.'
  });
}
    const [rows] = await pool.execute(
  'SELECT id, name, email, phone, password_hash, role FROM users WHERE email = ? OR phone = ? LIMIT 1',
  [email, phone || null]
);
    const user = rows[0];
    const valid = user ? await bcrypt.compare(password, user.password_hash) : false;
    if (!valid) return res.status(401).json({ error: 'Email or password is incorrect.' });
    return res.json({
  user: {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role
  },
  token: issueToken(user)
});
  } catch (err) { next(err); }
});

module.exports = router;
