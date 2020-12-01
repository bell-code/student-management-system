import { Schema as _Schema, model } from 'mongoose';
const Schema = _Schema;

let studentSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    dob: {
        type: Date
    }
}, {
    collection: 'students'
})

export default model('StudentSchema', studentSchema)