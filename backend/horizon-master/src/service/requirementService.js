const requirementRepository = require('../repository/requirementRepository');

const createRequirement = async (data) => {
    return await requirementRepository.createRequirement(data);
};

const getAllRequirements = async () => {
    return await requirementRepository.getAllRequirements();
};

const getRequirementsByInstitute = async (instituteId) => {
    return await requirementRepository.getRequirementsByInstitute(instituteId);
};

const updateRequirementStatus = async (id, status) => {
    return await requirementRepository.updateRequirementStatus(id, status);
};

module.exports = {
    createRequirement,
    getAllRequirements,
    getRequirementsByInstitute,
    updateRequirementStatus
};
