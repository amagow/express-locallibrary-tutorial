var express = require("express");
var router = express.Router();
var userController = require("../controllers/userContoller");

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("Working on Page");
});

//Login Page
router.get("/login", userController.user_login);

//Registration Page
router.get("/register", userController.user_register_get);

//Register Handle
router.post("/register", userController.user_register_post);

module.exports = router;
