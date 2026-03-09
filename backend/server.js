import express from "express";
const app = express();

import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Product from "./models/product.model.js";
dotenv.config();

app.use(express.json());

app.get("/api/products", async (req, res) => {
	try {
		const products = await Product.find({});
		res.status(200).json({ success: true, data: products });
	} catch (error) {
		console.log("error in fectching products:", error.message);
		res
			.status(500)
			.json({ success: false, message: "Please provide all fields" });
	}
});

app.post("/api/products", async (req, res) => {
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

app.delete("/api/products/:id", async (req, res) => {
	const { id } = req.params;
	try {
		await Product.findByIdAndDelete(id);
		res.status(200).json({ success: true, message: "Product deleted" });
	} catch (error) {
		console.log("Error in deleting product:", error.message);
		res.status(404).json({ success: false, message: "product not found" });
	}
});

app.listen(5000, () => {
	connectDB();
	console.log("server started at http://localhost:5000");
});
//J1qOrqqSGsDtgG1a
//v9RFpQlBoD4mwf0j;
