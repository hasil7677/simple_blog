const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');

const mongoose=require('./db.js');

const app=express();
const route=require('../QuoraBackend/routes.js');
app.use(bodyParser.json());

app.use(cors({origin: 'http://localhost:4200'}));
app.listen(3000,()=>console.log("server is started on post 3000"));


app.use('/Post',route);
