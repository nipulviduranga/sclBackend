const StudentControl=require('../controler/StudentController');
var express = require('express');

const router =express.Router();

router.post('/saveStudentGrade06Term1',StudentControl.saveStudent);
router.get('/MarksGrade06Term1',StudentControl.getMarks);
router.delete('/deleteStudentGrade06Term1',StudentControl.deleteStudent);
router.put('/updateStudentGrade06Term1',StudentControl.updateStudent);

router.post('/saveStudentGrade06Term2',StudentControl.saveStudent);
router.get('/MarksGrade06Term2',StudentControl.getMarks);
router.delete('/deleteStudentGrade06Term2',StudentControl.deleteStudent);
router.put('/updateStudentGrade06Term2',StudentControl.updateStudent);

router.post('/saveStudentGrade06Term3',StudentControl.saveStudent);
router.get('/MarksGrade06Term3',StudentControl.getMarks);
router.delete('/deleteStudentGrade06Term3',StudentControl.deleteStudent);
router.put('/updateStudentGrade06Term3',StudentControl.updateStudent);






module.exports = router;
