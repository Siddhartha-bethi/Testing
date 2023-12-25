const express = require("express"); //using express js framework
const app= express(); //app contains all the contents of express
var path = require("path");
const jsdom = require("jsdom");
app.use(express.json())
const cors = require('cors');
const corsOptions ={
    origin:'*', 
    credentials:true,            
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use(express.urlencoded({extended:true}));

app.get("/*", async (req, res) => {
    res.sendFile(path.join(__dirname, "/frontend/build/index.html"));
   });

app.listen("2000",()=>{
    console.log("port is listing to 2000");
})