// Loading ORM module for Model definition
const mongoose = require("mongoose");
const {Schema} = mongoose;


// Input Validation
const Joi = require("joi");

// Defining the Genre schema
const genreSchema = new Schema({
    name: {
        type: String,
        required: true,
        maxlength: 50
    }
});

// Defining the Model:
const Genre = mongoose.model("Genre", genreSchema);

// Validators:
const validateGenre = (genre) => {
    const schema = Joi.object({
        name: Joi.string().max(50).required()
    });
    return schema.validate(genre);
};

// Exports:
exports.Genre = Genre;
// exports.genreSchema = genreSchema;
exports.validate = validateGenre;