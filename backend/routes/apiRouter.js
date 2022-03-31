const express = require("express");
const router = express.Router();
const {
  getAPI,
  setAPI,
  updateAPI,
  deleteAPI,
} = require("../controllers/controller");

/*A router object is an isolated instance of middleware and routes.
You can think of it as a “mini-application” ,
capable only of performing middleware and routing functions*/
router.route("/").get(getAPI).post(setAPI);
router.route("/:id").delete(deleteAPI).put(updateAPI);

module.exports = router;
