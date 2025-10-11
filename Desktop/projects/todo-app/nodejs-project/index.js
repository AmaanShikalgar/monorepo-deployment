const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("HELLO WORLD 3");
})

app.listen(3000);       