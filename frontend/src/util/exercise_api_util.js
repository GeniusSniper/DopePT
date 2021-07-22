import axios from 'axios';

export const getAllExercises = (userType, userId) => ( 
    axios.get(`/api/${userType}/${userId}/exercises/`) 
);

export const getExercise = (userType, userId, exerciseId) => ( 
    axios.get(`/api/${userType}/${userId}/exercises/${exerciseId}`) 
);

export const createExercise = (userId, exerciseData) => ( 
    axios.post(`/api/clinicians/${userId}/exercises/new`, exerciseData) 
);
