const express = require("express");
const Product = require("../models/product.model");
const router = express.Router();
const crudController = require("./crud.controller");


router.get("/",crudController(Product).get)
router.get("/:id",crudController(Product).getOne)
router.post("/",crudController(Product).post)
router.patch("/:id",crudController(Product).patch)
router.delete("/:id",crudController(Product).delete)

module.exports = router;