const express = require("express");
const basicAuth = require("express-basic-auth");

const port = process.env.PORT || 3000;

const app = express();

app.use(express.static("public"));
app.use(basicAuth(users = {'admin': 'supersecret'}));

app.get('/', (req, res) => {
    res.sendFile('index.html', {root :__dirname});
});

app.listen(port);