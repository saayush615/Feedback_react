import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
    username:{
        type: mongoose.Schema.Type.ObjectId,
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