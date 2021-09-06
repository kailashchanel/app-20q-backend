const express = require("express");
const router = express.Router();

const usersStore = require("../store/users");
const auth = require("../middleware/auth");

router.get("/", auth, (req, res) => {
  const userId = parseInt(req.user.userId);
  const user = usersStore.getUserById(userId);
  if (!user) return res.status(404).send();

  res.send([
    {
      id: user.id,
      name: user.name,
      email: user.email,
      socials: {
        snap: user.socials.snap,
        insta: user.socials.insta,
      },
    },
  ]);
});

module.exports = router;
