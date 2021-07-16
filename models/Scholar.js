// Loading ORM module for Model definition
const mongoose = require("mongoose");
const {Schema} = mongoose;


// Input Validation
const Joi = require("joi");

// Defining the Scholar schema
const scholarSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 255,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 255,
        trim: true
    },
    email: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 255,
        trim: true
    },
    age: {
        type: Number,
        required: true,
        min: [7, "Age must be above or equal to 7"],
        max: 100
    },
    genresPreferred: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Genre"
    }]
});

// Defining the Model:
const Scholar = mongoose.model("Scholar", scholarSchema);

// Validators:
const validateScholar = (scholar) => {
    const schema = Joi.object({
        firstName: Joi.string().min(1).max(255).required(),
        lastName: Joi.string().min(1).max(255).required(),
        email: Joi.string().min(1).max(255).required(),
        age: Joi.number().min(7).max(100).required(),
        genresPreferred: Joi.array().items(Joi.object())
    });
    return schema.validate(scholar);
};

// Exports:
exports.Scholar = Scholar;
exports.validate = validateScholar;