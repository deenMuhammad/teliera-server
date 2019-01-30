const superAdmin = require('./../../nodes/superadmin')

const loginWithPassword = async (obj, {username, password}, ctx)=>{
    const token = await superAdmin.LogInSuperAdmin(username, password);
    ctx.headers.accessToken = token;
    if(token){
        ctx.headers.accessToken = token;
    }
    return token;
}

module.exports ={
    loginWithPassword
}