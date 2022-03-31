const express = require("express");
const router = express.Router();
const {
  getAPI,
  setAPI,
  updateAPI,
  deleteAPI,
} = require("../controllers/controller");

router.route("/").get(getAPI).post(setAPI);
router.route("/:id").delete(deleteAPI).put(updateAPI);

module.exports = router;
