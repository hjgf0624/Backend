const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        id : {
            type: String,
            unique: true,
            required: true
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
    }, {
        timestamps: true
    });

userSchema.pre('save', async function (next) {
    if(this.isNew) {
        const maxIndex = await this.constructor.findOne().sort('-index').select('index').exec();
        this.index = maxIndex ? maxIndex.index + 1 : 1;
    }
    next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;