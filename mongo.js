const mongoose = require("mongoose");
mongoose
  .connect("mongodb://0.0.0.0:27017/react-login")
  .then(() => {
    console.log("Mongodb connected");
  })
  .catch(() => {
    console.log("failed");
  });

const newSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const collection = mongoose.model("collection", newSchema);

module.exports = collection;
