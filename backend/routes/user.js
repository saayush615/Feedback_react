import express from 'express';
import { handleRegister, handleLogin } from '../controllers/user.js';

const router = express.Router();

router.post('/', handleRegister);
router.post('/login', handleLogin);

router.post('/logout', (req,res) => { 
    res.clearCookie('uid', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict'
    });
    return res.status(200).json({ message: 'Logged out successfully'})
 })

export default router;