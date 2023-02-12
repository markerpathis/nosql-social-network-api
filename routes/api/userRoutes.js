const router = require("express").Router();

const { getUsers, getSingleUser, postUser } = require("../../controllers/userController");

// /api/users
router.route("/").get(getUsers).post(postUser);

// /api/users/:userId
router.route("/:userId").get(getSingleUser);

module.exports = router;
