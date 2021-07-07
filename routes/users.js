const express = require("express");
const router = express.Router();

let genres = [
    "Horror",
    "Mystery",
    "Drama",
    "Fiction",
    "Sci-Fi",
    "Technology",
    "Romance",
    "Classic",
    "Folklore",
    "Mythology"
];


router.get("/register", (req, res)=>{
    res.render("register", {
        title: "New user registration",
        genresAvailable: genres
    });
});


router.post("/", (req, res)=>{
    res.json(req.body);
});


module.exports = router;