const express = require("express");

const interests = require("./routes/interests");
const survey = require("./routes/survey");
const compare = require("./routes/compare");
const user = require("./routes/user");

const auth = require("./routes/auth");
const config = require("config");
const app = express();

app.use(express.json());

app.use("/api/auth", auth);
app.use("/api/user", user);
app.use("/api/interests", interests);
app.use("/api/survey", survey);
app.use("/api/compare", compare);

const port = process.env.PORT || config.get("port");
app.listen(port, function () {
  console.log(`Server started on port ${port}...`);
});
