const { getAllUsers, addUser, update, deletee, getById, getByName, reversed } = require('../controller/controllerUsers/controller');

const app = require('express').Router();

app.get('/users', getAllUsers);
app.post('/addusers', addUser);
app.put('/update', update);
app.delete('/delete', deletee);
app.post('/getById', getById);
app.post('/getByName', getByName);
app.get('/rusers', reversed);
module.exports = app;