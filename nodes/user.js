const User = require('./../db/models/user');
const jwt = require('jsonwebtoken');
const secret = process.env.SECRET || 'secret';
const passwordCrypto = require('./../services/passwordCrypto')

const CreateTokenwithPassword = async (username, password)=>{ //I have called this function CreateTokenwithPassword because later we might add login with facebook, ok.ru or any other social networks
    const user = await User.findOne({username: username}).exec();
    if(!user){
        throw new Error("userNotFound");
    }
    if(user.password === passwordCrypto(password)){
        //time to make access token 
        const expiresIn = 7776000;
        const accessToken = jwt.sign({
            user_id: user._id,
        }, secret, {expiresIn: expiresIn}); //made token
        return accessToken;
    }
    else{
        throw new Error("passwordIncorrect");
    }
}
const verifyUser = async (token)=>{    //This is not a resolver function. This is helper function
    var res = await jwt.verify(token, secret);
    if(!res){
        return false;
    }
    return res;
}

const SignUpWithPassword = async (username, name, password, address, phone)=>{
    const userName = await User.findOne({username: username}).exec();
    if(userName){
        throw new Error(`usernameTaken`);
    }
    const user = await new User({
        username: username,
        name: name,
        password: passwordCrypto(password),
        address: address,
        phone: phone,
        sign_up_date: Date.now()
    }).save();
    if(!user){
        throw new Error("signUpFailed");
    }
    //time to make access token 
    const expiresIn = 7776000;
    const accessToken = jwt.sign({
        user_id: user._id,
    }, secret, {expiresIn: expiresIn}); //made token
    return accessToken;
}

module.exports = {
    CreateTokenwithPassword,
    verifyUser,
    SignUpWithPassword
}