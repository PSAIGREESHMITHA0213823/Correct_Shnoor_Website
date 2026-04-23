import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Contact API
export const submitContact = async (contactData) => {
  const response = await api.post('/api/contacts', contactData);
  return response.data;
};

// Jobs API
export const getJobs = async () => {
  const response = await api.get('/api/jobs');
  return response.data;
};

export default api;