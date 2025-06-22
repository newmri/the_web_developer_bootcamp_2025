// 초기화: docker compose run --rm seed node seeds/index.js

const mongoose = require("mongoose");
const Campground = require("../models/campground");
const Review = require("../models/review");
const User = require("../models/user");

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost:27017/yelp-camp";

mongoose.connect(mongoUrl);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", async () => {
  console.log("Database connected");

  try {
    await clearDB();
  } catch (err) {
    console.error("clearDB Failed", err);
  } finally {
    await mongoose.connection.close();
    console.log("Database closed");
  }
});

const clearDB = async () => {
  await Campground.deleteMany({});
  await Review.deleteMany({});
  await User.deleteMany({});
};
