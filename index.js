const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors())

app.post('/register', (request, response) => {
    response.json('Test is ok and working well! ')
})

app.listen(4000);