const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const path = require("path");

app.use(cors());
app.use(express.json());
app.use("/api", require("./routes/mailRouter"));
app.use(express.static(path.join(__dirname, "client")));




//error handling
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errorMessage: err.message })
})

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "index.html"));
});

app.listen(8080, () => {
    console.log("server live on port 8080");
})