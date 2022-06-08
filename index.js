const express = require("express");

const app = express();

app.listen(process.env.PORT);

app.get('/data', (req, res) => {
    res.status(200).send({
        'message': 'api working'
    })
})