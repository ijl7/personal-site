const express = require('express');

const port = process.env.PORT || 3000;

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile('C:\\Users\\isaac\\Documents\\GitHub\\personal-site\\index.html');
});

app.listen(port);