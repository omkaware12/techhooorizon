const instituteService = require('../service/instituteService');
const { validationResult } = require('express-validator');

// Create Institute
const createInstitute = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const userId = req.user.id;
        const institute = await instituteService.createInstitute(userId, req.body);

        res.status(201).json({
            success: true,
            message: "Institute created successfully",
            data: institute
        });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

// Get All Institutes
const getAllInstitutes = async (req, res) => {
    try {
        const institutes = await instituteService.getAllInstitutes();
        res.status(200).json({
            success: true,
            count: institutes.length,
            data: institutes
        });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

// Get Single Institute
const getInstituteById = async (req, res) => {
    try {
        const institute = await instituteService.getInstituteById(req.params.id);
        if (!institute) return res.status(404).json({ message: 'Institute not found' });

        res.status(200).json({
            success: true,
            data: institute
        });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

// Update Institute
const updateInstitute = async (req, res) => {
    try {
        const updatedInstitute = await instituteService.updateInstitute(req.params.id, req.body);
        if (!updatedInstitute) return res.status(404).json({ message: 'Institute not found' });

        res.status(200).json({
            success: true,
            message: "Institute updated successfully",
            data: updatedInstitute
        });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

// Delete Institute
const deleteInstitute = async (req, res) => {
    try {
        const deletedInstitute = await instituteService.deleteInstitute(req.params.id);
        if (!deletedInstitute) return res.status(404).json({ message: 'Institute not found' });

        res.status(200).json({
            success: true,
            message: "Institute deleted successfully"
        });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

module.exports = {
    createInstitute,
    getAllInstitutes,
    getInstituteById,
    updateInstitute,
    deleteInstitute
};
