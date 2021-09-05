const express = require("express");
const app = express();
const cors = require("cors");

app.use(
	cors({
		origin: "*",
	})
);

app.get("/", (req, res) => {
	res.send("Hello. Welcome to the App");
});

app.get("/users", (req, res) => {
	res.json({ message: "All is well" });
});

app.get("/products", (req, res) => {
	res.send("<h1>All products have been sold out</h1>");
});

app.get("/todolist", (req, res) => {
	res.json([
		{ id: 1, message: "Go to Gym", status: false },
		{ id: 2, message: "Have Breakfast", status: false },
		{ id: 3, message: "Go to Office", status: false },
	]);
});

app.listen(3500, () => {
	console.log("The Server is listening in port : 3500");
});
