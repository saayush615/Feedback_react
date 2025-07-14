import bcrypt from 'bcrypt';

async function hashPassword(password) {
    const hash = await bcrypt.hash(password,10);
    return hash;

}

async function comparePassword(password, hash) {
    const isMatch = await bcrypt.compare(password, hash);
    return isMatch;

}

export { hashPassword, comparePassword }