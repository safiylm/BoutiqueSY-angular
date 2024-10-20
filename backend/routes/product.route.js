const productcontroller = require("../controllers/product.controller.js");

var router_product = require("express").Router();

// Create a new statistique User
router_product.get("/api/products", productcontroller.getAll);
router_product.get("/api/product", productcontroller.getProductById);
router_product.get("/api/product/categorie", productcontroller.getProductsByCategorie);



module.exports = router_product;