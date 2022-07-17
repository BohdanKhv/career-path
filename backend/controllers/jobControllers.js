const Job = require('../models/jobModel');


// @route   GET api/jobs?area=str&state=str&occCode=str&sort=int&&offset=int
// @desc    Get jobs
// @access  Public
const getJobs = async (req, res) => {
    try {
        const { area, state, occCode, sort, offset } = req.query;
        const jobs = await Job.find({
            areaTitle: area || { $exists: true },
            state: state || "US",
            // level: 'major',
            occCode:
                occCode ? 
                    { $regex: `^${occCode}`, $options: 'i' } :
                { $exists: true },
            naics: 'cross-industry',
            'wage.annually': { $exists: true },
        })
        .sort({
            'wage.annually': sort == 1 ? 1 : -1,
        })
        .skip(offset || 0)
        .limit(30);

        return res.status(200).json(jobs);
    } catch (error) {
        return res.status(500).json({
            msg: error.message,
        });
    }
}

const test = async (req, res) => {

}


module.exports = {
    getJobs,
    test
}