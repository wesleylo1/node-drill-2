require("dotenv").config()
const express = require("express")
const app = express()
const cors = require("cors")
const { getInputs, createInput } = require("./controller")

app.use(express.json())
app.use(cors())

app.get("/api/info", getInputs)
app.post("/api/info", createInput)

const port = process.env.PORT || 3035
app.listen(port, () => console.log(`server running on ${port}`))
