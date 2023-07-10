//  Add your code here
const { Schema, model } = require("mongoose")

const celebritySchema = new Schema ({
    name : {type: String, trim: true },
    occupation : {type : String, default: 'unknown' },
    catchPhrase : {type: String, required: true },
})

const CelebrityModel = model("Celebrity", celebritySchema)

model.exports = CelebrityModel