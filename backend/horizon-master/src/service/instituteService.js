const instituteRepository = require('../repository/instituteRepository');
const axios = require('axios'); // For Google Maps API

const getCoordinates = async (address) => {
    try {
        const apiKey = process.env.GOOGLE_MAPS_API_KEY;
        const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json`, {
            params: { address, key: apiKey }
        });

        if (response.data.status === "OK") {
            const { lat, lng } = response.data.results[0].geometry.location;
            return { lat, lng };
        }
        return { lat: null, lng: null };
    } catch (error) {
        console.error('Error fetching coordinates:', error.message);
        return { lat: null, lng: null };
    }
};

const createInstitute = async (userId, instituteData) => {
    const { location } = instituteData;
    const coordinates = await getCoordinates(location);

    const newInstitute = {
        userId,
        ...instituteData,
        lat: coordinates.lat,
        lng: coordinates.lng
    };

    return await instituteRepository.createInstitute(newInstitute);
};

const getAllInstitutes = async () => {
    return await instituteRepository.getAllInstitutes();
};

const getInstituteById = async (id) => {
    return await instituteRepository.getInstituteById(id);
};

const updateInstitute = async (id, instituteData) => {
    return await instituteRepository.updateInstitute(id, instituteData);
};

const deleteInstitute = async (id) => {
    return await instituteRepository.deleteInstitute(id);
};

module.exports = {
    createInstitute,
    getAllInstitutes,
    getInstituteById,
    updateInstitute,
    deleteInstitute
};
