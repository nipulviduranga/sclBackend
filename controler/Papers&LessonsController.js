const papersAndLessonsSchema=require('../model/Papers&Lessons')


const saveData = (req,res)=>{
    console.log(req.body.topic,req.body.link,req.body.other)
    const Data = new papersAndLessonsSchema({
        Topic: req.body.topic,
        Link :req.body.link,
        Other:req.body.other
    });
    Data.save().then(result=>{
        res.status(200).json({message:'Saved',isSaved:true});
    }).catch(err=>{
        res.status(500).json(err);
        console.log(err);
    });
}
const getData = (req,res) => {

    try {
        papersAndLessonsSchema.find().then(result=>{
            res.status(200).json({dataSet: result});

        });
    }catch (e) {
        res.status(500).json({error : e});
        console.log(e);
    }
}

const deleteData = (req,res)=>{
    papersAndLessonsSchema.deleteOne({_id:req.headers.id}).then(result=>{
        if(result.deletedCount>0){
            res.status(200).json({message: 'Deleted'});
        }else {
            res.status(500).json({message: 'Try Again'});
        }
    }).catch(err=>{
        res.status(500).json({error: err});
    });

}

module.exports ={
    saveData,deleteData,getData
}
