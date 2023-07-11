// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require('express').Router()
const Celebrity = require("../models/Celebrity.model")

// all your routes here

/* GET all celebrities */
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
        res.redirect("/celebrities/")
    } catch(err){
        console.log(err);
        res.redirect("/new-celebrity")
    }
})


module.exports = router