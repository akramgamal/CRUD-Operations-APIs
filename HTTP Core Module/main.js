const http = require('http');
users = [
    {
        id: 1,
        name: 'akram',
        age: 22
    },
    {
        id: 2,
        name: 'mona',
        age: 26
    },
    {
        id: 3,
        name: 'tony',
        age: 33
    }
]
const server = http.createServer((req, res) => {
    if (req.url == '/users' && req.method == 'GET') {
        res.write(`users : ${JSON.stringify(users)}`);
        res.end();
    } else if (req.url == '/addUser' && req.method == 'POST') {
        const body = []
        req.on('data', (chunk) => {
            body.push(chunk);
        })
        req.on('end', () => {
            const parsed = JSON.parse(Buffer.concat(body));
            users.push(parsed);
            res.write(`users : ${JSON.stringify(users)}`)
            res.end();
        })
    } else if (req.url == '/update' && req.method == 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        })
        req.on('end', () => {
            const parsed = JSON.parse(Buffer.concat(body));
            users = users.map((ele) => ele.id == parsed.id ? parsed : ele);
            res.write(`users : ${JSON.stringify(users)}`)
            res.end();
        })
    }
    else if (req.url == '/delete' && req.method == 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        })
        req.on('end', () => {
            const parsed = JSON.parse(Buffer.concat(body));
            users = users.filter((ele) => ele.id != parsed.id);
            res.write(`users : ${JSON.stringify(users)}`)
            res.end();
        })
    }
    else if (req.url == '/getById' && req.method == 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        })
        req.on('end', () => {
            const parsed = JSON.parse(Buffer.concat(body));
            const found = users.find((ele) => ele.id == parsed.id);
            if (found) {
                res.write(`users : ${JSON.stringify(found)}`)
            } else {
                res.write(`Not found`)
            }
            res.end();
        })
    }
    else if (req.url == '/getByName' && req.method == 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        })
        req.on('end', () => {
            const parsed = JSON.parse(Buffer.concat(body));
            const found = [];
            users.forEach(element => {
                if (element.name == parsed.name) {
                    found.push(element);
                }
            });
            if (found.length > 0) {
                res.write(`users : ${JSON.stringify(found)}`)
            } else {
                res.write(`Not found`)
            }
            res.end();
        })
    } else if (req.url == '/reversedUsers' && req.method == 'GET') {
        users.reverse();
        res.write(`users : ${JSON.stringify(users)}`);
        res.end();
    }
    else {
        res.write(`error`);
        res.end();
    }
});
server.listen(5000, () => {
    console.log('server is running');
})