const express = require('express');
const {
    createRequirement,
    getAllRequirements,
    getRequirementsByInstitute,
    updateRequirementStatus
} = require('../controllers/requirementcontroller');

const authMiddleware = require('../middleware/authMiddleware');

const requirementRouter = express.Router();

requirementRouter.post('/', authMiddleware, createRequirement);
requirementRouter.get('/', getAllRequirements);
requirementRouter.get('/:instituteId', getRequirementsByInstitute);
requirementRouter.put('/:id/status', authMiddleware, updateRequirementStatus);

module.exports = requirementRouter;
