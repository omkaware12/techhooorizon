const express = require('express');
const { register, login, getProfile } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware'); // Ensure correct import

const authRouter = express.Router();

authRouter.post('/register', register);
authRouter.post('/login', login);
authRouter.get('/profile', authMiddleware, getProfile); // Protect the route

module.exports = authRouter;




