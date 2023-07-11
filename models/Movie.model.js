const {Schema, model} = require("mongoose")

const movieSchema = new Schema({
    //   _id: Schema.Types.ObjectId,
    title: String,
    genre: String,
    plot: String,
    cast: [{type: Schema.Types.ObjectId, ref: "Celebrity" }] // setup for populate()    
})

const MovieModel = model("Movie", movieSchema)
module.exports = MovieModel