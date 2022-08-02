
const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name : {type : String , required : true },
    brand : {type : String , required : true },
    imgUrl : {type : String , required : true },
    price : {type : Number , required : true },
    size : {type : String , required : true },
    colour : {type : String , required : true },
    qty: {type:Number , required: false, default:1},
    type: {type:String, required:true}
   
})

module.exports = mongoose.model("product", ProductSchema)