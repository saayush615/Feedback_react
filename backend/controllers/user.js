import User from '../models/user.js';
import { hashPassword, comparePassword } from '../services/hash.js';
import { generateToken, verifyToken } from '../services/auth.js';

async function handleRegister(req,res){
    const { username, email, password } = req.body;
    try {
        const hashedPassword = await hashPassword(password);
        const user = await User.create({ username, email, password: hashedPassword });
        return res.status(201).json({message: 'User registered successfully', user});  // 201 for successful registration (resource created)
    } catch (error) {
        return res.status(400).json({ error: error.message }) // 400 for bad request (invalid input or password) 
    }
}

async function handleLogin(req,res) {
    const { username, password} = req.body;
    const user = await User.findOne({ username });
    if (!user) {
        return res.status(404).json({ error: 'User not found'});  // 404 for user not found
    }
    const isMatch = await comparePassword(password,user.password);
    if (isMatch) {
        const token = generateToken(user);

        res.cookie('uid',token,{
             httpOnly: true, // cookie inaccessible to JavaScript (document.cookie)
             secure: process.env.NODE_ENV === 'production', // send only over HTTPS in production
             sameSite: 'strict',  // Cookie is only sent on same-site requests (not from links, forms on other domains) 
             maxAge: 60*60*1000 // 1 hour in milliseconds
        });  

        
        return res.status(200).json({  // 200 for successful login
            message: 'Login successfully', 
            user: {id: user._id, username: user.username}
        });  

    }
    return res.status(400).json({ error: 'Invalid password'});
}

export { handleRegister, handleLogin };