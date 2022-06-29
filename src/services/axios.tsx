import axios from 'axios';

const axiosInstance = axios.create({
    // withCredentials: true,
    baseURL: "https://us-central1-cryptoja-3450e.cloudfunctions.net/api",
    timeout: 0, // No time limit
    timeoutErrorMessage: 'TIMEOUT: This request took longer than expected.'
    
});

export default axiosInstance;