const mongoose = require('mongoose');


const oewsSchema = new mongoose.Schema({
    AREA: {
        type: String,
        required: false
    },
    AREA_TITLE: {
        type: String,
        required: false
    },
    AREA_TYPE: {
        type: String,
        required: false
    },
    A_MEAN: {
        type: String,
        required: false
    },
    A_MEDIAN: {
        type: String,
        required: false
    },
    A_PCT10: {
        type: String,
        required: false
    },
    A_PCT25: {
        type: String,
        required: false
    },
    A_PCT75: {
        type: String,
        required: false
    },
    A_PCT90: {
        type: String,
        required: false
    },
    EMP_PRSE: {
        type: String,
        required: false
    },
    H_MEAN: {
        type: String,
        required: false
    },
    H_MEDIAN: {
        type: String,
        required: false
    },
    H_PCT10: {
        type: String,
        required: false
    },
    H_PCT25: {
        type: String,
        required: false
    },
    H_PCT75: {
        type: String,
        required: false
    },
    H_PCT90: {
        type: String,
        required: false
    },
    I_GROUP: {
        type: String,
        required: false
    },
    MEAN_PRSE: {
        type: String,
        required: false
    },
    NAICS: {
        type: String,
        required: false
    },
    NAICS_TITLE: {
        type: String,
        required: false
    },
    OCC_CODE: {
        type: String,
        required: false
    },
    OCC_TITLE: {
        type: String,
        required: false
    },
    OWN_CODE: {
        type: String,
        required: false
    },
    O_GROUP: {
        type: String,
        required: false
    },
    PRIM_STATE: {
        type: String,
        required: false
    },
    TOT_EMP: {
        type: String,
        required: false
    },
    YEAR: {
        type: String,
        required: false
    },
});



module.exports = mongoose.model('Oews', oewsSchema);