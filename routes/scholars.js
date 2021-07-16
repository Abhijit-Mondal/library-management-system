const express = require("express");
const router = express.Router();

// Loading Models:
const {Genre} = require("../models/Genre");
const {Scholar, validate} = require("../models/Scholar");

// Register a Scholar
router.get("/register", (req, res)=>{

    Genre.find({}, "name -_id", (err, genres)=>{
        if(err)
            return res.status(500).send("Could not fetch Genres");
        
        res.render("register", {
            title: "New user registration",
            genresAvailable: genres
        });
    });
});

// View a particular Scholar
router.get("/:id", (req, res)=>{

    Scholar.findById(req.params.id).populate("genresPreferred").exec((err, scholar)=>{
        res.status(200).send(scholar);
    });
});

// Create a Scholar instance
router.post("/", (req, res)=>{
    
    let scholarObject = {
        firstName: req.body["first-name"],
        lastName: req.body["last-name"],
        email: req.body["email"],
        age: req.body["age"],
        genresPreferred: []
    };

    let genresSelected = [];
    for(let key in req.body) {
        if(req.body[key] === "on"){
            genresSelected.push(key);
        }
    }
    
    Genre.find({name: {$in: genresSelected}}, "-name", (err, genres)=>{
        if(err)
            dbDebugger(err);
        genres.forEach(genre=>{
            console.log(genre);
            scholarObject.genresPreferred.push(genre._id);
        });
        
        console.log(typeof scholarObject.genresPreferred[0])
        console.log(scholarObject);

        const {error} = validate(scholarObject);

        if(error) return res.status(400).send(error.details[0].message);

        scholarObject = new Scholar(scholarObject);
        scholarObject.save((err, result)=>{
            if(err)
                console.log(err);
            res.status(200).send(result);
        });
    });
});


module.exports = router;