const express    = require("express"),
      router     = express.Router();

router.get("/", (req, res) => res.redirect("/home"));

router.get("/home", (req, res) => res.render("home"));

router.get("/play", (req, res) => res.render("play"));

module.exports = router;