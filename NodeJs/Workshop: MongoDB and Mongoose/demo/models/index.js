const mongoose = require("mongoose");

require("./Car");

const connectionString = "mongodb://localhost:27017/carbicle";

async function init() {
  try {
    await mongoose.connect(connectionString);
    console.log("Database connected");

    mongoose.connection.on("error", (err) => {
      console.error("Database error");
      console.log(err);
    });
  } catch (error) {
    console.error("Error connecting to database");
    process.exit(1);
  }
}

module.exports = init;
