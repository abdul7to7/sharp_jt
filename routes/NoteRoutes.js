const { getNote, postNote, putNote, deleteNote, getNotes } = require("../controllers/NoteController");

const router = require("express").Router();

router.get("/notes",getNotes)
router.get("/note",getNote);
router.post("/note",postNote);
router.put("/note",putNote);
router.delete("/note",deleteNote);

module.exports = router;
