const StudentSchema=require('../model/StudentDTO');

var reqOfother='none';

schemaController: function schemaController() {
if (reqOfother==='Grade06Term1'){
    return StudentSchema.MarksGrade06Term1;
}else if (reqOfother==='Grade06Term2'){
    return StudentSchema.MarksGrade06Term2;
}else if (reqOfother==='Grade06Term3'){
    return StudentSchema.MarksGrade06Term3;
}else if (reqOfother==='none'){
    return StudentSchema.None;
}

}
const saveStudent = (req,res) =>{
    console.log(req.body.studentName,req.body.subHistory,req.body.subMaths,req.body.subSinhala,req.body.subHealth,req.body.subCitizen,req.body.subScience,req.body.subBuddhism,req.body.subGeography,req.body.subIt,req.body.subPTS,req.body.subAesrhetics,req.body.totals);

    const Marks6to9 = new StudentSchema.MarksGrade06Term3(
        {
            StudentName:req.body.studentName,
            SubMaths :req.body.subMaths,
            SubSinhala:req.body.subSinhala,
            SubEnglish:req.body.subEnglish,
            SubHealth:req.body.subHealth,
            SubScience:req.body.subScience,
            SubBuddhism:req.body.subBuddhism,
            SubCitizen:req.body.subCitizen,
            SubGeography:req.body.subGeography,
            SubIt:req.body.subIt,
            SubPTS:req.body.subPTS,
            SubHistory:req.body.subHistory,
            SubTamil:req.body.subTamil,
            SubAesrhetics:req.body.subAesrhetics,
            Total : req.body.totals
        }

);
    Marks6to9.save().then(result => {
        res.status(200).json({isSaved : true,data : result});
    }).catch(error => {
        res.status(500).json(error);
    });



};
const getMarks = (req,res) => {
    reqOfother=req.headers.term
    console.log(reqOfother);
   try {
       schemaController().find().then(result=>{
            res.status(200).json({dataSet: result});

        });
   }catch (e) {
    res.status(500).json({error : e})
   }
}

const deleteStudent = (req,res)=>{

    try {
        schemaController().deleteOne({_id: req.headers.id}).then(result=>{

            if(result.deletedCount>0){
                res.status(200).json({message:'Deleted'});
            }else {
                res.status(500).json({message:'Try Again!'});
            }
        }).catch(error=>{
            res.status(500).json({error: error});
        })
    }catch (e) {
        res.status(500).json({error: e});

    }
}

const updateStudent = (req,res)=> {
    console.log(req.body.id);
    schemaController().updateOne({ _id:req.body.id},{$set:{
            StudentName:req.body.studentName,
            SubMaths :req.body.subMaths,
            SubSinhala:req.body.subSinhala,
            SubEnglish:req.body.subEnglish,
            SubHealth:req.body.subHealth,
            SubScience:req.body.subScience,
            SubBuddhism:req.body.subBuddhism,
            SubCitizen:req.body.subCitizen,
            SubGeography:req.body.subGeography,
            SubIt:req.body.subIt,
            SubPTS:req.body.subPTS,
            SubHistory:req.body.subHistory,
            SubTamil:req.body.subTamil,
            SubAesrhetics:req.body.subAesrhetics,
            Total : req.body.totals,
            Other : []
    }}).then(result=>{

        if(result.nModified>0){
            res.status(200).json({message:'Updateded'});
        }else {
            res.status(500).json({message:'Try Again!'});
        }
});
}
module.exports = {
    saveStudent,getMarks,deleteStudent,updateStudent

}

