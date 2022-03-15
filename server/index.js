const express = require('express');
const Connection = require('./database/db')
const router = require('./routes/route');
const cors = require('cors');

const app = express();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use('/', router)

app.listen(5000, () => {
    console.log("Server is running")
});



Connection();