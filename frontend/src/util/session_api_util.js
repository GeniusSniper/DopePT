import axios from 'axios';

export const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

export const signupClinician = (userData) => {
  return axios.post('/api/clinicians/register', userData);
};

export const signupPatient = (userData) => {
  return axios.post('/api/patients/register', userData);
};

export const login = (userData) => {
  return axios.post('/api/users/login', userData);
};

