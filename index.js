const express = require('express');
const app = express();
const port = 2526;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/pages/index.html');
});

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Kozy Server listening on port ${port}`);
});
