const User = require('./../db/models/user');
const jwt = require('jsonwebtoken');
const secret = process.env.SECRET || 'secret';
const passwordCrypto = require('./../services/passwordCrypto')

const CreateTokenwithPassword = async (username, password)=>{ //I have called this function CreateTokenwithPassword because later we might add login with facebook, ok.ru or any other social networks
    const user = await User.findOne({username: username}).exec();
    if(!user){
        throw new Error("userNotFound");
    }
    if(user.password === passwordCrypto(password)){//actually from front end this should come as encrypted with passwordCrypto()
        //time to make access token 
        const expiresIn = 7776000;
        const accessToken = jwt.sign({
            _id: user._id,
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

const verifyUserSession = async (ctx)=>{  
    var res = await verifyUser(ctx.headers.accessToken);
    if(!res){
        return false
    }
    else{
        return true
    }
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
        _id: user._id,
    }, secret, {expiresIn: expiresIn}); //made token
    return accessToken;
}
const modifyUserAccount = async ({username, name, password, address, phone}, ctx)=>{
    var flag = true;
    if(ctx.headers.accessToken==null){
        throw new Error(`tokenFailed`);
    }
    const user = await verifyUser(ctx.headers.accessToken);
    if(!user){
        throw new Error(`tokenFailed`)
    }
    if(!(username==='')){//user wants to change the username
        const userName = await User.findOne({username: username}).exec();
        if(userName){
            throw new Error(`usernameTaken`);//new username is taken
        }
        if(!(await User.findByIdAndUpdate({_id: user._id}, {$set: {username: username}}).exec())){
            throw new Error(`usernameUpdateFailed`);//new username can not be updated
        }
    }
    if(!(name==='')){//user wants to change name
        if(!(await User.findByIdAndUpdate({_id: user._id}, {$set: {name: name}}).exec())){
            throw new Error(`nameUpdateFailed`);//new username can not be updated
        }
    }
    if(!(password==='')){//user wants to change password
        if(!(await User.findByIdAndUpdate({_id: user._id}, {$set: {password: passwordCrypto(password)}}).exec())){
            throw new Error(`passwordUpdateFailed`);//new username can not be updated
        }
    }
    if(!(address==='')){//user wants to change address
        if(!(await User.findByIdAndUpdate({_id: user._id}, {$set: {address: address}}).exec())){
            throw new Error(`addressUpdateFailed`);//new username can not be updated
        }
    }
    if(!(phone==='')){//user wants to change phone
        if(!(await User.findByIdAndUpdate({_id: user._id}, {$set: {phone: phone}}).exec())){
            throw new Error(`phoneUpdateFailed`);//new username can not be updated
        }
    }
    return flag
}

module.exports = {
    CreateTokenwithPassword,
    verifyUser,
    SignUpWithPassword,
    modifyUserAccount,
    verifyUserSession
}