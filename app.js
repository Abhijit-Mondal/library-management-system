// Loading environment variables:
require('dotenv').config()

// App debugging:
const startupDebugger = require("debug")("app:startup");
const dbDebugger = require("debug")("app:db");

// App Framework:
const express = require('express');
const app = express();

// Connecting to a database:
const mongoose = require("mongoose");
mongoose.connect(process.env.DB_PATH, 
    {useUnifiedTopology: true, useNewUrlParser: true})
    .then(()=>dbDebugger("Connected to MongoDB..."))
    .catch((err)=>console.err("Could not connect to MongoDB", err));



// Views:
app.set("views", "./views");
app.set("view engine", "ejs");

// Request Parsing Middleware:
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static Assets
app.use(express.static("public"));


// Loading Resources
const homeRouter = require("./routes/home");
app.use("/", homeRouter);
const scholarsRouter = require("./routes/scholars");
app.use("/scholars/", scholarsRouter);


const port = process.env.PORT;
app.listen(port, ()=>startupDebugger(`Server running on Port[${port}]...`));