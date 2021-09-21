import axios from "axios";

const axiosInstance = axios.create({
	baseURL: process.env.REACT_APP_API_DOMAIN,
	validateStatus: (status) => status >= 200 && status < 300,
});
export default axiosInstance;
