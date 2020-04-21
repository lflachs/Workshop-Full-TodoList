const express = require("express");
const mongoose = require("mongoose");
const app = express();
const todoRoutes = require("./routes/todo.routes");
// Connection for Mongoose
const connect = () => {
  return mongoose.connect("mongodb://localhost:27017/todoWorkshop", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

connect();

app.use(express.json());

app.use("/todo", todoRoutes);

app.listen(5000, () => {
  console.log("app is running on 5000");
});
