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

router.post('/saveStudentGrade07Term1',StudentControl.saveStudent);
router.get('/MarksGrade07Term1',StudentControl.getMarks);
router.delete('/deleteStudentGrade07Term1',StudentControl.deleteStudent);
router.put('/updateStudentGrade07Term1',StudentControl.updateStudent);

router.post('/saveStudentGrade07Term2',StudentControl.saveStudent);
router.get('/MarksGrade07Term2',StudentControl.getMarks);
router.delete('/deleteStudentGrade07Term2',StudentControl.deleteStudent);
router.put('/updateStudentGrade07Term2',StudentControl.updateStudent);

router.post('/saveStudentGrade07Term3',StudentControl.saveStudent);
router.get('/MarksGrade07Term3',StudentControl.getMarks);
router.delete('/deleteStudentGrade07Term3',StudentControl.deleteStudent);
router.put('/updateStudentGrade07Term3',StudentControl.updateStudent);

router.post('/saveStudentGrade08Term1',StudentControl.saveStudent);
router.get('/MarksGrade08Term1',StudentControl.getMarks);
router.delete('/deleteStudentGrade08Term1',StudentControl.deleteStudent);
router.put('/updateStudentGrade08Term1',StudentControl.updateStudent);

router.post('/saveStudentGrade08Term2',StudentControl.saveStudent);
router.get('/MarksGrade08Term2',StudentControl.getMarks);
router.delete('/deleteStudentGrade08Term2',StudentControl.deleteStudent);
router.put('/updateStudentGrade08Term2',StudentControl.updateStudent);

router.post('/saveStudentGrade08Term3',StudentControl.saveStudent);
router.get('/MarksGrade08Term3',StudentControl.getMarks);
router.delete('/deleteStudentGrade08Term3',StudentControl.deleteStudent);
router.put('/updateStudentGrade08Term3',StudentControl.updateStudent);

router.post('/saveStudentGrade09Term1',StudentControl.saveStudent);
router.get('/MarksGrade09Term1',StudentControl.getMarks);
router.delete('/deleteStudentGrade09Term1',StudentControl.deleteStudent);
router.put('/updateStudentGrade09Term1',StudentControl.updateStudent);

router.post('/saveStudentGrade09Term2',StudentControl.saveStudent);
router.get('/MarksGrade09Term2',StudentControl.getMarks);
router.delete('/deleteStudentGrade09Term2',StudentControl.deleteStudent);
router.put('/updateStudentGrade09Term2',StudentControl.updateStudent);

router.post('/saveStudentGrade09Term3',StudentControl.saveStudent);
router.get('/MarksGrade09Term3',StudentControl.getMarks);
router.delete('/deleteStudentGrade09Term3',StudentControl.deleteStudent);
router.put('/updateStudentGrade09Term3',StudentControl.updateStudent);

router.post('/saveStudentGrade10Term1',StudentControl.saveStudent);
router.get('/MarksGrade10Term1',StudentControl.getMarks);
router.delete('/deleteStudentGrade10Term1',StudentControl.deleteStudent);
router.put('/updateStudentGrade10Term1',StudentControl.updateStudent);

router.post('/saveStudentGrade10Term2',StudentControl.saveStudent);
router.get('/MarksGrade10Term2',StudentControl.getMarks);
router.delete('/deleteStudentGrade10Term2',StudentControl.deleteStudent);
router.put('/updateStudentGrade10Term2',StudentControl.updateStudent);

router.post('/saveStudentGrade10Term3',StudentControl.saveStudent);
router.get('/MarksGrade10Term3',StudentControl.getMarks);
router.delete('/deleteStudentGrade10Term3',StudentControl.deleteStudent);
router.put('/updateStudentGrade10Term3',StudentControl.updateStudent);

router.post('/saveStudentGrade11Term1',StudentControl.saveStudent);
router.get('/MarksGrade11Term1',StudentControl.getMarks);
router.delete('/deleteStudentGrade11Term1',StudentControl.deleteStudent);
router.put('/updateStudentGrade11Term1',StudentControl.updateStudent);

router.post('/saveStudentGrade11Term2',StudentControl.saveStudent);
router.get('/MarksGrade11Term2',StudentControl.getMarks);
router.delete('/deleteStudentGrade11Term2',StudentControl.deleteStudent);
router.put('/updateStudentGrade11Term2',StudentControl.updateStudent);

router.post('/saveStudentGrade11Term3',StudentControl.saveStudent);
router.get('/MarksGrade11Term3',StudentControl.getMarks);
router.delete('/deleteStudentGrade11Term3',StudentControl.deleteStudent);
router.put('/updateStudentGrade11Term3',StudentControl.updateStudent);

router.post('/saveStudentGrade12ArtTerm1',StudentControl.saveStudent);
router.get('/MarksGrade12ArtTerm1',StudentControl.getMarks);
router.delete('/deleteStudentGrade12ArtTerm1',StudentControl.deleteStudent);
router.put('/updateStudentGrade12ArtTerm1',StudentControl.updateStudent);

router.post('/saveStudentGrade12ArtTerm2',StudentControl.saveStudent);
router.get('/MarksGrade12ArtTerm2',StudentControl.getMarks);
router.delete('/deleteStudentGrade12ArtTerm2',StudentControl.deleteStudent);
router.put('/updateStudentGrade12ArtTerm2',StudentControl.updateStudent);

router.post('/saveStudentGrade12ArtTerm3',StudentControl.saveStudent);
router.get('/MarksGrade12ArtTerm3',StudentControl.getMarks);
router.delete('/deleteStudentGrade12ArtTerm3',StudentControl.deleteStudent);
router.put('/updateStudentGrade12ArtTerm3',StudentControl.updateStudent);

router.post('/saveStudentGrade12ComTerm1',StudentControl.saveStudent);
router.get('/MarksGrade12ComTerm1',StudentControl.getMarks);
router.delete('/deleteStudentGrade12ComTerm1',StudentControl.deleteStudent);
router.put('/updateStudentGrade12ComTerm1',StudentControl.updateStudent);

router.post('/saveStudentGrade12ComTerm2',StudentControl.saveStudent);
router.get('/MarksGrade12ComTerm2',StudentControl.getMarks);
router.delete('/deleteStudentGrade12ComTerm2',StudentControl.deleteStudent);
router.put('/updateStudentGrade12ComTerm2',StudentControl.updateStudent);

router.post('/saveStudentGrade12ComTerm3',StudentControl.saveStudent);
router.get('/MarksGrade12ComTerm3',StudentControl.getMarks);
router.delete('/deleteStudentGrade12ComTerm3',StudentControl.deleteStudent);
router.put('/updateStudentGrade12ComTerm3',StudentControl.updateStudent);

router.post('/saveStudentGrade12TecTerm1',StudentControl.saveStudent);
router.get('/MarksGrade12TecTerm1',StudentControl.getMarks);
router.delete('/deleteStudentGrade12TecTerm1',StudentControl.deleteStudent);
router.put('/updateStudentGrade12TecTerm1',StudentControl.updateStudent);

router.post('/saveStudentGrade12TecTerm2',StudentControl.saveStudent);
router.get('/MarksGrade12TecTerm2',StudentControl.getMarks);
router.delete('/deleteStudentGrade12TecTerm2',StudentControl.deleteStudent);
router.put('/updateStudentGrade12TecTerm2',StudentControl.updateStudent);

router.post('/saveStudentGrade12TecTerm3',StudentControl.saveStudent);
router.get('/MarksGrade12TecTerm3',StudentControl.getMarks);
router.delete('/deleteStudentGrade12TecTerm3',StudentControl.deleteStudent);
router.put('/updateStudentGrade12TecTerm3',StudentControl.updateStudent);

router.post('/saveStudentGrade12MathsTerm1',StudentControl.saveStudent);
router.get('/MarksGrade12MathsTerm1',StudentControl.getMarks);
router.delete('/deleteStudentGrade12MathsTerm1',StudentControl.deleteStudent);
router.put('/updateStudentGrade12MathsTerm1',StudentControl.updateStudent);

router.post('/saveStudentGrade12MathsTerm2',StudentControl.saveStudent);
router.get('/MarksGrade12MathsTerm2',StudentControl.getMarks);
router.delete('/deleteStudentGrade12MathsTerm2',StudentControl.deleteStudent);
router.put('/updateStudentGrade12MathsTerm2',StudentControl.updateStudent);

router.post('/saveStudentGrade12MathsTerm3',StudentControl.saveStudent);
router.get('/MarksGrade12MathsTerm3',StudentControl.getMarks);
router.delete('/deleteStudentGrade12MathsTerm3',StudentControl.deleteStudent);
router.put('/updateStudentGrade12MathsTerm3',StudentControl.updateStudent);

router.post('/saveStudentGrade12BioTerm1',StudentControl.saveStudent);
router.get('/MarksGrade12BioTerm1',StudentControl.getMarks);
router.delete('/deleteStudentGrade12BioTerm1',StudentControl.deleteStudent);
router.put('/updateStudentGrade12BioTerm1',StudentControl.updateStudent);

router.post('/saveStudentGrade12BioTerm2',StudentControl.saveStudent);
router.get('/MarksGrade12BioTerm2',StudentControl.getMarks);
router.delete('/deleteStudentGrade12BioTerm2',StudentControl.deleteStudent);
router.put('/updateStudentGrade12BioTerm2',StudentControl.updateStudent);

router.post('/saveStudentGrade12BioTerm3',StudentControl.saveStudent);
router.get('/MarksGrade12BioTerm3',StudentControl.getMarks);
router.delete('/deleteStudentGrade12BioTerm3',StudentControl.deleteStudent);
router.put('/updateStudentGrade12BioTerm3',StudentControl.updateStudent);

router.post('/saveStudentGrade13ArtTerm1',StudentControl.saveStudent);
router.get('/MarksGrade13ArtTerm1',StudentControl.getMarks);
router.delete('/deleteStudentGrade13ArtTerm1',StudentControl.deleteStudent);
router.put('/updateStudentGrade13ArtTerm1',StudentControl.updateStudent);

router.post('/saveStudentGrade13ArtTerm2',StudentControl.saveStudent);
router.get('/MarksGrade13ArtTerm2',StudentControl.getMarks);
router.delete('/deleteStudentGrade13ArtTerm2',StudentControl.deleteStudent);
router.put('/updateStudentGrade13ArtTerm2',StudentControl.updateStudent);

router.post('/saveStudentGrade13ArtTerm3',StudentControl.saveStudent);
router.get('/MarksGrade13ArtTerm3',StudentControl.getMarks);
router.delete('/deleteStudentGrade13ArtTerm3',StudentControl.deleteStudent);
router.put('/updateStudentGrade13ArtTerm3',StudentControl.updateStudent);

router.post('/saveStudentGrade13ComTerm1',StudentControl.saveStudent);
router.get('/MarksGrade13ComTerm1',StudentControl.getMarks);
router.delete('/deleteStudentGrade13ComTerm1',StudentControl.deleteStudent);
router.put('/updateStudentGrade13ComTerm1',StudentControl.updateStudent);

router.post('/saveStudentGrade13ComTerm2',StudentControl.saveStudent);
router.get('/MarksGrade13ComTerm2',StudentControl.getMarks);
router.delete('/deleteStudentGrade13ComTerm2',StudentControl.deleteStudent);
router.put('/updateStudentGrade13ComTerm2',StudentControl.updateStudent);

router.post('/saveStudentGrade13ComTerm3',StudentControl.saveStudent);
router.get('/MarksGrade13ComTerm3',StudentControl.getMarks);
router.delete('/deleteStudentGrade13ComTerm3',StudentControl.deleteStudent);
router.put('/updateStudentGrade13ComTerm3',StudentControl.updateStudent);

router.post('/saveStudentGrade13TecTerm1',StudentControl.saveStudent);
router.get('/MarksGrade13TecTerm1',StudentControl.getMarks);
router.delete('/deleteStudentGrade13TecTerm1',StudentControl.deleteStudent);
router.put('/updateStudentGrade13TecTerm1',StudentControl.updateStudent);

router.post('/saveStudentGrade13TecTerm2',StudentControl.saveStudent);
router.get('/MarksGrade13TecTerm2',StudentControl.getMarks);
router.delete('/deleteStudentGrade13TecTerm2',StudentControl.deleteStudent);
router.put('/updateStudentGrade13TecTerm2',StudentControl.updateStudent);

router.post('/saveStudentGrade13TecTerm3',StudentControl.saveStudent);
router.get('/MarksGrade13TecTerm3',StudentControl.getMarks);
router.delete('/deleteStudentGrade13TecTerm3',StudentControl.deleteStudent);
router.put('/updateStudentGrade13TecTerm3',StudentControl.updateStudent);

router.post('/saveStudentGrade13MathsTerm1',StudentControl.saveStudent);
router.get('/MarksGrade13MathsTerm1',StudentControl.getMarks);
router.delete('/deleteStudentGrade13MathsTerm1',StudentControl.deleteStudent);
router.put('/updateStudentGrade13MathsTerm1',StudentControl.updateStudent);

router.post('/saveStudentGrade13MathsTerm2',StudentControl.saveStudent);
router.get('/MarksGrade13MathsTerm2',StudentControl.getMarks);
router.delete('/deleteStudentGrade13MathsTerm2',StudentControl.deleteStudent);
router.put('/updateStudentGrade13MathsTerm2',StudentControl.updateStudent);

router.post('/saveStudentGrade13MathsTerm3',StudentControl.saveStudent);
router.get('/MarksGrade13MathsTerm3',StudentControl.getMarks);
router.delete('/deleteStudentGrade13MathsTerm3',StudentControl.deleteStudent);
router.put('/updateStudentGrade13MathsTerm3',StudentControl.updateStudent);

router.post('/saveStudentGrade13BioTerm1',StudentControl.saveStudent);
router.get('/MarksGrade13BioTerm1',StudentControl.getMarks);
router.delete('/deleteStudentGrade13BioTerm1',StudentControl.deleteStudent);
router.put('/updateStudentGrade13BioTerm1',StudentControl.updateStudent);

router.post('/saveStudentGrade13BioTerm2',StudentControl.saveStudent);
router.get('/MarksGrade13BioTerm2',StudentControl.getMarks);
router.delete('/deleteStudentGrade13BioTerm2',StudentControl.deleteStudent);
router.put('/updateStudentGrade13BioTerm2',StudentControl.updateStudent);

router.post('/saveStudentGrade13BioTerm3',StudentControl.saveStudent);
router.get('/MarksGrade13BioTerm3',StudentControl.getMarks);
router.delete('/deleteStudentGrade13BioTerm3',StudentControl.deleteStudent);
router.put('/updateStudentGrade13BioTerm3',StudentControl.updateStudent);



module.exports = router;
