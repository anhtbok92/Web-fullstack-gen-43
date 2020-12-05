//Imoport

const express=require("express")
const app=express()
const port=8000;

app.use(express.static("css"))
app.use("/css",express.static( __dirname +'/css'))
app.get("",(req,res)=>{
  res.sendFile( __dirname +"/home.html")
})
app.get("/all",(req,res)=>{
  res.sendFile( __dirname +"/index.html")
})

app.get("/header",(req,res)=>{
  res.sendFile(__dirname +"/header.html")
})
app.get("/content",(req,res)=>{
  res.sendFile(__dirname +"/content.html")
})
app.get("/footer",(req,res)=>{
  res.sendFile(__dirname +"/footer.html")
})
app.get("/navigator",(req,res)=>{
  res.sendFile(__dirname +"/navigator.html")
})
app.listen(port)