
// !requires! >>>>>>>
const express             = require("express"),
	app                   = express(),
	bodyParser            = require("body-parser"),
	port                  = 4040,
	mongoose              = require('mongoose'),
	passport              = require("passport"),
	flash                 = require("connect-flash"),
	LocalStrategy         = require("passport-local"),
	passportLocalMongoose = require("passport-local-mongoose"),
	session               = require("express-session"),
	mainRouter            = require("./routes/main"),
	methodOverride        = require("method-override");

// <<<<<<<< !requires!

mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb://localhost:27017/bangee_data', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to DB!'))
.catch(error => console.log(error.message));
app.use(session({
	secret: "!!?!!?!!?!!?>>>>??!??!??!??!",
	resave: false,
	saveUninitialized: false
}));
app.use(flash())
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({extended: true}));
// passport.use(new LocalStrategy(User.authenticate()))
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use((req, res, next) => {
	res.locals.currentUser = req.user;
	res.locals.success = req.flash("success");
	res.locals.error = req.flash("error");
	next();
});

app.use(mainRouter);

app.listen(port, () => console.log("server is running on port 4040"));