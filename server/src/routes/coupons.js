const express = require('express');
const router = express.Router();
const pool = require('../db');

router.post('/validate', async (req, res, next) => {
  try {
    const code = typeof req.body.code === 'string'
      ? req.body.code.trim().toUpperCase()
      : '';
    const amount = Number(req.body.amount);

    if (!code || !Number.isFinite(amount) || amount <= 0) {
      return res.status(400).json({
        error: 'Enter a valid coupon code and booking amount.'
      });
    }

    const [rows] = await pool.execute(
      `SELECT code, discount_percent, min_booking_amount, max_discount
       FROM coupons
       WHERE code = ? AND is_active = TRUE
         AND (expires_at IS NULL OR expires_at > NOW())
       LIMIT 1`,
      [code]
    );

    if (!rows.length) {
      return res.status(404).json({ error: 'Invalid or expired coupon.' });
    }

    const coupon = rows[0];

    if (amount < Number(coupon.min_booking_amount)) {
      return res.status(400).json({
        error: `Minimum booking amount is ₹${coupon.min_booking_amount}.`
      });
    }

    let discount = amount * Number(coupon.discount_percent) / 100;

    if (coupon.max_discount !== null) {
      discount = Math.min(discount, Number(coupon.max_discount));
    }

    discount = Math.round(discount * 100) / 100;

    return res.json({
      valid: true,
      code: coupon.code,
      discount,
      finalAmount: Math.max(0, Math.round((amount - discount) * 100) / 100)
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;