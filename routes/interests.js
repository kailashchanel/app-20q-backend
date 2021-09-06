const express = require("express");
const router = express.Router();
const Joi = require("joi");

const auth = require("../middleware/auth");
const store = require("../store/preferences");
const interestsMapper = require("../mappers/interests");

router.get("/", auth, (req, res) => {
  const interests = store.getAllPreferences();
  const resources = interests.map(interestsMapper);
  res.send(resources);
});

router.post("/", auth, (req, res) => {
  // Check if user has previous preferences set; remove old data if so
  if (store.getPreferencesByUserId(req.user.userId)) {
    store.removePreferencesByUserId(req.user.userId);
  }
  if (!req.body.preferences) {
    res.status(400).send({ message: "No data provided." });
  } else {
    const preferences = [];
    req.body.preferences.map((preference, i) => {
      preferences.push({
        questionId: preference.questionId,
        value: preference.value.value,
        id: i,
      });
    });
    const entry = {
      userId: req.user.userId,
      interests: preferences,
    };
    store.addPreferences(entry);
    res.status(201).send(entry);
  }
});

module.exports = router;
