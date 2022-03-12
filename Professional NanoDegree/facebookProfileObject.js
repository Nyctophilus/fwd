const facebookProfile = {
  name: "Muhammed Yousry",
  friends: 568,
  messages: [
    "Hello Beautiful",
    "You're Gorgeous",
    "U r KING!!",
    "You Define the World!",
    "Frist-class Mate.",
  ],

  postMessage: function (msg) {
    facebookProfile.messages.push(msg);
  },

  deleteMessage: function (index) {
    facebookProfile.messages.splice(index, 1);
  },

  addFriend: function () {
    facebookProfile.friends++;
  },

  removeFriend: function () {
    if (facebookProfile.friends > 0)
      facebookProfile.friends--;
  },
};
