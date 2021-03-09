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
}else if (reqOfother==='Grade07Term1'){
    return StudentSchema.MarksGrade07Term1;
}else if (reqOfother==='Grade07Term2'){
    return StudentSchema.MarksGrade07Term2;
}else if (reqOfother==='Grade07Term3'){
    return StudentSchema.MarksGrade07Term3;
}else if (reqOfother==='Grade08Term1'){
    return StudentSchema.MarksGrade08Term1;
}else if (reqOfother==='Grade08Term2'){
    return StudentSchema.MarksGrade08Term2;
}else if (reqOfother==='Grade08Term3'){
    return StudentSchema.MarksGrade08Term3;
}else if (reqOfother==='Grade09Term1'){
    return StudentSchema.MarksGrade09Term1;
}else if (reqOfother==='Grade09Term2'){
    return StudentSchema.MarksGrade09Term2;
}else if (reqOfother==='Grade09Term3'){
    return StudentSchema.MarksGrade09Term3;
}else if (reqOfother==='Grade10Term1'){
    return StudentSchema.MarksGrade10Term1;
}else if (reqOfother==='Grade10Term2'){
    return StudentSchema.MarksGrade10Term2;
}else if (reqOfother==='Grade10Term3'){
    return StudentSchema.MarksGrade10Term3;
}else if (reqOfother==='Grade11Term1'){
    return StudentSchema.MarksGrade11Term1;
}else if (reqOfother==='Grade11Term2'){
    return StudentSchema.MarksGrade11Term2;
}else if (reqOfother==='Grade11Term3'){
    return StudentSchema.MarksGrade11Term3;
}else if (reqOfother==='Grade12ArtTerm1'){
    return StudentSchema.MarksGrade12ArtTerm1;
}else if (reqOfother==='Grade12ArtTerm2'){
    return StudentSchema.MarksGrade12ArtTerm2;
}else if (reqOfother==='Grade12ArtTerm3'){
    return StudentSchema.MarksGrade12ArtTerm3;
}else if (reqOfother==='Grade12ComTerm1'){
    return StudentSchema.MarksGrade12ComTerm1;
}else if (reqOfother==='Grade12ComTerm2'){
    return StudentSchema.MarksGrade12ComTerm2;
}else if (reqOfother==='Grade12ComTerm3'){
    return StudentSchema.MarksGrade12ComTerm3;
}else if (reqOfother==='Grade12TecTerm1'){
    return StudentSchema.MarksGrade12TecTerm1;
}else if (reqOfother==='Grade12TecTerm2'){
    return StudentSchema.MarksGrade12TecTerm2;
}else if (reqOfother==='Grade12TecTerm3'){
    return StudentSchema.MarksGrade12TecTerm3;
}else if (reqOfother==='Grade12MathsTerm1'){
    return StudentSchema.MarksGrade12MathsTerm1;
}else if (reqOfother==='Grade12MathsTerm2'){
    return StudentSchema.MarksGrade12MathsTerm2;
}else if (reqOfother==='Grade12MathsTerm3'){
    return StudentSchema.MarksGrade12MathsTerm3;
}else if (reqOfother==='Grade12BioTerm1'){
    return StudentSchema.MarksGrade12BioTerm1;
}else if (reqOfother==='Grade12BioTerm2'){
    return StudentSchema.MarksGrade12BioTerm2;
}else if (reqOfother==='Grade12BioTerm3'){
    return StudentSchema.MarksGrade12BioTerm3;
}else if (reqOfother==='Grade13ArtTerm1'){
    return StudentSchema.MarksGrade13ArtTerm1;
}else if (reqOfother==='Grade13ArtTerm2'){
    return StudentSchema.MarksGrade13ArtTerm2;
}else if (reqOfother==='Grade13ArtTerm3'){
    return StudentSchema.MarksGrade13ArtTerm3;
}else if (reqOfother==='Grade13ComTerm1'){
    return StudentSchema.MarksGrade13ComTerm1;
}else if (reqOfother==='Grade13ComTerm2'){
    return StudentSchema.MarksGrade13ComTerm2;
}else if (reqOfother==='Grade13ComTerm3'){
    return StudentSchema.MarksGrade13ComTerm3;
}else if (reqOfother==='Grade13TecTerm1'){
    return StudentSchema.MarksGrade13TecTerm1;
}else if (reqOfother==='Grade13TecTerm2'){
    return StudentSchema.MarksGrade13TecTerm2;
}else if (reqOfother==='Grade13TecTerm3'){
    return StudentSchema.MarksGrade13TecTerm3;
}else if (reqOfother==='Grade13MathsTerm1'){
    return StudentSchema.MarksGrade13MathsTerm1;
}else if (reqOfother==='Grade13MathsTerm2'){
    return StudentSchema.MarksGrade13MathsTerm2;
}else if (reqOfother==='Grade13MathsTerm3'){
    return StudentSchema.MarksGrade13MathsTerm3;
}else if (reqOfother==='Grade13BioTerm1'){
    return StudentSchema.MarksGrade13BioTerm1;
}else if (reqOfother==='Grade13BioTerm2'){
    return StudentSchema.MarksGrade13BioTerm2;
}else if (reqOfother==='Grade13BioTerm3'){
    return StudentSchema.MarksGrade13BioTerm3;
}
}
const saveStudent = (req,res) =>{


    const MarksOL = new schemaController()(
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
            SubGroup1 : req.body.Group1,
            SubGroup2 : req.body.Group2,
            SubGroup3 : req.body.Group3,

            Total : req.body.totals,

            SubCom_Maths:req.body.subCom_Maths,
            SubPhysics:req.body.subPhysics,
          SubChemistry:req.body.subChemistry,
            SubICT:req.body.subICT,
            SubBio:req.body.subBio,
            SubET:req.body.subET,
            SubSFT:req.body.subSFT,
            SubAgry:req.body.subAgry,
            SubBST:req.body.subBST,
            SubAccounting:req.body.subAccounting,
            SubBS:req.body.subBS,
            SubEconomics:req.body.subEconomics,
            /*SubSinhala:req.body.subSinhala,*/
            SubLogic:req.body.subLogic,
            /*SubGeography :req.body.subGeography,*/
            SubPolitics:req.body.subPolitics,
            SubBC:req.body.subBC,
            SubLanguages:req.body.subLanguages,
            /*SubHistory:req.body.subHistory,*/
            SubAesthetic:req.body.subAesthetic,
            /*SubEnglish:req.body.subEnglish,*/
            SubGIT : req.body.subGIT,
            SubBusinessStac:req.body.subBusinessStac
        }

);
    MarksOL.save().then(result => {
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
            SubGroup1 : req.body.Group1,
            SubGroup2 : req.body.Group2,
            SubGroup3 : req.body.Group3,
            Total : req.body.totals,

            SubCom_Maths:req.body.subCom_Maths,
            SubPhysics:req.body.subPhysics,
            SubChemistry:req.body.subChemistry,
            SubICT:req.body.subICT,
            SubBio:req.body.subBio,
            SubET:req.body.subET,
            SubSFT:req.body.subSFT,
            SubAgry:req.body.subAgry,
            SubBST:req.body.subBST,
            SubAccounting:req.body.subAccounting,
            SubBS:req.body.subBS,
            SubEconomics:req.body.subEconomics,
            /*SubSinhala:req.body.subSinhala,*/
            SubLogic:req.body.subLogic,
            /*SubGeography :req.body.subGeography,*/
            SubPolitics:req.body.subPolitics,
            SubBC:req.body.subBC,
            SubLanguages:req.body.subLanguages,
            /*SubHistory:req.body.subHistory,*/
            SubAesthetic:req.body.subAesthetic,
            /*SubEnglish:req.body.subEnglish,*/
            SubGIT : req.body.subGIT,
            SubBusinessStac:req.body.subBusinessStac,
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

