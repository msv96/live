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

// app.get("/", (req, res) => {
// 	res.send(data);
// });

// app.get("/users/:id", (req, res) =>{
//     const id = req.params.id;
// });

app.post("/signin", (req, res) => {
	if (data.length === 0) {
		res.json({
			msg: "First create a user",
			code: false,
		});
	} else {
		let idx = data.filter((e) => e.mail === req.body.mail);
		if (idx.length === 0) {
			res.json({
				msg: "Username / Password is wrong",
				code: false,
			});
		} else {
			if (idx[0].pwd === req.body.pwd) {
				res.json({
					user: idx[0],
					msg: "Successfully logged in",
					code: true,
				});
			} else {
				res.json({
					msg: "Username / Password is wrong",
					code: false,
				});
			}
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
		data.push(req.body);
		res.json({
			msg: "User created successfully",
			code: true,
		});
	}
});

app.put("/forgot", (req, res) => {
	if (data.length === 0) {
		res.json({
			msg: "First create a user",
			code: false,
		});
	} else {
		let i = data.findIndex((e) => e.mail === req.body.mail);
		if (i < 0) {
			res.json({
				msg: "Username / Password is wrong",
				code: false,
			});
		} else {
			if (data[i].pwd = req.body.pwd) {
				res.json({
					msg: "Password changed succesfully",
					code: true,
				});
			} else {
				res.json({
					msg: "Username / Password is wrong",
					code: false,
				});
			}
		}
	}
});

// app.get("/logout", (req, res) => {
// 	res.json({
// 		msg: "Logged out successfully",
// 	});
// });

app.listen(3500, () => {
	console.log("The Server is listening in port : 3500");
});
