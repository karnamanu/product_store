import express from "express";
const app = express();

import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
dotenv.config();

app.get("/", (req, res) => {
	res.send("server is ready");
});

app.listen(5000, () => {
	connectDB();
	console.log("server started at http://localhost:5000");
});
//J1qOrqqSGsDtgG1a
//v9RFpQlBoD4mwf0j;
