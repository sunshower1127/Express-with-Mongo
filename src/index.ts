import { Campground } from "@src/models/campground";
import express from "express";
import mongoose from "mongoose";
import path from "path";

mongoose.connect("mongodb://localhost:27017/yelp-camp");
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("home", { message: "This is Home of Yelp Camp" });
});

app.get("/makecampground", async (req, res) => {
  const camp = new Campground({ name: "My Backyard" });
  await camp.save();
  res.send(camp);
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
