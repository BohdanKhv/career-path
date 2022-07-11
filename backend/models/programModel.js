const mongoose = require('mongoose');


const programSchema = new mongoose.Schema({
    unitid: {
        type: String,
    },
    name: {
        type: String,
    },
    provides: {
        cipcode: {
            type: String,
        },
        associate: {
            type: Boolean,
        },
        bachelor: {
            type: Boolean,
        },
        master: {
            type: Boolean,
        },
        doctorResearchScholarship: {
            type: Boolean,
        },
        doctorProfessionalPractice: {
            type: Boolean,
        },
        doctorOther: {
            type: Boolean,
        },
    },
    cipTitle: {
        type: String,
    }
});


module.exports = mongoose.model('Program', programSchema);