import mongoose from 'mongoose';
import  User from './users.js';
const taskschema = new mongoose.Schema(
    {
        "title": String,
        "description" : String,
        "duedate" : Date,
        "status" : {
            type: String,
            enum :["todo","in-progress","done"],
            default : "todo"
        },
        "createdBy" : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'User',
         required : true
        },
    },{ timestamps : true}
);

export default mongoose.model('Task',taskschema);