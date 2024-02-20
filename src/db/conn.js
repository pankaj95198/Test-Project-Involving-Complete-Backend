const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/dynamicweb").then(()=>{
    console.log("connection successsfull....");
}).catch((e) =>{
    console.log(e);
});