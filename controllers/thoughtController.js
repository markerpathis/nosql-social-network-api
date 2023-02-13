const { User, Thought } = require("../models");

module.exports = {
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
};
