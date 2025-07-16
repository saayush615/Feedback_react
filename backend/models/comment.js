import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    comment:{
        type: String,
        required: true
    },
    rating:{
        type: Number,
        required: true
    },
    categories:{
        type: String,
        required: true
    }
},{ timestamps: true});


export default mongoose.model('Comment', commentSchema);