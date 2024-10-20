const express = require('express');
const db = require('./config/db.config.js')
const app = express();

const port = 3000;
const router_user = require("./routes/product.route")

app.use(router_user )

app.get('/', (req, res) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});