
const express = require('express');
const router = express.Router();
const pool = require('../db');
const { requireAuth } = require('../middleware/auth');
async function awardBookingCoins(connection, userId, bookingId, eligibleAmount) {
  const coins = Math.floor(Number(eligibleAmount) * 0.05);

  if (!Number.isSafeInteger(coins) || coins <= 0) {
    return 0;
  }

  await connection.execute(
    `INSERT INTO user_coins (user_id, balance)
     VALUES (?, 0)
     ON DUPLICATE KEY UPDATE user_id = user_id`,
    [userId]
  );

  const [result] = await connection.execute(
    `INSERT IGNORE INTO coin_transactions
     (user_id, booking_id, transaction_type, coins, description)
     VALUES (?, ?, 'EARNED', ?, ?)`,
    [userId, bookingId, coins, 'Coins earned from eligible booking']
  );

  if (result.affectedRows === 0) {
    return 0;
  }

  await connection.execute(
    'UPDATE user_coins SET balance = balance + ? WHERE user_id = ?',
    [coins, userId]
  );

  return coins;
}

// Get the logged-in user's coin balance and transaction history
router.get('/balance', requireAuth, async (req, res, next) => {
  try {
    const userId = req.user.id;

    const [balances] = await pool.execute(
      'SELECT balance FROM user_coins WHERE user_id = ?',
      [userId]
    );

    const [transactions] = await pool.execute(
      `SELECT transaction_type, coins, description, created_at
       FROM coin_transactions
       WHERE user_id = ?
       ORDER BY created_at DESC
       LIMIT 20`,
      [userId]
    );

    return res.json({
      balance: balances.length ? Number(balances[0].balance) : 0,
      redemptionValueRupees: balances.length
        ? Number(balances[0].balance)
        : 0,
      transactions
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
module.exports.awardBookingCoins = awardBookingCoins;
