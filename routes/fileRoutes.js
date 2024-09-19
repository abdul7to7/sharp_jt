const {
  getFile,
  postFile,
  deleteFile,
  getFiles,
} = require("../controllers/fileController");

const router = require("express").Router();

router.get("/files", getFiles);
router.get("/file", getFile);
router.post("/file", postFile);
router.delete("file", deleteFile);

module.exports = router;
