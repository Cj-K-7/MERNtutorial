const express = require("express");
const router = express.Router();
const {
  getAPI,
  setAPI,
  updateAPI,
  deleteAPI,
} = require("../controllers/controller");
const {protect} = require('../middleware/authMiddleware');

/*A router object is an isolated instance of middleware and routes.
You can think of it as a “mini-application” ,
capable only of performing middleware and routing functions*/
router.route("/").get(protect, getAPI).post(protect,setAPI);
router.route("/:id").delete(protect,deleteAPI).put(protect,updateAPI);

module.exports = router;
