const express = require("express");
const app = express();
const path = require("path");
const MemberData = require("./memberdata");


app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname , "views"));
app.use(express.static(path.join(__dirname , "/public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const port = 3000;
app.listen(port , ()=>{
    console.log("the app is started ");
})
app.get("/" , (req , res)=>{
      res.render("index.ejs" , {MemberData});
})



// app.post("/auth/register" , (req , res)=>{
//       let {name , email , password , contact , role} = req.body; 
//       console.log(req.body);
//       res.redirect("/");
// })