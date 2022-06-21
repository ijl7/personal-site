const express = require("express");
const basicAuth = require("express-basic-auth");
const router = express.Router();

const port = process.env.PORT || 3000;

const app = express();

app.use(express.static("public"));

app.get('/', (req, res) => {
    res.sendFile('index.html', {root :__dirname});
});
router.get('/clips.html', basicAuth({users : {'admin': 'password'}, challenge : true}), (req, res) =>{
    res.sendFile('clips.html', {root :__dirname});
})

app.listen(port);