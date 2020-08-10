const express=require('express');
const app=express();
var port=process.env.port||3000;

app.get('/',(req,res)=>res.send("Hello World"));
app.get('/bhashitha',(req,res)=>res.send("Hello Bhashitha"));


app.listen(port,()=>console.log("server is running on "+port))