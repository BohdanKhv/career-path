const Program = require('../models/programModel');


// @route   GET api/programs/:unitid
// @desc    Get programs by unitid
// @access  Public
const getProgramsByUnitid = async (req, res) => {
    try {
        const programs = await Program.find({ unitid: req.params.unitid });
        return res.status(200).json(programs);
    } catch (err) {
        console.error(err.message);
        return res.status(500).send('Server Error');
    }
}


// @route   GET api/programs/search?q=
// @desc    Search programs
// @access  Public
const searchPrograms = async (req, res) => {
    try {
        const programs = await Program.find({
            $text: {
                $search: req.query.q
            }
        }).limit(5);
        return res.status.json(programs);
    } catch (err) {
        console.error(err.message);
        return res.status(500).send('Server Error');
    }
}


module.exports = {
    getProgramsByUnitid,
    searchPrograms
}