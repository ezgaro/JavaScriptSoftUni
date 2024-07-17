const mongoose = require("mongoose");
require('../models/User');

const dbName = "sharedtrip";
const connectionString = `mongodb://localhost:27017/${dbName}`;

module.exports = async (app) => {
  try {
    await mongoose.connect(connectionString);
    console.log("Database Connected");
    mongoose.connection.on("error", (err) => {
      console.error("Database error");
      console.error(err);
    });
  } catch (error) {
    console.error("Error connecting to the database !!!");
    process.exit(1);
  }
};
