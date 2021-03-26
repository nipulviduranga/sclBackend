var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyparser=require('body-parser');
const cors=require('cors');
const mongoose=require('mongoose');
require('dotenv').config();

const StudentRoute=require('./routes/StudentRoute');

var app = express();

// view engine setup

/*app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'https://nipulviduranga.github.io');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});*/
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

const port = process.env.PORT || 3001;

const uri="mongodb://127.0.0.1:27017/SclDatabase";
/*const MONGODB_URI = 'mongodb+srv://admin:12345@scldatabase.usihe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const uri=process.env.MONGODB_URI*/

mongoose.connect(uri, {
  useNewUrlParser:true,
  useUnifiedTopology:true,
  useFindAndModify:false,
  useCreateIndex:true
}).then(result=>{
  console.log('Database Connected!');
}).catch(err=>{
  console.log('Database connecting Fail!');
  console.log(err);
});

app.listen(port,()=>{
    console.log('Running Student Server',"port:",port)
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
