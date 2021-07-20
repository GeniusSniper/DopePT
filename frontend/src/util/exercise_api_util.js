import axios from 'axios';

// export const setAuthToken = token => {
//   if (token) {
//     axios.defaults.headers.common['Authorization'] = token;
//   } else {
//     delete axios.defaults.headers.common['Authorization'];
//   }
// };

export const getAllExercises = () => ( axios.get('/api/exercises/') );

export const getExercise = exerciseId => ( axios.get(`/api/exercises/${exerciseId}`) );
