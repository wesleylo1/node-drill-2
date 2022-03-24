require("dotenv").config()
const express = require("express")
const path = require("path")
const cors = require("cors")
const app = express()
const port = process.env.PORT || 3035
const { getInputs, createInput } = require("./controller")

// Middleware
app.use(express.json())
app.use(cors())

// Put endpoints here
app.get("/api/info", getInputs)
app.post("/api/info", createInput)

app.listen(port, () => console.log(`server running on ${port}`))
