let mongoose = require('mongoose');

//creating mentor schema/model

let MentorSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    sex: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

const Mentor = mongoose.model('Mentor', MentorSchema);

export default Mentor 