// 시드 생성: docker compose --profile seed up

const mongoose = require("mongoose");
const cities = require("./cities");
const { places, descriptors } = require("./seedHelpers");
const Campground = require("../models/campground");

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost:27017/yelp-camp";

mongoose.connect(mongoUrl);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", async () => {
  console.log("Database connected");

  await seedDB();

  mongoose.connection.close();
  console.log("Database closed");
});

const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
  console.log("111");
  await Campground.deleteMany({});
  for (let i = 0; i < 50; ++i) {
    const random1000 = Math.floor(Math.random() * 1000);
    const price = Math.floor(Math.random() * 30) + 10;
    const camp = new Campground({
      location: `${cities[random1000].city}, ${cities[random1000].state}`,
      title: `${sample(descriptors)} ${sample(places)}`,
      image:
        "https://plus.unsplash.com/premium_photo-1734545294150-3d6c417c5cfb?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "description",
      price,
    });
    await camp.save();
  }
};
