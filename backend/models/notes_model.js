const mongoose = require('mongoose')

// defining hte Note schema
const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    }
})

// exporting the model defined by the schema above
module.exports = mongoose.model('Note', noteSchema)