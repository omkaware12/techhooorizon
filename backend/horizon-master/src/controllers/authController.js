const { registerUser, loginUser } = require('../service/authService');

const register = async (req, res) => {
    try {
        const { name, email, password, contact, role } = req.body;
        if (!name || !email || !password || !contact || !role) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const { user, token } = await registerUser({ name, email, password, contact, role });
        res.status(201).json({ success: true, user, token });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }

        const { user, token } = await loginUser(email, password);
        res.status(200).json({ success: true, user, token });
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
};

const getProfile = async (req, res) => {
    res.status(200).json(req.user);
};

module.exports = { register, login, getProfile };
