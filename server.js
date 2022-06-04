const express = require("express");
const db = require("./config/connection");
const routes = require("./routes");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/social_network",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

// Use this to log mongo queries being executed
mongoose.set("debug", true);

// Use this to log mongo queries being executed!
mongoose.set("debug", true);

app.use(require("./routes"));

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
