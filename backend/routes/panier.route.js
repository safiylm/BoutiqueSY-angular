const paniercontroller = require("../controllers/panier.controller.js");

var router_panier = require("express").Router();

// Create a new statistique User
router_panier.get("/api/panier", paniercontroller.getAll);
router_panier.get("/api/panier/u", paniercontroller.getByUserId);
router_panier.get("/api/panier/add", paniercontroller.add);
router_panier.get("/api/panier/remove", paniercontroller.remove);



module.exports = router_panier;