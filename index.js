const express = require("express");
require('dotenv').config()

const app = express();

app.get('/', (req, res) => {
    res.status(200).send({
        'message': 'api working'
    })
})

app.listen(process.env.PORT, () => {
    console.log('Server running: ', process.env.PORT)
});