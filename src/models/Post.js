const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
    {
        index : {
            type: Number,
            unique: true,
        },
        contents : {
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
    }, {
        timestamps: true
    });

postSchema.pre('save', async function (next) {
    if(this.isNew) {
        const maxIndex = await this.constructor.findOne().sort('-index').select('index').exec();
        this.index = maxIndex ? maxIndex.index + 1 : 1;
    }
    next();
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;