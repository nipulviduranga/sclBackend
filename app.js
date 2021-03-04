var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyparser=require('body-parser');
const cors=require('cors');
const mongoose=require('mongoose');


const StudentRoute=require('./routes/StudentRoute');

var app = express();

// view engine setup


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));




mongoose.connect('mongodb://localhost:27017/SclDatabase', {
  useNewUrlParser:true,
  useUnifiedTopology:true,
  useFindAndModify:false,
  useCreateIndex:true


}).then(()=>{
  app.listen(3001,()=>{
    console.log('Running Student Server',"port:",3001)
  })
    });

app.use('/api/v1/studentRoute',StudentRoute);

/*
app.get('/',(req , res)=>{
  res.send(database.users);
})
app.post('/signin',(req,res)=>{
  if(req.body.email===database.users[0].email && req.body.password===database.users[0].password){
    res.json('success');
  }else {
    res.status(400).json('error signin');
  }

})

app.post('/createnew',(req,res)=>{
  let {email,name,password}=req.body;
  database.users.push({
    id:'125',
    name:name,
    email:email,
    password: password,
    entries:0,
    joined: new Date()
  });
  res.json(database.users[database.users.length-1]);

})
app.get('/profile/:id',(req,res)=>{
  const {id}=req.params;
  console.log(String(id));
  let found=false;
  database.users.forEach(user=>{
    if(user.id===id){
      found=true;
      return res.json(user);
    }

  })app.get('/',(req , res)=>{
    res.send(database.users);
  })
  app.post('/signin',(req,res)=>{
    if(req.body.email===database.users[0].email && req.body.password===database.users[0].password){
      res.json('success');
    }else {
      res.status(400).json('error signin');
    }

  })

  app.post('/createnew',(req,res)=>{
    let {email,name,password}=req.body;
    database.users.push({
      id:'125',
      name:name,
      email:email,
      password: password,
      entries:0,
      joined: new Date()
    });
    res.json(database.users[database.users.length-1]);

  })
  app.get('/profile/:id',(req,res)=>{
    const {id}=req.params;
    console.log(String(id));
    let found=false;
    database.users.forEach(user=>{
      if(user.id===id){
        found=true;
        return res.json(user);
      }

    })
  if(!found){
    res.status(400).json('not found')
  }
})

app.post('/img',(req,res)=>{
  const {id}=req.body;
  console.log(String(id));
  let found=false;
  database.users.forEach(user=>{
    if(user.id===id){
      found=true;
      user.entries=user.entries+1;
      return res.json(user.entries);
    }

  })
  if(!found){
    res.status(400).json('not found')
  }
})
*/
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});



// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.render('error');
  res.status(err.status || 500);
});

module.exports = app;
