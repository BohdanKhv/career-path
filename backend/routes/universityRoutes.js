const express = require('express');
const router = express.Router();
const {
    getUniversityByUnitid,
    searchUniversities,
} = require('../controllers/universityControllers');



router.get('/:unitid', getUniversityByUnitid);
router.get('/search', searchUniversities);


module.exports = router;