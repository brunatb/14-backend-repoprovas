require("dotenv").config();
const express = require("express");
const cors = require("cors");
const testsController = require('./controllers/testsController')

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/tests', testsController);


const port = process.env.PORT;
app.listen(port, () => console.log(`Servidor on no port ${port}`));

module.exports = app;
