const router = require("express").Router();

const { postThought, getThoughts, getSingleThought, updateThought, deleteThought } = require("../../controllers/thoughtController");

// /api/thoughts
router.route("/").get(getThoughts).post(postThought);

// /api/thoughts/:thoughtId
router.route("/:thoughtId").get(getSingleThought).put(updateThought).delete(deleteThought);

module.exports = router;
