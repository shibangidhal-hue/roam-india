const express = require('express');
const crypto = require('crypto');
const pool = require('../db');
const { requireAuth } = require('../middleware/auth');
const { awardBookingCoins } = require('./coins');
const router = express.Router();

router.use(requireAuth);

router.get('/', async (req, res, next) => {
  try {
    const [rows] = await pool.execute(
      `SELECT reference_code AS reference, booking_type AS type, item_id AS itemId,
       item_name AS itemName, destination, start_date AS startDate, end_date AS endDate,
       travellers, rooms, estimated_total AS estimatedTotal, status, created_at AS createdAt
       FROM bookings WHERE user_id = ? ORDER BY created_at DESC`, [req.user.id]);
    res.json({ bookings: rows });
  } catch (err) { next(err); }
});

router.post('/', async (req, res, next) => {
  try {
    const b = req.body || {};
    const allowedTypes = ['hotel', 'package'];
    const bookingType = typeof b.type === 'string' ? b.type : '';
    const itemId = typeof b.itemId === 'string' ? b.itemId.trim() : '';
    const itemName = typeof b.itemName === 'string' ? b.itemName.trim() : '';
    const destination = typeof b.destination === 'string' ? b.destination.trim() : '';
    const startDate = typeof b.startDate === 'string' ? b.startDate : '';
    const endDate = typeof b.endDate === 'string' && b.endDate ? b.endDate : null;
    const travellers = Number(b.travellers);
    const rooms = b.rooms == null || b.rooms === '' ? null : Number(b.rooms);
    const estimatedTotal = Number(b.estimatedTotal);
    const datePattern = /^\d{4}-\d{2}-\d{2}$/;
    if (!allowedTypes.includes(bookingType) || !itemId || itemId.length > 100 || !itemName || itemName.length > 200 || !destination || destination.length > 120)
      return res.status(400).json({ error: 'Provide a valid booking type, item and destination.' });
    if (!datePattern.test(startDate) || Number.isNaN(Date.parse(startDate)) || (endDate && (!datePattern.test(endDate) || endDate <= startDate)))
      return res.status(400).json({ error: 'Provide valid travel dates; end date must be after start date.' });
    if (!Number.isInteger(travellers) || travellers < 1 || travellers > 30) return res.status(400).json({ error: 'Travellers must be between 1 and 30.' });
    if (rooms !== null && (!Number.isInteger(rooms) || rooms < 1 || rooms > 10)) return res.status(400).json({ error: 'Rooms must be between 1 and 10.' });
    if (!Number.isFinite(estimatedTotal) || estimatedTotal < 0 || estimatedTotal > 100000000) return res.status(400).json({ error: 'Estimated total is invalid.' });

    const reference = `RI-${crypto.randomBytes(5).toString('hex').toUpperCase()}`;
    const [result] = await pool.execute(
      `INSERT INTO bookings (reference_code, user_id, booking_type, item_id, item_name, destination, start_date, end_date, travellers, rooms, estimated_total)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [reference, req.user.id, bookingType, itemId, itemName, destination, startDate, endDate, travellers, rooms, estimatedTotal]);
    res.status(201).json({ booking: { id: result.insertId, reference, status: 'REQUESTED' }, message: 'Booking request saved. This is not a confirmed reservation.' });
  } catch (err) { next(err); }
});

router.patch('/:reference/cancel', async (req, res, next) => {
  try {
    const [result] = await pool.execute(
      "UPDATE bookings SET status = 'CANCELLED' WHERE reference_code = ? AND user_id = ? AND status = 'REQUESTED'",
      [req.params.reference, req.user.id]);
    if (!result.affectedRows) return res.status(404).json({ error: 'No cancellable booking request was found.' });
    res.json({ message: 'Demo booking request cancelled.' });
  } catch (err) { next(err); }
});
router.patch('/:reference/confirm', async (req, res, next) => {
  const connection = await pool.getConnection();

  try {
    await connection.beginTransaction();

    const [rows] = await connection.execute(
      `SELECT id, estimated_total
       FROM bookings
       WHERE reference_code = ?
         AND user_id = ?
         AND status = 'REQUESTED'
       FOR UPDATE`,
      [req.params.reference, req.user.id]
    );

    if (!rows.length) {
      await connection.rollback();
      return res.status(404).json({
        error: 'No pending booking request was found.'
      });
    }

    const booking = rows[0];

    await connection.execute(
      `UPDATE bookings
       SET status = 'CONFIRMED'
       WHERE id = ? AND status = 'REQUESTED'`,
      [booking.id]
    );

    const coinsEarned = await awardBookingCoins(
      connection,
      req.user.id,
      booking.id,
      booking.estimated_total
    );

    await connection.commit();

    return res.json({
      message: 'Booking confirmed successfully.',
      coinsEarned
    });
  } catch (err) {
    await connection.rollback();
    next(err);
  } finally {
    connection.release();
  }
});
router.patch('/:reference/confirm', async (req, res, next) => {
  const connection = await pool.getConnection();

  try {
    await connection.beginTransaction();

    const [rows] = await connection.execute(
      `SELECT id, estimated_total
       FROM bookings
       WHERE reference_code = ?
         AND user_id = ?
         AND status = 'REQUESTED'
       FOR UPDATE`,
      [req.params.reference, req.user.id]
    );

    if (!rows.length) {
      await connection.rollback();
      return res.status(404).json({
        error: 'No pending booking request was found.'
      });
    }

    const booking = rows[0];

    await connection.execute(
      `UPDATE bookings
       SET status = 'CONFIRMED'
       WHERE id = ? AND status = 'REQUESTED'`,
      [booking.id]
    );

    const coinsEarned = await awardBookingCoins(
      connection,
      req.user.id,
      booking.id,
      booking.estimated_total
    );

    await connection.commit();

    return res.json({
      message: 'Booking confirmed successfully.',
      coinsEarned
    });
  } catch (err) {
    await connection.rollback();
    next(err);
  } finally {
    connection.release();
  }
});
router.patch('/:reference/confirm', async (req, res, next) => {
  const connection = await pool.getConnection();

  try {
    await connection.beginTransaction();

    const [rows] = await connection.execute(
      `SELECT id, estimated_total
       FROM bookings
       WHERE reference_code = ?
         AND user_id = ?
         AND status = 'REQUESTED'
       FOR UPDATE`,
      [req.params.reference, req.user.id]
    );

    if (!rows.length) {
      await connection.rollback();
      return res.status(404).json({
        error: 'No pending booking request was found.'
      });
    }

    const booking = rows[0];

    await connection.execute(
      `UPDATE bookings
       SET status = 'CONFIRMED'
       WHERE id = ? AND status = 'REQUESTED'`,
      [booking.id]
    );

    const coinsEarned = await awardBookingCoins(
      connection,
      req.user.id,
      booking.id,
      booking.estimated_total
    );

    await connection.commit();

    return res.json({
      message: 'Booking confirmed successfully.',
      coinsEarned
    });
  } catch (err) {
    await connection.rollback();
    next(err);
  } finally {
    connection.release();
  }
});

router.patch('/:reference/confirm', async (req, res, next) => {
  const connection = await pool.getConnection();

  try {
    await connection.beginTransaction();

    const [rows] = await connection.execute(
      `SELECT id, estimated_total
       FROM bookings
       WHERE reference_code = ?
         AND user_id = ?
         AND status = 'REQUESTED'
       FOR UPDATE`,
      [req.params.reference, req.user.id]
    );

    if (!rows.length) {
      await connection.rollback();
      return res.status(404).json({
        error: 'No pending booking request was found.'
      });
    }

    const booking = rows[0];

    await connection.execute(
      `UPDATE bookings
       SET status = 'CONFIRMED'
       WHERE id = ? AND status = 'REQUESTED'`,
      [booking.id]
    );

    const coinsEarned = await awardBookingCoins(
      connection,
      req.user.id,
      booking.id,
      booking.estimated_total
    );

    await connection.commit();

    return res.json({
      message: 'Booking confirmed successfully.',
      coinsEarned
    });
  } catch (err) {
    await connection.rollback();
    next(err);
  } finally {
    connection.release();
  }
});
router.patch('/:reference/confirm', async (req, res, next) => {
  const connection = await pool.getConnection();

  try {
    await connection.beginTransaction();

    const [rows] = await connection.execute(
      `SELECT id, estimated_total
       FROM bookings
       WHERE reference_code = ?
         AND user_id = ?
         AND status = 'REQUESTED'
       FOR UPDATE`,
      [req.params.reference, req.user.id]
    );

    if (!rows.length) {
      await connection.rollback();
      return res.status(404).json({
        error: 'No pending booking request was found.'
      });
    }

    const booking = rows[0];

    await connection.execute(
      `UPDATE bookings
       SET status = 'CONFIRMED'
       WHERE id = ? AND status = 'REQUESTED'`,
      [booking.id]
    );

    const coinsEarned = await awardBookingCoins(
      connection,
      req.user.id,
      booking.id,
      booking.estimated_total
    );

    await connection.commit();

    return res.json({
      message: 'Booking confirmed successfully.',
      coinsEarned
    });
  } catch (err) {
    await connection.rollback();
    next(err);
  } finally {
    connection.release();
  }
});

module.exports = router;