const path=require('path');
const fs=require('fs');
const getAllUsers=(req, res) => {
    let users=JSON.parse(fs.readFileSync(path.join(__dirname,"../../../db/db.json")));
    res.json(users);
}
const addUser= (req, res) => {
    let users=JSON.parse(fs.readFileSync(path.join(__dirname,"../../../db/db.json")));
    const found = users.find((ele) => ele.id == req.body.id);
    if (!found) {
        users.push(req.body);
        fs.writeFileSync(path.join(__dirname,"../../../db/db.json"),JSON.stringify(users))
        res.json(users);
    } else {
        res.json({ message: "already exist" });
    }
}
const update=(req, res) => {
    let users=JSON.parse(fs.readFileSync(path.join(__dirname,"../../../db/db.json")));
    users = users.map((ele) => ele.id == req.body.id ? req.body : ele);
    fs.writeFileSync(path.join(__dirname,"../../../db/db.json"),JSON.stringify(users))
    res.json(users);
} 
const deletee = (req, res) => {
    let users=JSON.parse(fs.readFileSync(path.join(__dirname,"../../../db/db.json")));
    users = users.filter((ele) => ele.id != req.body.id);
    fs.writeFileSync(path.join(__dirname,"../../../db/db.json"),JSON.stringify(users))
    res.json(users);
}
const getById=(req, res) => {
    let users=JSON.parse(fs.readFileSync(path.join(__dirname,"../../../db/db.json")));
    const found = users.find((ele) => ele.id == req.body.id);
    if (found) {
        res.json(found);
    } else {
        res.json({ message: "Not Found" });
    }
}
const getByName=(req, res) => {
    let users=JSON.parse(fs.readFileSync(path.join(__dirname,"../../../db/db.json")));
    const found = []
    for (let i = 0; i < users.length; i++) {
        if (req.body.name == users[i].name) {
            found.push(users[i]);
        }
    }
    if (found.length > 0) {
        res.json(found);
    } else {
        res.json({ message: "Not Found" });
    }
}
const reversed= (req, res) => {
    let users=JSON.parse(fs.readFileSync(path.join(__dirname,"../../../db/db.json")));
    res.json(users.reverse());
}
module.exports={getAllUsers,addUser,update,deletee,getById,getByName,reversed}