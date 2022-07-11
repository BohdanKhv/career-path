const mongoose = require('mongoose');



const jobSchema = new mongoose.Schema({
    areaTitle: {
        type: String,
    },
    state: {
        type: String,
    },
    naics: {
        type: String,
    },
    occCode: {
        type: String,
    },
    occTitle: {
        type: String,
    },
    level: {
        type: String,
    },
    totalEmp: {
        type: Number,
    },
    empRse: {
        type: Number,
    },
    wage: {
        hourly: {
            type: Number,
        },
        annually: {
            type: Number,
        },
        rse: {
            type: Number,
        }
    },
    wagePct: {
        pct10H: {
            type: Number,
        },
        pct25H: {
            type: Number,
        },
        pct50H: {
            type: Number,
        },
        pct75H: {
            type: Number,
        },
        pct90H: {
            type: Number,
        },
        pct10A: {
            type: Number,
        },
        pct25A: {
            type: Number,
        },
        pct50A: {
            type: Number,
        },
        pct75A: {
            type: Number,
        },
        pct90A: {
            type: Number,
        },
    }
});



module.exports = mongoose.model('Job', jobSchema);