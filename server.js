const express = require('express');
const app = express();
const cors = require('cors')
const attController = require('./controllers/atrController');

require("./config/database")
require("./config/dbInit")

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/att', attController);

//Start the server in port 2020
const server = app.listen(process.env.PORT || 2020, function () {
    const port = server.address().port
    console.log("App started at port:", port)
})