const express = require('express');
const router = express.Router();
const {
    downloadLogo,
    distinct
} = require('../controllers/developControllers');


router.route('/downloadLogo').get(downloadLogo);
router.route('/distinct').get(distinct);



module.exports = router;