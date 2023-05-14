const mongoose=require("mongoose");
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://localhost:27017/Quora',{
  useNewUrlParser:true,
  useUnifiedTopology: true,
  family:4,
}, (err)=>{
  if(err){
    console.log('connection has ended with error'+ err);
  }else{
    console.log("connection sucessful");
  }
});
module.export=mongoose;
