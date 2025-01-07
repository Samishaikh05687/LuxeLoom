const express = require("express")
const router = express.Router();
const productSchema = require("../models/product-schema")

router.get("/",(req,res)=>{
    res.send("Hello World");
});
module.exports = router;