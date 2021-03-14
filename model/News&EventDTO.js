const mongoose=require('mongoose');

const NewsAndEventSchema= new mongoose.Schema({
   Title:{
       type:String,
       required:true
   } ,
   Date: {
       type:String
   },
    Content:{
        type:String,
        required:true
    },
    ImgUrl:{
        type:String
    },
    Other:{
        type:Array
    }
});

module.exports= mongoose.model('News&EventSchema',NewsAndEventSchema);
