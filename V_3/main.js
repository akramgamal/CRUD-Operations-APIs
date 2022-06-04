const express = require('express');
const { createTables } = require('./DB/db');
const app = express();
app.use(express.json())
createTables();
app.use(require('../Assignment 5/modules/user/user'))
app.use(require("../Assignment 5/modules/post/post"))
app.listen(5000, () => {
    console.log("server is running")
})