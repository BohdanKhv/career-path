const express = require('express');
const router = express.Router();
const {
    getOews,
    test,
} = require('../controllers/oewsControllers');


if (process.env.NODE_ENV === 'development') {
    router.route('/test').get(test);
}

router.route('/2021').get(getOews);


module.exports = router;