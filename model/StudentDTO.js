const mongoose=require('mongoose');


const StudentSchema = new mongoose.Schema({
    StudentName: {
        type: String,
        required: true
    },
    SubMaths: {
        type: Number,
        required: true
    },
    SubSinhala: {
        type: Number,
        required: true
    },
    SubEnglish: {
        type: Number,
        required: true
    },
    SubHealth: {
        type: Number,
        required: true
    },
    SubScience: {
        type: Number,
        required: true
    },
    SubBuddhism: {
        type: Number,
        required: true
    },
    SubCitizen: {
        type: Number,
        required: true
    },
    SubGeography: {
        type: Number,
        required: true
    },
    SubIt: {
        type: Number,
        required: true
    },
    SubPTS: {
        type: Number,
        required: true
    },
    SubHistory: {
        type: Number,
        required: true
    },
    SubTamil: {
        type: Number,
        required: true
    },
    SubAesrhetics: {
        type: Number,
        required: true
    },
    Total: {
        type: Number,

    },
    other:{
        type:Array
    }
});

const None =mongoose.model('None', StudentSchema);
const MarksGrade06Term1=mongoose.model('MarksGrade06Term1', StudentSchema);
const MarksGrade06Term2=mongoose.model('MarksGrade06Term2', StudentSchema);
const MarksGrade06Term3=mongoose.model('MarksGrade06Term3', StudentSchema);

module.exports ={
    MarksGrade06Term1,MarksGrade06Term2,MarksGrade06Term3,None
}




