// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require('express').Router()
const Celebrity = require("../models/Celebrity.model")
console.log('Celebrity: ', Celebrity);

// all your routes here

// Get all celebrities
router.get("/", async (req, res) => {
    try{
        const allCelebrities = await Celebrity.find()
        res.render("celebrities/celebrities", {allCelebrities})
    } catch(err) {
        console.log(err);
    }
})

// Get create new celebrity page
router.get("/create", (req, res) => {
    res.render("celebrities/new-celebrity")
})


// create new celebrity
router.post("/create", async (req, res) => {
    const data = req.body

    try{
        const newCelebrity = await Celebrity.create(data)
        console.log(newCelebrity);
        res.render("celebrities/celebrities")
    } catch(err){
        console.log(err);
        res.render("celebrities/new-celebrity")
    }
})


module.exports = router