const express=require("express")
const app=express();
const path=require("path");
const hbs=require("hbs")

const stataicPath=path.join(__dirname,"../public")
app.use(express.static(stataicPath))

const templatePath=path.join(__dirname,"../templates/views")
app.set("view engine","hbs")
app.set("views",templatePath)

const partialPath=path.join(__dirname,"../templates/partials")
hbs.registerPartials(partialPath)

app.get("/",(req,res)=>{
    res.render("home")
})

app.get("/Menshop",(req,res)=>{
    res.render("Menshop")
})

app.get("/Womenshop",(req,res)=>{
    res.render("Womenshop")
})

app.get("/Accesoriesshop",(req,res)=>{
    res.render("Accesoriesshop")
})


app.listen(8000,()=>{
    console.log('port connected');
})