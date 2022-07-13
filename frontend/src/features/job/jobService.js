import axios from 'axios';


const API_URL = '/api/profiles/';


// Get profile
const getJobs = async (data) => {
    const res = await axios.get(`${API_URL}${data}`);

    return res.data;
}


const profileService = {
    getJobs,
}

export default profileService;