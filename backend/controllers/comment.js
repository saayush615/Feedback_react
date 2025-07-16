import Comment from "../models/comment.js";

async function handleSubmitComment(req,res) {
    const { user, comment, rating, categories} = req.body;

    if (!user || !comment || !rating || !categories) {
        return res.status(400).json({ message: 'All fields are required.' });
    }
    
    try {
        const newComment = await Comment.create({ user, comment, rating, categories});
        return res.status(201).json({
            message: 'Comment posted successfully', 
            comment: newComment
        });
    } catch (error) {
        return res.status(500).json({message: 'Cannot post', error: error.message }) //  server errors.
    }
}

async function handleGetComment(req,res) {
    try {
        const allComments = await Comment.find().populate('user');
        return res.status(200).json(allComments);
    } catch (error) {
        return res.status(500).json({message: 'Issue in finding the post', error: error.message})
    }
}

async function handleGetCommentById(req,res) {
    const id = req.params.id;
    if(!id) return res.status(400).json({message: 'you need id to search'})
    try {
        const comment = await Comment.findById(id).populate('user');
        if (!comment) {
            return res.status(404).json({ message: 'Comment not found' });
        }
        return res.status(200).json(comment);
    } catch (error) {
        return res.status(500).json({message: 'Internal server error', error: error.message});
    }
}

export { handleSubmitComment, handleGetComment, handleGetCommentById };