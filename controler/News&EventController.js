const NewsAndEventSchema=require('../model/News&EventDTO')

const saveNews = (req,res)=>{
    const News = new NewsAndEventSchema({
        Title: req.body.title,
        Date :req.body.date,
        ImgUrl: req.body.imgUrl,
        Content: req.body.content,
        Other:[]
    })
    News.save().then(result=>{
        res.status(200).json({message:'Saved',isSaved:true});
    }).catch(err=>{
        res.status(500).json(err);
        console.log(err);
    });
}
const getNews = (req,res) => {
    try {
        NewsAndEventSchema.find().then(result=>{
            res.status(200).json({dataSet: result});

        });
    }catch (e) {
        res.status(500).json({error : e})
    }
}

const deleteNews = (req,res)=>{
    NewsAndEventSchema.deleteOne({_id:req.headers.id}).then(result=>{
        if(result.deletedCount>0){
            res.status(200).json({message: 'Deleted'});
        }else {
            res.status(500).json({message: 'Try Again'});
        }
    }).catch(err=>{
        res.status(500).json({error: err});
    });

}
const updateNews = (req,res)=>{
    NewsAndEventSchema.updateOne({_id:req.body.id},{$set:{
            Title: req.body.title,
            Date :req.body.date,
            ImgUrl: req.body.imgUrl,
            Content: req.body.content,
            Other:[]
        }}).then(result=>{
            if(result.nModified>0){
                res.status(200).json({message: 'Updated'});
            }else {
                res.status(500).json({message: 'Try Again'});
            }
    }).catch(err=>{
        res.status(500).json({message:err});
        console.log(err);
    });
}

module.exports ={
    saveNews,deleteNews,updateNews,getNews
}
