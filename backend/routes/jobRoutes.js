const express = require('express');
const router = express.Router();
const {
    getJobs,
    test,
} = require('../controllers/jobControllers');


if (process.env.NODE_ENV === 'development') {
    router.route('/test').get(test);
}

router.route('/').get(getJobs);


module.exports = router;