const auth = require("../models/auth.model");

require("dotenv").config();

const jwt = require("jsonwebtoken");

 
const newToken = (auth) => {
 
  return jwt.sign({ auth }, process.env.JWT_SECRET_KEY);
};

const register = async (req, res) => {
  try {
    let auth_data = await auth.find({ email: req.body.email }).lean().exec();
    console.log(auth_data);

    if (auth_data.length !== 0) { 
      return res
        .status(400)
        .send({ message: "account associated with this email already exist" });
    }

    auth_data = await auth.create(req.body);

    const token = newToken(auth_data);

    res.send({ auth_data, token });
  } catch (e) {
    res.status(500).send(e.message);
  }
};

const login = async (req,res) => {
  try {
    const auth_data = await auth
      .findOne({ email: req.body.email })
     

    if (!auth_data) {
      return res
        .status(400)
        .send({ message: "please check your email or password" });
    }

    const match = auth_data.checkPassword(req.body.password);

    if (!match) {

      return res
        .status(400)
        .send({ message: "please check your email or password" });
    }

    const token = newToken(auth_data);

    res.send({auth_data,token});

  } catch (e) {
    res.status(400).send(e.message);
  }
};



module.exports = { register, login };