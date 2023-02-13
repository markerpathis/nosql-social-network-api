const router = require("express").Router();

const { postThought, getThoughts, getSingleThought } = require("../../controllers/thoughtController");

// /api/thoughts
router.route("/").get(getThoughts).post(postThought);

// /api/thoughts/:thoughtId
router.route("/:thoughtId").get(getSingleThought);

module.exports = router;
