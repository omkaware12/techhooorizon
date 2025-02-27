const express = require('express');
const { body } = require('express-validator');
const { createInstitute, getAllInstitutes, getInstituteById, updateInstitute, deleteInstitute } = require('../controllers/instituteController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post(
    '/',
    authMiddleware,
    [
        body('location').notEmpty().withMessage('Location is required'),
        body('vision').optional(),
        body('mission').optional()
    ],
    createInstitute
);

router.get('/', getAllInstitutes);
router.get('/:id', getInstituteById);
router.put('/:id', authMiddleware, updateInstitute);
router.delete('/:id', authMiddleware, deleteInstitute);

module.exports = router;
