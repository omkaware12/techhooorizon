const Institute = require('../schema/instituteSchema');

const createInstitute = async (data) => {
    return await Institute.create(data);
};

const getAllInstitutes = async () => {
    return await Institute.find().populate('userId', 'name email contact');
};

const getInstituteById = async (id) => {
    return await Institute.findById(id).populate('userId', 'name email contact');
};

const updateInstitute = async (id, data) => {
    return await Institute.findByIdAndUpdate(id, data, { new: true });
};

const deleteInstitute = async (id) => {
    return await Institute.findByIdAndDelete(id);
};

module.exports = {
    createInstitute,
    getAllInstitutes,
    getInstituteById,
    updateInstitute,
    deleteInstitute
};
