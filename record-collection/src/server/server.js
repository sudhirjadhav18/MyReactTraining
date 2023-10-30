const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const port = 5002;

let recordsData = [
    {
        id: 1,
        album: "Rock",
        artist: "John Smith",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
    },
    {
        id: 2,
        album: "Lorem Ipsum",
        artist: "Eminem",
        description: "It has roots in a piece of classical Latin literature looking at its layout."
    }
];

app.get('/api/records', (req, res) => {
    res.send(recordsData);
});

app.post('/api/records', (req, res) => {
    const newRecord = {
        ...req.body,
        id: recordsData.reduce((acc, item)=> acc < item.id ? item.id : acc, 0) + 1
    }
    recordsData.push(newRecord);

    res.send(newRecord);
});

app.listen(port, () => {
    console.log(`server listening on port: ${port}`);
})

