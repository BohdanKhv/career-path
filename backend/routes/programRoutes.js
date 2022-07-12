const express = require('express');
const router = express.Router();
const {
    getProgramsByUnitid,
    searchPrograms,
} = require('../controllers/programControllers');



router.get('/:unitid', getProgramsByUnitid);
router.get('/search', searchPrograms);


module.exports = router;