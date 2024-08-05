const express = require("express");
let app = express();

let port = 8080;

const path = require("path");
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.use(express.static(path.join(__dirname,"public")));

app.listen(port,()=>{
    console.log("sussefully port listen");
});

app.get("/ig/:username",(req,res)=>{
    let {username} = req.params;
    const instaData = require("./data.json");
    let data = instaData[username];
    console.log(data);
    
    res.render("instagram.ejs",{data});
});