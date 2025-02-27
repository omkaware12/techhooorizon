const requirementService = require('../service/requirementService');

const createRequirement = async (req, res) => {
    try {
        const { title, description, quantity, unit } = req.body;
        const instituteId = req.user.id; // Assuming the institute is authenticated

        const newRequirement = await requirementService.createRequirement({
            instituteId,
            title,
            description,
            quantity,
            unit
        });

        res.status(201).json({
            success: true,
            message: "Requirement created successfully",
            data: newRequirement
        });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error", error: error.message });
    }
};

const getAllRequirements = async (req, res) => {
    try {
        const requirements = await requirementService.getAllRequirements();
        res.status(200).json({ success: true, count: requirements.length, data: requirements });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error", error: error.message });
    }
};

const getRequirementsByInstitute = async (req, res) => {
    try {
        const { instituteId } = req.params;
        const requirements = await requirementService.getRequirementsByInstitute(instituteId);
        res.status(200).json({ success: true, data: requirements });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error", error: error.message });
    }
};

const updateRequirementStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        const updatedRequirement = await requirementService.updateRequirementStatus(id, status);

        if (!updatedRequirement) {
            return res.status(404).json({ success: false, message: "Requirement not found" });
        }

        res.status(200).json({
            success: true,
            message: "Requirement status updated successfully",
            data: updatedRequirement
        });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error", error: error.message });
    }
};

module.exports = {
    createRequirement,
    getAllRequirements,
    getRequirementsByInstitute,
    updateRequirementStatus
};
