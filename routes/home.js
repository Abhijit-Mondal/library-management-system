const express = require("express");
const router = express.Router();




router.get("/", (req, res)=>{
    res.render("index", {title: "Welcome to the Scholar's Library"});
});

router.get("/about", (req, res)=>{
    res.render("about", {title: "About Scholar's Library"});
});

router.get("/contact", (req, res)=>{
    res.render("contact", {title: "Contact Scholar's Library"});
});

module.exports = router;