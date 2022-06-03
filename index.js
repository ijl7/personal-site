const express = require('express');

const port = process.env.PORT || 3000;

const app = express();

const dirname = "C:\\Users\\isaac\\Documents\\GitHub\\personal-site\\";
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: dirname});
});

app.listen(port);