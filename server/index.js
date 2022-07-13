const express = require('express');
const app = express();

const cors = require('cors');
app.use(express.json());

//middleware

app.use(cors());

app.listen(5000, () => {
    console.log("server has started on port 5000");
});