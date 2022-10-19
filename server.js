const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const app = require('./index');

const DB = process.env.DATABASE;
mongoose
  //
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('DB Connection successful'));

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

const port = 3000;
app.listen(port, () => {
  console.log('App running on port' + port);
});
