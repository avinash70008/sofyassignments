
const mongoose = require("mongoose");

const connect = async () => {
  try {
    return await mongoose.connect(
      "mongodb+srv://avinash:avinash123@cluster0.hbh3v.mongodb.net/Validation?retryWrites=true&w=majority"
    );
  } catch (err) {
    console.log("error form connection :", err.message);
  }
};

module.exports = connect;
