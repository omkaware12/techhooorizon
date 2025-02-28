const express = require("express");
const app = express();
const path = require("path");
const MemberData = require("./memberdata");
const InstituteData  = require("./institutedata");
const { v4: uuidv4 } = require('uuid');




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

app.get("/user/institute" , (req , res)=>{
      res.render("institutes.ejs" ,{InstituteData});
})

app.get("/new/institute" , (req , res)=>{
     res.render("form.ejs");
})

app.post("/create" , (req, res)=>{
       let {Image ,Name , Location, students , Accreditation , Vision , Mission , Latitude , Longitude , status} = req.body;
 
     let newobj =  {
        id: uuidv4(),
        image: Image,
        name:Name,
        location: Location,
        students: students,
        accreditation: Accreditation,
        vision: Vision,
        mission: Mission,
        lat: Latitude ,
        lng: Longitude,
        status: status,
        createdAt: Date.now()
    }
     InstituteData.push(newobj);
     console.log(InstituteData);
      res.redirect("/user/institute");
})

app.get("/donate" , (req , res)=>{
       let institutes = InstituteData;
      // console.log(institutes);
      const activeInstitutes = institutes.filter(institute => institute.status === "active");
     //   console.log(activeInstitutes);
    res.render("donate.ejs" , {activeInstitutes})
})

app.get("/donate/:id" , (req , res)=>{
    const { id } = req.params;
    const institute = InstituteData.find(institute => institute.id === id);
    console.log(institute);
   res.render("showinfo.ejs" , {institute});
})


// app.get("/institutes/resource/:id" , (req , res)=>{
//     const { id } = req.params;
//     const institute = InstituteData.find(institute => institute.id === id);
//     res.render("resource.ejs" , {institute});
// })

