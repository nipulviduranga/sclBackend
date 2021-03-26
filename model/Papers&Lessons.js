const mongoose=require('mongoose');

const papersAndLessonsSchema= new mongoose.Schema({

    Topic:{
        type:String,
        required:true
    },
    Link:{
        type:String,
        required:true
    },
    Other:{
        type:String
    }
});




module.exports=mongoose.model('PapersAndLessons', papersAndLessonsSchema);



