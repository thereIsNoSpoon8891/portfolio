const express = require('express')
const cors = require('cors')
const app = express()
require('dotenv').config()


app.use(cors())
app.use(express.json())
app.use("/api", require("./routes/mailRouter"))





//error handling
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errorMessage: err.message })
})


app.listen(8080, () => {
    console.log("server live on port 8080");
})