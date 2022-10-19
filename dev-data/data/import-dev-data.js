const fs = require("fs");
const mongoose = require("mongoose");
const Tour = require("../../models/tourModels");
const dotenv = require("dotenv");

dotenv.config({ path: "../../config.env" });

const DB = process.env.DATABASE;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("DB Connection successful"));

//   const testTour = new Tour({
//     name: "The Park Camper",
//     price: 997,
//   });
//   testTour
//     .save()
//     .then((doc) => {
//       console.log(doc);
//     })
//     .catch((err) => {
//       console.log(err);
//     });

//REad JSON FILE

const tours = JSON.parse(fs.readFileSync("../data/tours-simple.json", "utf-8"));

const importData = async () => {
  try {
    await Tour.create(tours);
    console.log("Data loaded");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

//Delete All Data
const deleteData = async () => {
  try {
    await Tour.deleteMany();
    console.log("Data deleted");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}
console.log(process.argv);

