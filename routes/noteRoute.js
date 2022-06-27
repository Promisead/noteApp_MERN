const express = require('express')
const router = express.Router()
const Note = require("../models/noteModel")

//Add Note Route
router.route("/create").post((req,res)=>{
    const title = req.body.title
    const content = req.body.content
    const newNote = new Note({
        title,
        content
    })
    newNote.save()
})

// Retrieve Notes Route
router.route("/notes").get((req,res)=>{
    Note.find()
       .then(found=> res.json(found))
})
module.exports =router;