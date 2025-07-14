import express from 'express';
import { handleRegister, handleLogin } from '../controllers/user.js';

const router = express.Router();

router.post('/', handleRegister);
router.post('/login', handleLogin);


export default router;