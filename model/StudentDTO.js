const mongoose=require('mongoose');

const StudentSchema=new mongoose.Schema({
    studentId:{
        type:String,
        required:true
    },
    StudentName:{
        type:String,
        required:true
    },
    StudentSubject:{
        type:String,
        required:true
    },
    StudentMarks:{
        type:Number,
        required:true
    }

});

module.exports=mongoose.model('Student',StudentSchema);
