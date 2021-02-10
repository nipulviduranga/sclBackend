const StudentSchema=require('../model/StudentDTO');


const saveStudent = (req,res) =>{

    const student = new StudentSchema(
        {
            studentId: req.body.studentId,
            studentName: req.body.studentName,
            studentMarks: req.body.studentMarks,
            studentSubject: req.body.studentSubject
        }
);

    student.save().then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json(error);

    });


};
module.exports = {
    saveStudent
};
