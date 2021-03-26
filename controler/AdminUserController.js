const AdminUserSchema= require('../model/AdminUserDTO');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const registerUser = (req,res)=>{
    AdminUserSchema.findOne({email:req.body.email},(err,result)=>{
    if(err){
        res.status(500).json({message:err});
        console.log(err)
    }else{
        if(result!=null){
            res.status(200).json({message: 'Already Exist'});
            console.log('Already Exist')
        }else {
            bcrypt.genSalt(10,function (err,salt) {
                bcrypt.hash(req.body.password,salt,(err,hash)=>{
                    const admin = new AdminUserSchema({
                        email:req.body.email,
                        password:hash
                    });
                    admin.save().then(finalresult=>{
                        res.status(200).json({message:'Success'})
                    }).catch(finalerror=>{
                        res.status(500).json({message:finalerror})
                    })
                })
            });
        }}});
}
const loginUser = (req,res)=>{
    const email = req.headers.email;
    const password = req.headers.password;
    if(password!=null){
        const token = jwt.sign(
            {email:email,password:password},
            process.env.JWT_ACCOUNT,{expiresIn: '168h'}
            );
        AdminUserSchema.findOne({email:email},(err,result)=>{
            if(result!=null){
                //user available
                bcrypt.compare(password,result.password,(err, finalresult)=>{
                    if(finalresult){
                        console.log('ok');
                        res.status(200).json({message: 'success', token: token});
                    }else{
                        res.status(200).json({message:'Failed'});

                    }
                })
            }else {
                res.status(200).json({message:'Please Register Your Email, or check your credentials'})
            }

        });
    }else {
        res.status(200).json({message:'Faild!'})
    }
}
const verifyToken = (req,res)=>{
    try{
        const token = req.headers.token ? req.headers.token:'empty';
        if(token==='empty'){
            res.status(401).json({message:'UnAuthorized Request Detected!'});
            return;
        }
        const isValid = new Promise((resolve,reject)=>{
           jwt.verify(token,process.env.JWT_ACCOUNT,(error,decoded)=>{
             if(error){
                 reject(false);
             }
             if(decoded){
                 resolve(true);
             }
           });
        });
        isValid.then(reult=>{
            res.status(200).json({state:true,message:'Success'});
        }).catch(err=>{
            res.status(200).json({state:true,message:'UnAuthorized Request Detected!'});
        });
    }catch (e) {
        res.status(500).json({message:e});
    }

/*const logOut=(req,res)=>{
    new Promise((resolve,reject)=>{
       req.session!.destroy((ree:Error)=>{
           if(err) {
               res.status(500).json({message:'error'});
           }
           res.clearCookie('tokenData')
            resolve()
        })
    });*/
}

module.exports = {registerUser,loginUser,verifyToken};
