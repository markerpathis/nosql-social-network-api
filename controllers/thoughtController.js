const { User, Thought } = require("../models");

module.exports = {
  // Post thought
  postThought(req, res) {
    Thought.create(req.body)
      .then((thought) => {
        return User.findOneAndUpdate({ username: req.body.username }, { $addToSet: { thoughts: thought._id } }, { new: true });
      })
      .then((user) =>
        !user
          ? res.status(404).json({
              message: "Thought created, but found no user with that ID",
            })
          : res.json("Created thought")
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // Get all thoughts
  getThoughts(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  // Get single thought
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .select("-__v")
      .then((thought) => (!thought ? res.status(404).json({ message: "No thought with that ID" }) : res.json(thought)))
      .catch((err) => res.status(500).json(err));
  },
  // Update thought
  updateThought(req, res) {
    Thought.findOneAndUpdate({ _id: req.params.thoughtId }, { $set: req.body }, { runValidators: true, new: true })
      .then((thought) => (!thought ? res.status(404).json({ message: "No thought with that ID" }) : res.json(thought)))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // Delete thought
  deleteThought(req, res) {
    Thought.findOneAndRemove({ _id: req.params.thoughtId })
      .then((thought) => {
        if (!thought) {
          return res.status(404).json({ message: "No thought with that ID" });
        } else {
          User.findOneAndUpdate({ thoughts: req.params.thoughtId }, { $pull: { thoughts: req.params.thoughtId } }, { new: true }).then(() => {
            return res.json({ message: "Thought deleted and associated user updated" });
          });
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // Post reaction to thought
  postReaction(req, res) {
    Thought.findOneAndUpdate({ _id: req.params.thoughtId }, { $addToSet: { reactions: req.body } }, { runValidators: true, new: true })
      .then((thought) => (!thought ? res.status(404).json({ message: "No thought found with that ID :(" }) : res.json(thought)))
      .catch((err) => res.status(500).json(err));
  },
  // Delete reaction
  deleteReaction(req, res) {
    Thought.findOneAndUpdate({ _id: req.params.thoughtId }, { $pull: { reactions: { reactionId: req.params.reactionId } } }, { runValidators: true, new: true })
      .then((thought) => (!thought ? res.status(404).json({ message: "No thought found with that ID :(" }) : res.json(thought)))
      .catch((err) => res.status(500).json(err));
  },
};
