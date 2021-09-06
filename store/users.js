const users = [
  {
    id: 1,
    name: "Hello Judges",
    email: "judge@domain.com",
    password: "OHSHackathon2021",
    socials: {
      snap: "hi234",
      insta: "34r3f",
    },
  },
  {
    id: 2,
    name: "John Adams",
    email: "john@domain.com",
    password: "12345",
    socials: {
      snap: "hi234",
      insta: "34r3f",
    },
  },
  {
    id: 3,
    name: "Claire Davidson",
    email: "claire@domain.com",
    password: "12345",
    socials: {
      snap: "hi234",
      insta: "34r3f",
    },
  },
  {
    id: 4,
    name: "Felicity Welch",
    email: "welch@domain.com",
    password: "12345",
    socials: {
      snap: "hi234",
      insta: "34r3f",
    },
  },
  {
    id: 5,
    name: "Ava Pullman",
    email: "ava@domain.com",
    password: "12345",
    socials: {
      snap: "hi234",
      insta: "34r3f",
    },
  },
  {
    id: 6,
    name: "Thomas Bower",
    email: "bower@domain.com",
    password: "12345",
    socials: {
      snap: "hi234",
      insta: "34r3f",
    },
  },
];

const getUsers = () => users;

const getUserById = (id) => users.find((user) => user.id === id);

const getUserByEmail = (email) => users.find((user) => user.email === email);

const addUser = (user) => {
  user.id = users.length + 1;
  users.push(user);
};

module.exports = {
  getUsers,
  getUserByEmail,
  getUserById,
  addUser,
};
