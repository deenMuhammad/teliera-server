const accountNode = require('../../nodes/account');

const changePassword = async (obj, { currentPassword, newPassword }, { headers }) => {
  const {isSuccess} = await accountNode.changePassword({ currentPassword, newPassword }, { headers });
  return isSuccess;
}

const emailVerify = async (obj, { email, code }, { headers }) => {
  const {isSuccess} = await accountNode.emailVerify({ email, code }, { headers });
  return isSuccess;
}

const refreshToken = async (obj, { refreshToken }, { headers }) => {
  const {token} = await accountNode.refreshToken({ refreshToken }, { headers });
  return token;
}

const resendEmail = async (obj, { email }, { headers }) => {
  const {isSuccess} = await accountNode.resendEmail({ email }, { headers });
  return isSuccess;
}

const signup = async (obj, { email, password }, { headers }) => {
  const {isSuccess} = await accountNode.signup({ email, password }, { headers });
  return isSuccess;
}

const tokenFacebook = async (obj, { accessToken }, { headers }) => {
  const {token} = await accountNode.tokenFacebook({ accessToken }, { headers });
  return token;
}

const tokenGithub = async (obj, { code }, { headers }) => {
  const {token} = await accountNode.tokenGithub({ code }, { headers });
  return token;
}

const tokenGoogle = async (obj, { accessToken }, { headers }) => {
  const {token} = await accountNode.tokenGoogle({ accessToken }, { headers });
  return token;
}

const tokenPassword = async (obj, { email, password }, { headers }) => {
  const {token} = await accountNode.tokenPassword({ email, password }, { headers });
  return token;
}

module.exports = {
  changePassword,
  emailVerify,
  refreshToken,
  resendEmail,
  signup,
  tokenFacebook,
  tokenGithub,
  tokenGoogle,
  tokenPassword
}