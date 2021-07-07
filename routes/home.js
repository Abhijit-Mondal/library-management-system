const express = require("express");
const router = express.Router();




router.get("/", (req, res)=>{
    res.render("index", {title: "Biju Pattnaik Central Library"});
});



module.exports = router;