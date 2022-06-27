const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

app.use(cors())
app.use(express.json())

//connect to mongoose
mongoose.connect("mongodb+srv://promise:2992029920@cluster0.cm0hr.mongodb.net/notesDB?retryWrites=true&w=majority")

//required route
app.use("/",require("./routes/noteRoute"))


const port = 3001

app.listen(port, () => console.log(`Note app listening on port ${port}!`))