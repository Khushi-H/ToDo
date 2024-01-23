const mongoose = require("mongoose");
const mongoURI = "mongodb://127.0.0.1:27017/todolist";
const connectToMongo = async () => {
  try {
    const conn = await mongoose.connect(mongoURI);
    console.log(`connected to mongodb database ${conn.connection.host}`);
  } catch (error) {
    console.log(`error in mongodb ${error}`);
  }
};
module.exports = connectToMongo;
