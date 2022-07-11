const express = require('express');
const router = express.Router();
const {
    downloadLogo,
} = require('../controllers/developControllers');


router.route('/downloadLogo').get(downloadLogo);



module.exports = router;