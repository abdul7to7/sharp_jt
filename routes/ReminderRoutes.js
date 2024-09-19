const {
  getReminder,
  postReminder,
  putReminder,
  deleteReminder,
  getReminders,
} = require("../controllers/reminderController");

const router = require("express").Router();

router.get("/reminders", getReminders);
router.get("/reminder", getReminder);
router.post("/reminder", postReminder);
router.put("/reminder", putReminder);
router.delete("/reminder", deleteReminder);

module.exports = router;
