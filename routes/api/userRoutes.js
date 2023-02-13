const router = require("express").Router();

const { getUsers, getSingleUser, postUser, updateUser, deleteUser } = require("../../controllers/userController");

// /api/users
router.route("/").get(getUsers).post(postUser);

// /api/users/:userId
router.route("/:userId").get(getSingleUser).put(updateUser).delete(deleteUser);

module.exports = router;
