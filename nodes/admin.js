const Admin = require('./../db/models/shop')
const passwordCrypto = require('./../services/passwordCrypto')
const jwt = require('jsonwebtoken')
const secret = process.env.SECRET || 'secret';

const LogInAdmin = async (username, password)=>{//this finction should return token
    const admin = await Admin.findOne({username: username}).exec();
    if(!admin){
        throw new Error("userNotFound");
    }
    if(admin.password === passwordCrypto(password)){//actually from front end this should come as encrypted with passwordCrypto()
        //time to make access token 
        const expiresIn = 7776000;
        const accessToken = jwt.sign({
            _id: admin._id,
        }, secret, {expiresIn: expiresIn}); //made token
        return accessToken;
    }
    else{
        throw new Error("passwordIncorrect");
    }
}

const verifyAdmin = async (token)=>{    //This is not a resolver function. This is helper function
    var res = await jwt.verify(token, secret);
    if(!res){
        return {bool: false, id: ''};
    }
    const admin = await Admin.findById({_id: res._id}).exec();
    var id = res._id;
    if(admin){
        return {bool: true, id: id}
    }
    else{
        return {bool: false, id: ''}
    }
}

module.exports = {
    LogInAdmin,
    verifyAdmin
}