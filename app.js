const express = require('express');
const app = express();

app.set("views", "./views");
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.static("public"));


// Loading home router
const homeRouter = require("./routes/home");
app.use("/", homeRouter);
// Loading users router
const usersRouter = require("./routes/users");
app.use("/users/", usersRouter);


const port = process.env.PORT || 5000;
app.listen(port, ()=>console.log(`Server running on Port[${port}]...`));