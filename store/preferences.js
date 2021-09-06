const preferences = require("./data");

const getAllPreferences = () => preferences;

const getPreferencesByUserId = (userId) =>
  preferences.find((preference) => preference.userId === userId);

const getPreferencesButSelf = (userId) =>
  preferences.filter((preference) => preference.userId !== userId);

const addPreferences = (prefs) => {
  preferences.push(prefs);
};

const removePreferencesByUserId = (userId) =>
  preferences.splice(
    preferences.findIndex((preference) => preference.userId === userId)
  );

module.exports = {
  getAllPreferences,
  getPreferencesByUserId,
  getPreferencesButSelf,
  addPreferences,
  removePreferencesByUserId,
};
