const express = require("express");
const cors = require("cors");

const body_parser = require("body-parser")

const mongoose = require("mongoose");
const {register, login} = require("./src/controllers/auth.controller")



const product_controller = require("./src/controllers/product.Controller")


const connect = require("./src/config/db")
const app = express();

app.use(body_parser.json())



app.post("/register",register);

app.post("/login",login);



app.use("/admin", product_controller)



let  port = process.env.PORT || 5000;
app.use(cors())



app.listen(port,async ()=>{

    connect()

    console.log(`application is listening on port ${port}`)
   
});