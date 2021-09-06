const survey = [
  {
    questionType: "Info",
    questionText:
      "Welcome!\n Please answer the following questions so that we can get to know you better!",
  },
  {
    questionType: "SelectionGroup",
    questionText: "Which color best describes you?",
    questionId: "favoriteColor",
    options: [
      {
        optionText: "Blue",
        value: "Blue",
      },
      {
        optionText: "Pink",
        value: "Pink",
      },
      {
        optionText: "Green",
        value: "Green",
      },
      {
        optionText: "Grey",
        value: "Grey",
      },
    ],
  },
  {
    questionType: "SelectionGroup",
    questionText: "Which season do you relate to the most?",
    questionId: "favoriteSeason",
    options: [
      {
        optionText: "Fall",
        value: "Fall",
      },
      {
        optionText: "Summer",
        value: "Summer",
      },
      {
        optionText: "Winter",
        value: "Winter",
      },
      {
        optionText: "Spring",
        value: "Spring",
      },
    ],
  },
  {
    questionType: "SelectionGroup",
    questionText: "Which animal is the most similar to you?",
    questionId: "favoriteAnimal",
    options: [
      {
        optionText: "Dolphin",
        value: "Dolphin",
      },
      {
        optionText: "Bear",
        value: "Bear",
      },
      {
        optionText: "Butterfly",
        value: "Butterfly",
      },
      {
        optionText: "Dog",
        value: "Dog",
      },
    ],
  },
  {
    questionType: "SelectionGroup",
    questionText: "Which food would you choose?",
    questionId: "favoriteFood",
    options: [
      {
        optionText: "Pizza",
        value: "Pizza",
      },
      {
        optionText: "Salad",
        value: "Salad",
      },
      {
        optionText: "Hamburger",
        value: "Hamburger",
      },
      {
        optionText: "Hot Dog",
        value: "Hot Dog",
      },
    ],
  },
  {
    questionType: "SelectionGroup",
    questionText: "How would you most likely spend your free time?",
    questionId: "favoriteHobby",
    options: [
      {
        optionText: "Drawing",
        value: "Drawing",
      },
      {
        optionText: "YouTube/Netflix",
        value: "YouTube/Netflix",
      },
      {
        optionText: "Exercise",
        value: "Exercise",
      },
      {
        optionText: "Read",
        value: "Read",
      },
    ],
  },
  {
    questionType: "SelectionGroup",
    questionText: "Are you a morning or night person?",
    questionId: "favoriteTimeOfDay",
    options: [
      {
        optionText: "Morning",
        value: "Morning",
      },
      {
        optionText: "Night",
        value: "Night",
      },
    ],
  },
  {
    questionType: "SelectionGroup",
    questionText: "Which Olympic sport would you want to compete in?",
    questionId: "olympicSport",
    options: [
      {
        optionText: "Diving",
        value: "Diving",
      },
      {
        optionText: "Figure Skating",
        value: "Figure Skating",
      },
      {
        optionText: "Hammer Toss",
        value: "Hammer Toss",
      },
      {
        optionText: "Skateboarding",
        value: "Skateboarding",
      },
    ],
  },
  {
    questionType: "SelectionGroup",
    questionText: "If you had to choose, what pet would you have?",
    questionId: "preferredPet",
    options: [
      {
        optionText: "Cat",
        value: "Cat",
      },
      {
        optionText: "Dog",
        value: "Dog",
      },
      {
        optionText: "Fish",
        value: "Fish",
      },
      {
        optionText: "Bird",
        value: "Bird",
      },
    ],
  },
  {
    questionType: "SelectionGroup",
    questionText: "What drink would you choose?",
    questionId: "drinkOfChoice",
    options: [
      {
        optionText: "Soda",
        value: "Soda",
      },
      {
        optionText: "Coffee",
        value: "Coffee",
      },
      {
        optionText: "Tea",
        value: "Tea",
      },
      {
        optionText: "Juice",
        value: "Juice",
      },
    ],
  },
  {
    questionType: "SelectionGroup",
    questionText: "What genre of music are you most likely to listen to?",
    questionId: "musicGenre",
    options: [
      {
        optionText: "Hip-Hop",
        value: "Hip-Hop",
      },
      {
        optionText: "K-Pop",
        value: "K-Pop",
      },
      {
        optionText: "Rock Music",
        value: "Rock Music",
      },
      {
        optionText: "Classical",
        value: "Classical",
      },
    ],
  },
  {
    questionType: "SelectionGroup",
    questionText: "What genre of writing are you most likely to read?",
    questionId: "writingGenre",
    options: [
      {
        optionText: "Fantasy",
        value: "Fantasy",
      },
      {
        optionText: "Sci-Fi",
        value: "Sci-Fi",
      },
      {
        optionText: "Nonfiction",
        value: "Nonfiction",
      },
      {
        optionText: "Mystery",
        value: "Mystery",
      },
    ],
  },
  {
    questionType: "SelectionGroup",
    questionText: "What school subject would you enjoy the most?",
    questionId: "schoolSubject",
    options: [
      {
        optionText: "Math",
        value: "Math",
      },
      {
        optionText: "Science",
        value: "Science",
      },
      {
        optionText: "English",
        value: "English",
      },
      {
        optionText: "History",
        value: "History",
      },
    ],
  },
  {
    questionType: "SelectionGroup",
    questionText: "What's your go-to writing utensil?",
    questionId: "drinkOfChoice",
    options: [
      {
        optionText: "Pen",
        value: "Pen",
      },
      {
        optionText: "Pencil",
        value: "Pencil",
      },
      {
        optionText: "Mechanical Pencil",
        value: "Mechanical Pencil",
      },
    ],
  },
  {
    questionType: "Info",
    questionText:
      'The next couple of questions are some fun "controversial" questions to start funny conversations!',
  },
  {
    questionType: "SelectionGroup",
    questionText: "Does pineapple belong on pizza?",
    questionId: "pineappleOnPizza",
    options: [
      {
        optionText: "Yes, 100%",
        value: "Yes",
      },
      {
        optionText: "No, absolutely not!",
        value: "No",
      },
    ],
  },
  {
    questionType: "SelectionGroup",
    questionText: "Are morning people more productive than night people?",
    questionId: "morningMoreProductive",
    options: [
      {
        optionText: "Yes",
        value: "Yes",
      },
      {
        optionText: "No",
        value: "No",
      },
    ],
  },
  {
    questionType: "SelectionGroup",
    questionText: "Do you think aliens exist?",
    questionId: "aliensExist",
    options: [
      {
        optionText: "Yes",
        value: "Yes",
      },
      {
        optionText: "No",
        value: "No",
      },
    ],
  },
  {
    questionType: "SelectionGroup",
    questionText:
      "Is it allowed to wish for infinite wishes (from a genie, of course)?",
    questionId: "infiniteWishes",
    options: [
      {
        optionText: "Yes",
        value: "Yes",
      },
      {
        optionText: "No",
        value: "No",
      },
    ],
  },
  {
    questionType: "SelectionGroup",
    questionText: "What super power is ideal for taking over the world?",
    questionId: "superPowerTakingOver",
    options: [
      {
        optionText: "Invisibility",
        value: "Invisibility",
      },
      {
        optionText: "Mind Reading",
        value: "Mind Reading",
      },
      {
        optionText: "Super Speed",
        value: "Super Speed",
      },
    ],
  },
  {
    questionType: "SelectionGroup",
    questionText: "Is cereal a soup?",
    questionId: "cerealSoup",
    options: [
      {
        optionText: "Yes",
        value: "Yes",
      },
      {
        optionText: "No",
        value: "No",
      },
    ],
  },
  {
    questionType: "SelectionGroup",
    questionText:
      "Would you press a big red button without knowing what it did?",
    questionId: "bigRedButton",
    options: [
      {
        optionText: "Yes",
        value: "Yes",
      },
      {
        optionText: "No",
        value: "No",
      },
    ],
  },
];

const getSurvey = () => survey;

module.exports = {
  getSurvey,
};
