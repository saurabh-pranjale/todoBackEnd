const mongoose = require('mongoose');

const toSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            require:true,
            maxLenght:50
        },
        description:{
            type:String,
            required:true,
            maxLength:50
        },
        createdAt:{
            type:Date,
            required:true,
            default:Date.now()
        },
        updatedAt:{
            type:Date,
            required:true,
            default:Date.now()
        }
    }
);

module.exports = mongoose.model("Todo",toSchema)