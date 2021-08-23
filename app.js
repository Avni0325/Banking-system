//jshint esversion: 6
const express=require('express');
const ejs=require('ejs');
const bodyParser=require('body-parser');

const app=express();
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine','ejs');
app.use(express.static("public"));

var posts=[];

app.get("/",function(req,res){
  res.render("home",{
    bankName: "Bank For All"
  })
})

app.get("/form",function(req,res){
  res.render("form",{bankName: "Bank For All"});
});

app.get("/record",function(req,res){
  res.render("record",{
    bankName: "Bank For All",
    posts: posts
  });
});

app.post("/form",function(req,res){
  let post={
    from: req.body.idfrom,
    amount: req.body.rupees,
    to: req.body.idto
  }
  posts.push(post);
  res.redirect("/record");
});

app.listen(3000,function(){
  console.log("Server is running at port 3000...");
});
