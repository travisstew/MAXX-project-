const express = require('express');
const app = express();
const cors = require('cors');
const mongoose  = require('mongoose');
require('dotenv').config();


//static files 
app.use(express.static('public'));

//body parser - a npm libary used to process data sent through an http request body, it processes incoming requests.
//allows express to read the body and then parse it into a json object 
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());

//connect server with database mgdb on their cloud atlas verison
//Url for connecting to mdb cluster database
const CONNECT_MDB = 'mongodb+srv://travisstew:Tsdraw13@cluster0.u4u5d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 4000;
//mongoose to connect to our databse 
mongoose.connect(CONNECT_MDB, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => app.listen(PORT, ()=> console.log(`server running on port${PORT} `)))
.catch((error)=> console.log(error.message));

// mongoose.set('useFindAndModify', false);

//express middleware to connect to router
app.use('/', require('./routes/index'));

// app.listen(PORT,function () { 
  
//   console.log('listening on port ' + PORT);

// });


