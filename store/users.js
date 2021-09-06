const users = [
  {
    id: 1,
    name: "Hello Judges",
    email: "judge@domain.com",
    password: "OHSHackathon2021",
    socials: {
      snap: "judge_snap",
      insta: "judges",
    },
  },
  {
    id: 2,
    name: "John Adams",
    email: "john@domain.com",
    password: "12345",
    socials: {
      snap: "john_snap",
      insta: "john",
    },
  },
  {
    id: 3,
    name: "Claire Davidson",
    email: "claire@domain.com",
    password: "12345",
    socials: {
      snap: "claire_snap",
      insta: "claire",
    },
  },
  {
    id: 4,
    name: "Felicity Welch",
    email: "welch@domain.com",
    password: "12345",
    socials: {
      snap: "felicity_snap",
      insta: "felicity",
    },
  },
  {
    id: 5,
    name: "Ava Pullman",
    email: "ava@domain.com",
    password: "12345",
    socials: {
      snap: "ava_snap",
      insta: "ava",
    },
  },
  {
    id: 6,
    name: "Thomas Bower",
    email: "bower@domain.com",
    password: "12345",
    socials: {
      snap: "thomas_snap",
      insta: "thomas",
    },
  },
  {
    id: 7,
    name: "Mary Mills",
    email: "mary@domain.com",
    password: "12345",
    socials: {
      snap: "mary_snap",
      insta: "mary",
    },
  },
  {
    id: 8,
    name: "Laurenz Ellen",
    email: "ellen@domain.com",
    password: "12345",
    socials: {
      snap: "laurenz_snap",
      insta: "laurenz",
    },
  },
  {
    id: 9,
    name: "Averi Hunt",
    email: "averi@domain.com",
    password: "12345",
    socials: {
      snap: "averi_snap",
      insta: "averi",
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
