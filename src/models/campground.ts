import { Schema, model } from "mongoose";

const CampgroundSchema = new Schema({
  title: String,
  price: String,
  //   image: String,
  description: String,
  location: String,
});

export const Campground = model("Campground", CampgroundSchema);
