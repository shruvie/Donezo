import mongoose from 'mongoose';
import  User from './users.js';
const taskschema = new mongoose.Schema(
    {
        "userId":{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        "title": String,
        "description" : String,
        "priority":{
            type: String,
            enum: ["high","medium","low"],
            default: "high"
        },
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
        "collaborators": { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    },{ timestamps : true}
);

export default mongoose.model('Task',taskschema);