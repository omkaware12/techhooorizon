const User = require('../schema/userSchema');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const generateToken = (user) => {
    return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '7d' });
};

const registerUser = async (userData) => {
    const existingUser = await User.findOne({ email: userData.email });
    if (existingUser) throw new Error('User already exists');

    const user = await User.create(userData);
    return { user, token: generateToken(user) };
};

const loginUser = async (email, password) => {
    const user = await User.findOne({ email });
    if (!user || !(await user.matchPassword(password))) throw new Error('Invalid credentials');

    return { user, token: generateToken(user) };
};

module.exports = { registerUser, loginUser };
