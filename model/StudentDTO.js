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

    },
    SubGeography: {
        type: Number,

    },
    SubIt: {
        type: Number,

    },
    SubPTS: {
        type: Number,

    },
    SubHistory: {
        type: Number,
        required: true
    },
    SubTamil: {
        type: Number,

    },
    SubAesrhetic: {
        type: Number,

    },
    SubGroup1:{
     type:Number
    },
    SubGroup2:{
        type:Number
    },
    SubGroup3:{
        type:Number
    },
    Total: {
        type: Number,

    },
    other:{
        type:Array
    }
});
const StudentSchemaAL= new mongoose.Schema({
    StudentName: {
        type: String,
        required: true
    },
    SubCom_Maths: {
        type: Number
    },
    SubPhysics: {
        type: Number
    },
    SubChemistry: {
        type: Number
    },
    SubICT: {
        type: Number
    },
    SubBio: {
        type: Number
    },
    SubET: {
        type: Number
    },
    SubSFT: {
        type: Number
    },
    SubAgry: {
        type: Number
    },
    SubBST: {
        type: Number
    },
    SubAccounting: {
        type: Number
    },
    SubBS: {
        type: Number
    },
    SubEconomics: {
        type: Number
    },
    SubSinhala: {
        type: Number
    },
    SubLogic: {
        type: Number
    },
    SubGeography: {
        type: Number
    },
    SubPolitics: {
        type: Number
    },
    SubBC: {
        type: Number
    },
    SubLanguages: {
        type: Number
    },
    SubHistory: {
        type: Number
    },
    SubAesthetic: {
        type: Number
    },
    SubEnglish: {
        type: Number
    },
    SubGIT: {
        type: Number
    },
    SubBusinessStac:{
        type: Number
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
const MarksGrade07Term1=mongoose.model('MarksGrade07Term1', StudentSchema);
const MarksGrade07Term2=mongoose.model('MarksGrade07Term2', StudentSchema);
const MarksGrade07Term3=mongoose.model('MarksGrade07Term3', StudentSchema);
const MarksGrade08Term1=mongoose.model('MarksGrade08Term1', StudentSchema);
const MarksGrade08Term2=mongoose.model('MarksGrade08Term2', StudentSchema);
const MarksGrade08Term3=mongoose.model('MarksGrade08Term3', StudentSchema);
const MarksGrade09Term1=mongoose.model('MarksGrade09Term1', StudentSchema);
const MarksGrade09Term2=mongoose.model('MarksGrade09Term2', StudentSchema);
const MarksGrade09Term3=mongoose.model('MarksGrade09Term3', StudentSchema);
const MarksGrade10Term1=mongoose.model('MarksGrade10Term1', StudentSchema);
const MarksGrade10Term2=mongoose.model('MarksGrade10Term2', StudentSchema);
const MarksGrade10Term3=mongoose.model('MarksGrade10Term3', StudentSchema);
const MarksGrade11Term1=mongoose.model('MarksGrade11Term1', StudentSchema);
const MarksGrade11Term2=mongoose.model('MarksGrade11Term2', StudentSchema);
const MarksGrade11Term3=mongoose.model('MarksGrade11Term3', StudentSchema);
const MarksGrade12ArtTerm1=mongoose.model('MarksGrade12ArtTerm1', StudentSchemaAL);
const MarksGrade12ArtTerm2=mongoose.model('MarksGrade12ArtTerm2', StudentSchemaAL);
const MarksGrade12ArtTerm3=mongoose.model('MarksGrade12ArtTerm3', StudentSchemaAL);
const MarksGrade12ComTerm1=mongoose.model('MarksGrade12ComTerm1', StudentSchemaAL);
const MarksGrade12ComTerm2=mongoose.model('MarksGrade12ComTerm2', StudentSchemaAL);
const MarksGrade12ComTerm3=mongoose.model('MarksGrade12ComTerm3', StudentSchemaAL);
const MarksGrade12TecTerm1=mongoose.model('MarksGrade12TecTerm1', StudentSchemaAL);
const MarksGrade12TecTerm2=mongoose.model('MarksGrade12TecTerm2', StudentSchemaAL);
const MarksGrade12TecTerm3=mongoose.model('MarksGrade12TecTerm3', StudentSchemaAL);
const MarksGrade12MathsTerm1=mongoose.model('MarksGrade12MathsTerm1', StudentSchemaAL);
const MarksGrade12MathsTerm2=mongoose.model('MarksGrade12MathsTerm2', StudentSchemaAL);
const MarksGrade12MathsTerm3=mongoose.model('MarksGrade12MathsTerm3', StudentSchemaAL);
const MarksGrade12BioTerm1=mongoose.model('MarksGrade12BioTerm1', StudentSchemaAL);
const MarksGrade12BioTerm2=mongoose.model('MarksGrade12BioTerm2', StudentSchemaAL);
const MarksGrade12BioTerm3=mongoose.model('MarksGrade12BioTerm3', StudentSchemaAL);
const MarksGrade13ArtTerm1=mongoose.model('MarksGrade13ArtTerm1', StudentSchemaAL);
const MarksGrade13ArtTerm2=mongoose.model('MarksGrade13ArtTerm2', StudentSchemaAL);
const MarksGrade13ArtTerm3=mongoose.model('MarksGrade13ArtTerm3', StudentSchemaAL);
const MarksGrade13ComTerm1=mongoose.model('MarksGrade13ComTerm1', StudentSchemaAL);
const MarksGrade13ComTerm2=mongoose.model('MarksGrade13ComTerm2', StudentSchemaAL);
const MarksGrade13ComTerm3=mongoose.model('MarksGrade13ComTerm3', StudentSchemaAL);
const MarksGrade13TecTerm1=mongoose.model('MarksGrade13TecTerm1', StudentSchemaAL);
const MarksGrade13TecTerm2=mongoose.model('MarksGrade13TecTerm2', StudentSchemaAL);
const MarksGrade13TecTerm3=mongoose.model('MarksGrade13TecTerm3', StudentSchemaAL);
const MarksGrade13MathsTerm1=mongoose.model('MarksGrade13MathsTerm1', StudentSchemaAL);
const MarksGrade13MathsTerm2=mongoose.model('MarksGrade13MathsTerm2', StudentSchemaAL);
const MarksGrade13MathsTerm3=mongoose.model('MarksGrade13MathsTerm3', StudentSchemaAL);
const MarksGrade13BioTerm1=mongoose.model('MarksGrade13BioTerm1', StudentSchemaAL);
const MarksGrade13BioTerm2=mongoose.model('MarksGrade13BioTerm2', StudentSchemaAL);
const MarksGrade13BioTerm3=mongoose.model('MarksGrade13BioTerm3', StudentSchemaAL);


module.exports ={
    MarksGrade06Term1,MarksGrade06Term2,MarksGrade06Term3,None,MarksGrade07Term1,MarksGrade07Term2,MarksGrade07Term3,MarksGrade08Term1,MarksGrade08Term2,MarksGrade08Term3,MarksGrade09Term1,MarksGrade09Term2,MarksGrade09Term3,MarksGrade10Term1,MarksGrade10Term2,MarksGrade10Term3,
    MarksGrade11Term1,MarksGrade11Term2,MarksGrade11Term3,MarksGrade12ArtTerm1,MarksGrade12ArtTerm2,MarksGrade12ArtTerm3,
    MarksGrade12BioTerm1,MarksGrade12BioTerm2,MarksGrade12BioTerm3,MarksGrade12ComTerm1,MarksGrade12ComTerm2,MarksGrade12ComTerm3,
    MarksGrade12MathsTerm1,MarksGrade12MathsTerm2,MarksGrade12MathsTerm3,MarksGrade12TecTerm1,MarksGrade12TecTerm2,MarksGrade12TecTerm3,
    MarksGrade13ArtTerm1,MarksGrade13ArtTerm2,MarksGrade13ArtTerm3,
    MarksGrade13BioTerm1,MarksGrade13BioTerm2,MarksGrade13BioTerm3,MarksGrade13ComTerm1,MarksGrade13ComTerm2,MarksGrade13ComTerm3,
    MarksGrade13MathsTerm1,MarksGrade13MathsTerm2,MarksGrade13MathsTerm3,MarksGrade13TecTerm1,MarksGrade13TecTerm2,MarksGrade13TecTerm3
}




