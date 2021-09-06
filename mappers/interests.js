const userStore = require("../store/users");

const mapper = (interest) => {
  const { name } = userStore.getUserById(interest.userId);

  return {
    ...interest,
    name: name,
  };
};

module.exports = mapper;
