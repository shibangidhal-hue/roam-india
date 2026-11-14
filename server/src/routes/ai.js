
const express = require("express");
const OpenAI = require("openai");

const router = express.Router();

router.post("/chat", async (req, res) => {
  try {
    const message = req.body.message;

    if (typeof message !== "string" || !message.trim()) {
      return res.status(400).json({
        error: "Please enter a message."
      });
    }

    if (message.length > 1000) {
      return res.status(400).json({
        error: "Message is too long. Please keep it under 1000 characters."
      });
    }

    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      return res.status(503).json({
        error: "AI Assistant is not configured yet."
      });
    }

    const openai = new OpenAI({ apiKey });

    const response = await openai.responses.create({
      model: process.env.OPENAI_MODEL || "gpt-4.1-mini",
      instructions: `You are Roam India AI, a friendly travel assistant.
Help users plan trips across India.
Suggest destinations, itineraries, travel budgets and travel tips.
Do not invent hotel availability, prices or confirmed bookings.
Explain that all bookings must be completed through Roam India's booking process.
Keep answers helpful and concise.`,
      input: message
    });

    res.json({
      reply: response.output_text
    });

  } catch (error) {
    console.error("AI assistant error:", error.message);

    res.status(500).json({
      error: "Sorry, the travel assistant is temporarily unavailable. Please try again."
    });
  }
});

module.exports = router;
