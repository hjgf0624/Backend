const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
    {
        index : {
            type: Number,
            unique: true,
        },
        subject : {
            type: String,
            unique: false,
            required: true     
        },
        details : {
            type: String,
            required: true,
        },
        receiver : {
            type: User,
            required: false,
        },
        sender : {
            type: User,
            required: true,
        },
        category : {
            type: String,
            required: true,
        },
        intake : {
            type: Number,
            required: true,
        },
        heart : {
            type: Number,
            required: false,
        },
        views : {
            type: Number,
            required: false,
            default: 0
        }
    }, {
        timestamps: true
    });

messageSchema.pre('save', async function (next) {
    if(this.isNew) {
        const maxIndex = await this.constructor.findOne().sort('-index').select('index').exec();
        this.index = maxIndex ? maxIndex.index + 1 : 1;
    }
    next();
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;