//Name: Mishaal Ghumman 
//Student ID: 100831093 
//Date: November 5th, 2024 
import express from "express";
import routes from "./routes/routes.js";
import path from "path";
const app = express();
const port = process.env.PORT || 8080;
//static files setup
app.use(express.static(path.join(process.cwd(), "public")));
//ejs setup
app.set("view engine", "ejs");
app.set("views", "./views");

//routes 
app.use("/", routes)

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});