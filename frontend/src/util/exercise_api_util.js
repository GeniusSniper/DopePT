import axios from 'axios';

export const getAllExercises = (userType, userId) => ( 
    axios.get(`/api/${userType}/${userId}/exercises/`) 
);

export const createExercise = (userId, exerciseData) => ( 
    axios.post(`/api/clinicians/${userId}/exercises/`, exerciseData) 
);

export const updateExercise = (exercise) => (
    axios.patch(`/api/clinicians/${exercise._id}`)
)

export const deleteExercise = (exerciseId) => (
    axios.delete(`/api/clinicians/${exerciseId}`)
);

export const assignExercise = (exerciseId, patientId) => (
    axios.post(`/api/clinicians/assign/${exerciseId}/${patientId}`)
);