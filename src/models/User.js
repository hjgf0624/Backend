const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        id : {
            type: String,
            required: true,
        },
        index : {
            type: Number,
            unique: true,
        },
        pw : {
            type: Number,
            unique: true,     
        },
        name : {
            type: String,
            required: true,
        },
        age : {
            type: Number,
            required: true,
        },
        height : {
            type: True,
            required: true,
        },
        interest : {
            type: [String],
            required: true,
        },
        adress : {
            type: String,
            required: true,
        },
        sub_adress : {
            type: String,
            required: true,
        },
        username : {
            type: String,
            required: true,
            unique: true
        },
        state : {
            type: String,
            required: false,
            unique: true
        },
        credit : {
            type: Number,
            required: false,
            default: 0
        },
        eval_score : {
            type: Number,
            required: false,
            default: 0
        }
    }
);

userSchema.pre