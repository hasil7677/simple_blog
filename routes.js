const express=require('express');
const router=express.Router();

const mongoType =require('mongoose').Types;

const Post=require('../QuoraBackend/Models/Post.js');


//routes define here
//get all data from the api
router.get('/',(req,res)=>{
  Post.find((err,doc)=>{
    if(err){
      console.log('Error occured while fetching data'+ err);
      res.status(400).send('Internal Error',err);
    }else{
      res.send(doc);
    }
  })
})

router.get('/:bookmarks',(req,res)=>{
  Post.find((err,doc)=>{
    if(err){
      console.log('Error occured while fetching data'+ err);
      res.status(400).send('Internal Error',err);
    }else{
      res.send(doc);
    }
  })
})
//create new post
router.post('/',(req,res)=>{
  let post=new Post({
    title:req.body.title,
    content:req.body.content,
    username:req.body.username,
    bookmarks:req.body.bookmarks
  })
  post.save((err,doc)=>{
    if(err){
      console.log('Internal Error'+err);
      res.status(400).send('Internal Error'+err);
    }else{
      res.send(doc)
    }
  })
})
//get data by ID
router.get('/:id',(req,res)=>{
  if(mongoType.ObjectId.isValid(req.params.id)){
    Post.findById(req.params.id, (err,doc)=>{
      if(err){
        console.log('Internal Error'+err);
        res.status(400).send('Internal Error'+err);
      }else{
        res.send(doc);
      }
    })
  }else{
    res.status(400).send('No record found by this id: ',id);
  }
})

//delete data by ID
router.delete('/:id',(req,res)=>{
  if(mongoType.ObjectId.isValid(req.params.id)){
    Post.findByIdAndRemove(req.params.id, (err,doc)=>{
      if(err){
        console.log('Internal Error'+err);
        res.status(400).send('Internal Error'+err);
      }else{
        res.send(doc);
      }
    })
  }else{
    res.status(400).send('No record found by this id: ',id);
  }
})
 //update by id
 router.put('/:id',(req,res)=>{
   let post={
     title:req.body.title,
     content:req.body.content,
     username:req.body.username,
     bookmarks:req.body.bookmarks
   }

   if(mongoType.ObjectId.isValid(req.params.id)){
     Post.findByIdAndUpdate(req.params.id,{$set:post},{new:true}, (err,doc)=>{
       if(err){
         console.log('Internal Error:'+err);
         res.status(400).send('Internal Error:'+err);
       }else{
         res.send(doc);
       }
     })
   }else{
     res.status(400).send('No record found by this id: ',id);
   }
 })

 module.exports=router;
