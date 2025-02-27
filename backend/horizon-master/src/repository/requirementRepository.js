const Requirement = require('../schema/requirementSchema');

const createRequirement = async (data) => {
    return await Requirement.create(data);
};

const getAllRequirements = async () => {
    return await Requirement.find().populate('instituteId', 'name location');
};

const getRequirementsByInstitute = async (instituteId) => {
    return await Requirement.find({ instituteId }).populate('instituteId', 'name location');
};

const updateRequirementStatus = async (id, status) => {
    return await Requirement.findByIdAndUpdate(id, { status }, { new: true });
};

module.exports = {
    createRequirement,
    getAllRequirements,
    getRequirementsByInstitute,
    updateRequirementStatus
};
