import axios from 'axios';


const API_URL = '/api/jobs';


// @route   GET api/jobs?area=str&state=str&occCode=str&sort=int&offset=int
// @desc    Get jobs
// @access  Public
const getJobs = async (data) => {
    const { area, state, occCode, sort, offset } = data;
    const url = `${API_URL}?${area ? 'area='+area : ''}${state ? `&state=`+state : ''}${occCode ? '&occCode='+occCode : ''}${sort ? '&sort='+sort : ''}${offset ? '&offset='+offset : ''}`;
    const res = await axios.get(`${url}`);

    return res.data;
}


const profileService = {
    getJobs,
}

export default profileService;