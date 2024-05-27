const mongoose = require("mongoose");

const mongoURI = "mongodb://localhost:27017/?directConnection=true";
const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI,
    console.log("connected to mongodb successfully"));
  } catch (error) {
    console.log("trouble connecting to db ", error);
  }
};

module.exports = connectToMongo;
