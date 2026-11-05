
const express = require("express");
const router = express.Router();
const pool = require("../db");
const { requireAuth } = require("../middleware/auth");
// Get all hotels
router.get("/", async (req, res) => {
  try {
    const [hotels] = await pool.query(
      "SELECT * FROM hotels ORDER BY created_at DESC"
    );

    res.json(hotels);
  } catch (error) {
    console.error("Get hotels error:", error);
    res.status(500).json({ message: "Could not load hotels." });
  }
});

module.exports = router;
