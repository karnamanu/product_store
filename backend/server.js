import express from "express";
const app = express();

import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
dotenv.config();

app.get("/", async (req, res) => {
	const product = req.body;
	if (!product.name || !product.price || !product.image) {
		return res
			.status(400)
			.json({ success: false, message: "Please provide all fields" });
	}
	const newProduct = new Product(product);

	try {
		await newProduct.save();
		res.status(201).json({ success: true, data: newProduct });
	} catch (error) {
		console.error("Error in Create Product:", error.message);
		res.status(500).json({ success: false, message: "Server Error" });
	}
});

app.listen(5000, () => {
	connectDB();
	console.log("server started at http://localhost:5000");
});
//J1qOrqqSGsDtgG1a
//v9RFpQlBoD4mwf0j;
