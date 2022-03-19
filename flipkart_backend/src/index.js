const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");


app.use(express.json())
app.use(cors())
const productController = require("./controllers/product.controller");
const signupController = require("./controllers/signup.controller")

app.use("/products",productController)
app.use("/",signupController)





module.exports=app;