const users = require('./../../nodes/user')

const signUpWithPassword = async (obj, {username, name, password, address, phone}, ctx)=>{
    const token = await users.SignUpWithPassword(username, name, password, address, phone);
    ctx.headers.accessToken = token;
    return token;
}
const modifyUserAccount = async (obj, {username, name, password, address, phone}, ctx)=>{
    const result = await users.modifyUserAccount({username, name, password, address, phone}, ctx);
    if(!result){
        return false
    }
    return result
} 

module.exports = {
    signUpWithPassword,
    modifyUserAccount
}