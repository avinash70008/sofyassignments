const mongoose = require("mongoose");

const bcrypt= require("bcryptjs");

const auth_schema = new mongoose.Schema({

    user_name:{type:String,required:true },

    phone:{type:Number, required:true},
    
   email:{type:String, required:true},

   password:{type:String, required:true},

   role: {type:String,  required:true}
},{
    versionKey:false,
    timestamps:true,
});


auth_schema.pre("save", function(next){
    if(!this.isModified("password"))return next();


    var hash = bcrypt.hashSync(this.password,8)
    this.password = hash;
    return next();

});

auth_schema.methods.checkPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };

const auth = mongoose.model("auth",auth_schema)
module.exports = auth;