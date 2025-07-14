import User from '../models/user.js';
import { hashPassword, comparePassword } from '../services/hash.js';

async function handleRegister(req,res){
    const { username, email, password } = req.body;
    try {
        const hashedPassword = await hashPassword(password);
        const user = await User.create({ username, email, password: hashedPassword });
        return res.status(201).json({message: 'User registered successfully', user});
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
}

async function handleLogin(req,res) {
    const { email, password} = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        return res.status(404).json({ error: 'User not found'});
    }
    const isMatch = await comparePassword(password,user.password);
    if (isMatch) {
        return res.status(200).json({message: 'Login successfully', user: {id: user._id, username: user.username}});
    }
    return res.status(400).json({ error: 'Invalid password'});
}

export { handleRegister, handleLogin };