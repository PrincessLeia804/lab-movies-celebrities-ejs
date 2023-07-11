//  Add your code here
const { Schema, model } = require("mongoose")

const celebritySchema = new Schema({
    name : {type: String, trim: true },
    occupation : {type : String, default: 'unknown' },
    catchPhrase : {type: String, required: true },
},
    {timestamps: true}
)

const Celebrity = model("Celebrity", celebritySchema)

module.exports = Celebrity