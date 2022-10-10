const express=require("express");

const app=express();

app.get("/",function(req){
    res.sendFile(__dirname+"/index.html")
})

app.use(express.static("public"))

app.listen(1000,function(){
    console.log("server is running")
})