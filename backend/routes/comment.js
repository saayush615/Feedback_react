import express from 'express';
import { handleSubmitComment, handleGetComment, handleGetCommentById } from '../controllers/comment.js';

const router = express.Router();

router.post('/', handleSubmitComment);
router.get('/', handleGetComment);
router.get('/:id', handleGetCommentById)

export default router;