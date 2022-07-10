import axios from 'axios';


const API_URL = '/api/profiles/';


// Get profile
const getOews = async (data) => {
    const res = await axios.get(`${API_URL}${data}`);

    return res.data;
}


const profileService = {
    getOews,
}

export default profileService;