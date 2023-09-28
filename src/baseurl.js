import axios from 'axios';

const axiosInstance = axios.create({
  // baseURL: 'http://43.204.92.123:4001/smart_journalism_api ', 
  baseURL: 'http://localhost:4001/smart_journalism_api', 



  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance
