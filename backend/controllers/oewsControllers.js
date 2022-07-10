const Oews = require('../models/oewsModel');


// @route   GET api/oews/2021?area=str&o_group
// @desc    Get oews
// @access  Public
const getOews = async (req, res) => {
    try {
        const { area, o_group } = req.query;

        const oews = await Oews.find({ area, o_group });

        return res.status(200).json(oews);
    } catch (err) {
        console.error(err.message);
        return res.status(500).send('Server Error');
    }
}

const test = async (req, res) => {
    try {
        return res.status(200).json('a');
    } catch (err) {
        console.log(err);
        return res.status(500).send('Server Error');
    }
}


module.exports = {
    getOews,
    test
}