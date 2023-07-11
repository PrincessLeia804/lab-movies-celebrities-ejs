// require MovieModel
const Celebrity = require('../models/Celebrity.model');
const MovieModel = require('../models/Movie.model');

// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require('express').Router()

// all your routes here
// GET all movies
router.get("/", async (res, req) => {
    try {
        const allMovies = await MovieModel.find()
        res.render("movies/movies", {allMovies});
    } catch (error) {
        console.log("An error occured");
    }
})


// GET create movie page
router.get("/create", async (req, res) => {
    try {
        const celebs = await Celebrity.find()
        res.render("movies/new-movie", {actors : celebs})
    } catch (error) {
        console.log(error);
    }
})

// POST movie create page
router.post("/create", async (req, res) => {
    const data = req.body

    try {
        const newMovie = await MovieModel.create(data);
        res.redirect("/movies/")
    } catch (error) {
        console.log("An error occured");
        res.redirect("/new-movie")
    }
})


module.exports = router