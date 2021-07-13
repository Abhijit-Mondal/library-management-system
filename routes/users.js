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
    
    let userObject = {
        firstName: req.body["first-name"],
        lastName: req.body["last-name"],
        email: req.body["email"],
        age: req.body["age"],
        genresPreferred: []
    };

    for(let key in req.body) {
        if(genres.includes(key) && req.body[key] === "on"){
            userObject.genresPreferred.push(key);
        }
    }

    // userObject = JSON.stringify(userObject);

    res.json(userObject);
});


module.exports = router;