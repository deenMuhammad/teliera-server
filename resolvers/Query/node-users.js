const users = require('./../../nodes/user')

const loginWithPassword = async (obj, {username, password}, ctx)=>{
    const token = await users.CreateTokenwithPassword(username, password);
    ctx.headers.accessToken = token;
    if(token){
        ctx.headers.accessToken = token;
    }
    return token;
}

const verifyUserSession = async (obj, {}, ctx)=>{
    var result = await users.verifyUserSession(ctx)
    return result;
}

module.exports = {
    loginWithPassword,
    verifyUserSession
}