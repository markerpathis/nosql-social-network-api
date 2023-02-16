const { User, Thought } = require("../models");

module.exports = {
  // Get all users
  getUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  // Get single user
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select("-__v")
      .then((user) => (!user ? res.status(404).json({ message: "No user with that ID" }) : res.json(user)))
      .catch((err) => res.status(500).json(err));
  },
  // Post a user
  postUser(req, res) {
    User.create(req.body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  },
  // Update a user
  updateUser(req, res) {
    User.findOneAndUpdate({ _id: req.params.userId }, { $set: req.body }, { runValidators: true, new: true })
      .then((user) => (!user ? res.status(404).json({ message: "No user with this id!" }) : res.json(user)))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // Delete user and associated thought (if there are any)
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((user) => {
        if (!user) {
          return res.status(404).json({ message: "No user with that ID" });
        } else {
          Thought.deleteMany({ _id: { $in: user.thoughts } }).then(() => {
            return res.json({ message: "User and associated thoughts deleted!" });
          });
        }
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
  // Add friend to a user
  newFriend(req, res) {
    User.findOneAndUpdate({ _id: req.params.userId }, { $addToSet: { friends: req.params.friendId } }, { runValidators: true, new: true })
      .then((user) => (!user ? res.status(404).json({ message: "No user found with that ID :(" }) : res.json(user)))
      .catch((err) => res.status(500).json(err));
  },
  // Remove friend from a user
  removeFriend(req, res) {
    User.findOneAndUpdate({ _id: req.params.userId }, { $pull: { friends: req.params.friendId } }, { runValidators: true, new: true })
      .then((user) => (!user ? res.status(404).json({ message: "No user found with that ID :(" }) : res.json(user)))
      .catch((err) => res.status(500).json(err));
  },
};
