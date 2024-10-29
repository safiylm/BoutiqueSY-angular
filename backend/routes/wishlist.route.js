const wishlistcontroller = require("../controllers/wishlist.controller.js");

var router_wishlist = require("express").Router();

// Create a new statistique User
router_wishlist.get("/api/wishlist", wishlistcontroller.getAll);
router_wishlist.get("/api/wishlist/u", wishlistcontroller.getByUserId);
router_wishlist.post("/api/wishlist/add", wishlistcontroller.add);
router_wishlist.post("/api/wishlist/remove", wishlistcontroller.remove);
router_wishlist.get("/api/wishlist/product", wishlistcontroller.getByProductId);


module.exports = router_wishlist;

