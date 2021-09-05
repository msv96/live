import express from "express";
import cors from "cors";
const app = express();
const data = [];

app.use(
	cors({
		origin: "*",
	})
);

app.use(express.json());

app.get("/", (req, res) => {
	res.send(data);
});

app.post("/signin", (req, res) => {
	if (data == []) {
		res.json({
			msg: "First create a user",
			code: false,
		});
	} else {
		let idx = data.filter((e) => e.mail == req.body.mail);
		if (idx) {
			if (idx[0].pwd === req.body.pwd) {
				res.json({
					id: idx[0].id,
					name: idx[0].name,
					mail: idx[0].mail,
					msg: "Log in success",
					code: true,
				});
			}
		} else {
			res.json({
				msg: "Username / Password is wrong",
				code: false,
			});
		}
	}
});

app.post("/register", (req, res) => {
	if (data.find((e) => e.mail === req.body.mail)) {
		res.json({
			msg: "User already exist",
			code: false,
		});
	} else {
		req.body.id = data.length + 1;
		data.push(req.body);
		res.json({
			id: req.body.id,
			msg: "User created successfully",
			code: true,
		});
	}
});

app.get("/logout", (req, res) => {
	res.json({
		msg: "Logged out successfully",
	});
});

app.listen(3500, () => {
	console.log("The Server is listening in port : 3500");
});
