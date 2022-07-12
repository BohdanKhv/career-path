const University = require('../models/universityModel');


// @route   GET api/programs/:unitId
// @desc    Get programs by unitId
// @access  Public
const getUniversityByUnitid = async (req, res) => {
    try {
        const university = await University.find({ unitid: req.params.unitid });
        return res.status(200).json(university);
    } catch (err) {
        console.error(err.message);
        return res.status(500).send('Server Error');
    }
}


// @route   GET api/programs/search?q=
// @desc    Search programs
// @access  Public
const searchUniversities = async (req, res) => {
    try {
        const programs = await University.find({
            $text: {
                $search: req.query.q
            }
        }).limit(5);

        return res.status(200).json(programs);
    } catch (err) {
        console.error(err.message);
        return res.status(500).send('Server Error');
    }
}


module.exports = {
    getUniversityByUnitid,
    searchUniversities
}