//Name: Mishaal Ghumman 
//Student ID: 100831093 
//Date: November 5th, 2024 

import express from "express";
import {homeController} from "../controllers/homeController,js";
const routes = express.Router();    

routes.get("/", homeController)

export default routes