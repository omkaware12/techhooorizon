
const { v4: uuidv4 } = require('uuid');


const institutes = [
    {
        id: uuidv4(),
        image: "https://images.pexels.com/photos/6646861/pexels-photo-6646861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        name: "Elite Engineering College",
        location: "New York, USA",
        students: 1200,
        accreditation: "ABET",
        vision: "To be a global leader in engineering education.",
        mission: "Provide world-class education with hands-on experience.",
        lat: 40.7128,
        lng: -74.0060,
        status: "active",
        createdAt: "2024-05-15T08:30:00Z"
    },
    {
        id: uuidv4(),
        image: "https://images.pexels.com/photos/10629415/pexels-photo-10629415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        name: "Global Tech University",
        location: "California , USA",
        students: 2300,
        accreditation: "QAA",
        vision: "Innovate and lead in technology research.",
        mission: "Empower students through cutting-edge education.",
        lat: 51.5074,
        lng: -0.1278,
        status: "active",
        createdAt: "2023-11-10T10:15:00Z"
    },
    {
        id: uuidv4(),
        image: "https://images.pexels.com/photos/6647119/pexels-photo-6647119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        name: "Innovate Institute of Science",
        location: "Berlin, Germany",
        students: 1800,
        accreditation: "ASIIN",
        vision: "To advance science for the benefit of humanity.",
        mission: "Deliver innovative scientific education.",
        lat: 52.5200,
        lng: 13.4050,
        status: "active",
        createdAt: "2022-09-20T12:45:00Z"
    },
    {
        id: uuidv4(),
        image: "https://images.pexels.com/photos/6646779/pexels-photo-6646779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        name: "Pioneer Academy",
        location: "Sydney, Australia",
        students: 1500,
        accreditation: "TEQSA",
        vision: "Foster creativity and leadership in education.",
        mission: "Provide transformative learning experiences.",
        lat: -33.8688,
        lng: 151.2093,
        status: "inactive",
        createdAt: "2021-06-18T14:30:00Z"
    },
    { 
        id
        : uuidv4(),
        image: "https://images.pexels.com/photos/12746319/pexels-photo-12746319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        name: "Future Vision University",
        location: "Toronto, Canada",
        students: 2100,
        accreditation: "AUCC",
        vision: "Shape the future of education through innovation.",
        mission: "Bridge knowledge with real-world applications.",
        lat: 43.65107,
        lng: -79.347015,
        status: "active",
        createdAt: "2020-04-25T09:10:00Z"
    }
];


module.exports = institutes;
