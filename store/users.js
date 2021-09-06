const users = [
  {
    id: 1,
    name: "Judge 1",
    email: "judge1@domain.com",
    password: "OHSHackathon2021",
    socials: {
      snap: "judge1_snap",
      insta: "judge1",
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
  {
    id: 10,
    name: "Adrian Salgado",
    email: "adrian@domain.com",
    password: "123456",
    socials: {
      snap: "adrian_snap",
      insta: "adrian",
    },
  },
  {
    id: 11,
    name: "Kailash Elumalai",
    email: "kailash@domain.com",
    password: "123456",
    socials: {
      snap: "kailash_snap",
      insta: "kailash",
    },
  },
  {
    id: 12,
    name: "Esther Enlow",
    email: "esther@domain.com",
    password: "12345",
    socials: {
      snap: "esther_snap",
      insta: "esther",
    },
  },
  {
    id: 13,
    name: "Sample Teacher",
    email: "teacher@domain.com",
    password: "12345",
    socials: {
      snap: "teacher_snap",
      insta: "teacher",
    },
  },
  {
    id: 14,
    name: "Judge 2",
    email: "judge2@domain.com",
    password: "OHSHackathon2021",
    socials: {
      snap: "judge2_snap",
      insta: "judge2",
    },
  },
  {
    id: 15,
    name: "Judge 3",
    email: "judge3@domain.com",
    password: "OHSHackathon2021",
    socials: {
      snap: "judge3_snap",
      insta: "judge3",
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
