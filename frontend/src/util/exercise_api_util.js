import axios from 'axios';

export const getAllExercises = (userType, userId) => ( 
    axios.get(`/api/${userType}/${userId}/exercises/`) 
);

export const createExercise = (userId, exerciseData) => ( 
    axios.post(`/api/clinicians/${userId}/exercises/`, exerciseData) 
);

export const deleteExercise = (exerciseId) => (
    axios.delete(`/api/clinicians/${exerciseId}`)
);

export const assignExercise = (exerciseId, patientId) => (
    axios.post(`/api/clinicians/assign/${exerciseId}/${patientId}`)
);

export const removePatientExercise = (exerciseId, patientId) => (
    axios.post(`/api/clinicians/removePatienExercise/${exerciseId}/${patientId}`)
)