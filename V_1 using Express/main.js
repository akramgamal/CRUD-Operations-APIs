const express = require('express');
const app = express();//create server

app.use(express.json());
app.use(require('../Assignment 3/users/usersRoutes/userRoute'));
app.listen(5000, () => {
    console.log('server is on');
}) 