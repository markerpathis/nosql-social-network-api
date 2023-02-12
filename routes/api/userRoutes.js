const router = require("express").Router();

const { getUsers, postUser } = require("../../controllers/userController");

// /api/users
router.route("/").get(getUsers).post(postUser);

module.exports = router;
