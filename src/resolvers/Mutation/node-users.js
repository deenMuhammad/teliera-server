const users = require('./../../nodes/user')

const signUpWithPassword = async (obj, {username, name, password, address, phone}, ctx)=>{
    const token = await users.SignUpWithPassword(username, name, password, address, phone);
    ctx.headers.accessToken = token;
    return token;
}

module.exports = {
    signUpWithPassword
}