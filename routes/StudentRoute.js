const StudentControl=require('../controler/StudentController');
var express = require('express');

const router =express.Router();

router.post('/saveStudent',StudentControl.saveStudent);

module.exports = router;
