const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require("./routes"));

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/social_network_api",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// Use this to log mongo queries being executed
mongoose.set("debug", true);

//run connect here and then a .then
//nest the app.listen inside of this
app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
