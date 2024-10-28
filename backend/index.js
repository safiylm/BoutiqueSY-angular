const express = require('express');
const app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
  extended: true 
}));
const port = 3000;
const router_panier= require("./routes/panier.route")
const router_wishlist= require("./routes/wishlist.route")
const router_product= require("./routes/product.route")
const router_user = require("./routes/user.route")
const cors = require("cors");


app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var corsOptions = {
  origin: "*"
};

app.use(cors(corsOptions));
app.use(router_product )
app.use(router_user )
app.use(router_panier )
app.use(router_wishlist )

app.get('/', (req, res) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});