const Job = require('../models/jobModel');
const University = require('../models/universityModel');
const cheerio = require('cheerio');
const axios = require('axios');
const fs = require('fs');


// @route   GET api/jobs/2021?area=str&o_group
// @desc    Get jobs
// @access  Public
const getJobs = async (req, res) => {
    try {
        // const { area, o_group } = req.query;

        // const jobs = await Jobs.find({ area, o_group });

        // return res.status(200).json(Jobs);
    } catch (err) {
        console.error(err.message);
        return res.status(500).send('Server Error');
    }
}

const test = async (req, res) => {

}


module.exports = {
    getJobs,
    test
}