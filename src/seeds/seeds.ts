import { Campground } from "@src/models/campground";
import mongoose from "mongoose";
import cities from "./cities";
import { descriptors, places } from "./seedHelpers";

mongoose.connect("mongodb://localhost:27017/yelp-camp");
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
  // mongoose.connection.close();
});

const sample = (array: any[]) =>
  array[Math.floor(Math.random() * array.length)];

export const seedDB = async () => {
  await Campground.deleteMany({});
  for (let i = 0; i < 50; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const camp = new Campground({
      location: `${cities[random1000].city}, ${cities[random1000].state}`,
      title: `${sample(descriptors)} ${sample(places)}`,
    });
    await camp.save();
  }
};
// seedDB().then(() => {
//   mongoose.connection.close();
// });
