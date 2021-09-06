const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const store = require("../store/survey");

router.get("/", auth, (req, res) => {
  res.send(store.getSurvey());
});

module.exports = router;
