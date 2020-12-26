const express    = require("express"),
      router     = express.Router();

router.get("/play", (req, res) => res.render("playpages/play"));

router.get("/play/online", (req, res) => res.render("playpages/online"));

router.get("/play/computer", (req, res) => res.render("playpages/computer"));

module.exports = router;