// const { MongoClient } = require('mongodb');

// const connectionString = 'mongodb://localhost:27017';


// const connection = new MongoClient(connectionString);

// connection.connect((err, result) => {
//   if(err != null) {
//     console.log('Database connection error');
//     process.exit(1);
//   }

//   console.log('Database connected');
//   // connection.close();

// });

const mongoose = require('mongoose');

const uri = "mongodb://localhost:27017/testdb";

async function main() {
  await mongoose.connect(uri);
  console.log("Db connected");
  const carSchema = new mongoose.Schema({
    name: String,
    price: Number,
  });

  const Car = mongoose.model('Car', carSchema);

  const car = new Car({
    name: 'VW Golf 3',
    price: 2500
  });
  await car.save();

  const data = await Car.find({});
  console.log(data);

}

main();
