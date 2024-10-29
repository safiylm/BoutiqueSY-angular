const paniercontroller = require("../controllers/panier.controller.js");

var router_panier = require("express").Router();

// Create a new statistique User
router_panier.get("/api/panier", paniercontroller.getAll);
router_panier.get("/api/panier/u", paniercontroller.getByUserId);
router_panier.get("/api/panier/product", paniercontroller.getByProductId);
router_panier.post("/api/panier/add", paniercontroller.add);
router_panier.post("/api/panier/remove", paniercontroller.remove);



module.exports = router_panier;