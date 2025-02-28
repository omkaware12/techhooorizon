const express = require("express");
const axios = require("axios");
require("dotenv").config();

const router = express.Router();

router.post("/ask", async (req, res) => {
    const { message } = req.body;
    const apiKey = process.env.GEMINI_API_KEY;
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateText?key=${process.env.API_KEY}`;

    try {
        const response = await axios.post(url, {
            prompt: { text: message },
        });

        const reply = response.data.candidates[0].output;
        res.json({ reply });
    } catch (error) {
        console.error("Gemini AI Error:", error.response?.data || error.message);
        res.status(500).json({ error: "AI service error" });
    }
});

module.exports = router;
