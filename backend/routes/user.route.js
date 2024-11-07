const usercontroller = require("../controllers/user.controller.js");

var router_user = require("express").Router();

// Create a new statistique User
router_user.post("/signin", usercontroller.signin);
router_user.get("/login", usercontroller.login);
router_user.get("/api/users", usercontroller.getUsers);
router_user.get("/api/user", usercontroller.getUserById);

module.exports = router_user;