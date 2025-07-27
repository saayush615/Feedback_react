import express from 'express';
import { handleRegister, handleLogin, handleLogout, handleSession } from '../controllers/user.js';

const router = express.Router();

router.get('/check-session', handleSession)
router.post('/', handleRegister);
router.post('/login', handleLogin);

router.post('/logout', handleLogout)

export default router;