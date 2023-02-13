const router = require("express").Router();

const { postThought } = require("../../controllers/thoughtController");

// /api/thoughts
router.route("/").post(postThought);

module.exports = router;
