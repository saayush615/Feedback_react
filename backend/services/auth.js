import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();
const secret = process.env.SECRET;

async function generateToken(user) {
    return jwt.sign({ id: user._id, username: user.username}, secret,{ expiresIn: '1h'}); // expiresIn : (s, m, h, d, w) or (60 * 60 = 3600 seconds = 1 hour)
}

async function verifyToken(token) {
    if (!token) return null; // if token is undefined, null, or an empty string return null
    try {
        return jwt.verify(token,secret);
    } catch (error) {
        return null;
    }
}


export { generateToken, verifyToken };
