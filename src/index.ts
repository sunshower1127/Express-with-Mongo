import express from "express";
import path from "path";

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("home", { message: "This is Home of Yelp Camp" });
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
