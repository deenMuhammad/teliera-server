const Admin = require('./../../nodes/admin')

const loginWithPassword = async (obj, {username, password}, ctx)=>{
    const token = await Admin.LogInAdmin(username, password);
    ctx.headers.accessToken = token;
    if(token){
        ctx.headers.accessToken = token;
    }
    return token;
}

module.exports ={
    loginWithPassword
}