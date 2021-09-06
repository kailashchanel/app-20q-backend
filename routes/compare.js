const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const usersStore = require("../store/users");
const store = require("../store/preferences");

const compareInterests = (userInterests, otherInterests) => {
  let count = 0;
  otherInterests.map((int, i) => {
    if (int.value === userInterests[i].value) {
      count += 1;
    }
  });
  return count * 5;
};

router.get("/", auth, (req, res) => {
  const userPrefs = store.getPreferencesByUserId(req.user.userId);
  const allPrefs = store.getPreferencesButSelf(req.user.userId);
  if (!userPrefs || !allPrefs) res.status(204).send();
  else {
    const comparison = [];
    allPrefs.map((pref) => {
      const user = usersStore.getUserById(pref.userId);
      comparison.push({
        name: user.name,
        email: user.email,
        socials: user.socials,
        userId: user.id,
        percent: compareInterests(userPrefs.interests, pref.interests),
      });
    });
    res.status(200).send(comparison);
  }
});

module.exports = router;
