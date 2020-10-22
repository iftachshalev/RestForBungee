const app = require("express")();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

users = [{name: "Tony", email: "tony30116@gmail.com"}];

app.get("/", (req, res) => res.send('Your Express App'));
app.get("/users", (req, res) => res.json({ok:true, users}));
app.post("/adduser", (req, res) => {
	const {name, email} = req.body;
	if(name && email) {
		users.push({name, email});
		res.json({ok: true, users});
	};
});
app.get("/user/:name", (req, res) => {
	const {name} = req.params;
	const user = users.filter((user) => user.name === name)[0];
	res.json({ok: true, user});
});

app.listen(4040, () => console.log("server is running on port 4040"));