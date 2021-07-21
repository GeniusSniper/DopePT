import axios from 'axios';

export const getAllExercises = (userType) => ( 
    axios.get(`/api/${userType}/exercises/`) 
);

export const getExercise = (userType, exerciseId) => ( 
    axios.get(`/api/${userType}/exercises/${exerciseId}`) 
);

export const createExercise = (exerciseData) => ( 
    axios.post(`/api/clinicians/exercises/new`, exerciseData) 
);