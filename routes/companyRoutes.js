const {
  getCompany,
  postCompany,
  putCompany,
  deleteCompany,
  getCompanies,
} = require("../controllers/companyController");

const router = require("express").Router();

router.get("/companies", getCompanies);
router.get("/company", getCompany);
router.post("/compnay", postCompany);
router.put("/company", putCompany);
router.delete("/compnay", deleteCompany);

module.exports = router;
