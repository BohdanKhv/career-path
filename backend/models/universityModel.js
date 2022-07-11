const mongoose = require('mongoose');


const universitySchema = new mongoose.Schema({
    unitid: {
        type: String,
    },
    name: {
        type: String,
    },
    graduationRate: {
        type: Number,
    },
    tuitionAndFees: {
        type: Number,
    },
    logo: {
        type: String,
    },
    enrollment: {
        full: {
            type: Number,
        },
        part: {
            type: Number,
        },
        total: {
            type: Number,
        },
    },
    info: {
        classification: {
            type: String
        },
        cityLocation: {
            type: String
        },
        phoneNumber: {
            type: String
        },
        highestDegree: {
            type: String
        },
        alias: {
            type: String
        },
        website: {
            type: String
        },
        latitude: {
            type: String
        },
        longitude: {
            type: String
        },
        administratorName: {
            type: String
        },
        priceCalculator: {
            type: String
        },
        application: {
            type: String
        },
        sector: {
            type: String
        },
        state: {
            type: String
        },
        streetAddress: {
            type: String
        },
        administratorTitle: {
            type: String
        },
        zip: {
            type: String
        },
    },
    provides: {
        associate: {
            type: Boolean
        },
        bachelor: {
            type: Boolean
        },
        doctorProfessionalPractice: {
            type: Boolean
        },
        doctorResearchScholarship: {
            type: Boolean
        },
        master: {
            type: Boolean
        },
    },
    price: {
        avgNetAid030: {
            type: Number
        },
        avgNetAid3048: {
            type: Number
        },
        avgNetAid4875: {
            type: Number
        },
        avgNetAid75110: {
            type: Number
        },
        avgNetAid110: {
            type: Number
        },
        avgNetAid: {
            type: Number
        },
    }
});


module.exports = mongoose.model('University', universitySchema);