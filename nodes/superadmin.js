const SuperAdmin = require('./../db/models/superadmin')
const passwordCrypto = require('./../services/passwordCrypto')
const jwt = require('jsonwebtoken')
const secret = process.env.SECRET || 'secret';

const LogInSuperAdmin = async (username, password)=>{//this finction should return token
    const superuser = await SuperAdmin.findOne({username: username}).exec();
    if(!superuser){
        throw new Error("userNotFound");
    }
    if(superuser.password === passwordCrypto(password)){//actually from front end this should come as encrypted with passwordCrypto()
        //time to make access token 
        const expiresIn = 7776000;
        const accessToken = jwt.sign({
            superadmin_id: superuser._id,
        }, secret, {expiresIn: expiresIn}); //made token
        return accessToken;
    }
    else{
        throw new Error("passwordIncorrect");
    }
}

const verifySuperAdmin = async (token)=>{    //This is not a resolver function. This is helper function
    var res = await jwt.verify(token, secret);
    if(!res){
        return false;
    }
    const superadmin = await SuperAdmin.findById({_id: res.superadmin_id}).exec();
    if(superadmin){
        return true
    }
    else{
        false
    }
}

module.exports = {
    LogInSuperAdmin,
    verifySuperAdmin
}