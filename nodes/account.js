const fetch = require('node-fetch')

const getUser = async ({}, { headers }) => {
  const user = await fetch(`http://accounts.node.internal.getbouncecode.com:3000/user`, {
    method: 'GET',
    headers
  })
  .then(data => data.json());

  return {user};
}

const changePassword = async ({ currentPassword, newPassword }, { headers }) => {
  const isSuccess = await fetch(`http://accounts.node.internal.getbouncecode.com:3000/user/change_password`, {
    method: 'PUT',
    headers,
    body: JSON.stringify({
      current_password: currentPassword,
      password: newPassword
    })
  })
  .then(data => data.json())
  .then(json => !!json.success);

  return {isSuccess};
}

const emailVerify = async ({ email, code }, { headers }) => {
  const isSuccess = await fetch(`http://accounts.node.internal.getbouncecode.com:3000/email_verify?email=${email}&code=${code}`, {
    method: 'GET',
    headers
  })
  .then(data => data.json())
  .then(json => !!json.success);

  return {isSuccess};
}

const refreshToken = async ({ refreshToken }, { headers }) => {
  const token = await fetch(`http://accounts.node.internal.getbouncecode.com:3000/token`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      grant_type: 'refresh_token',
      refresh_token: refreshToken
    })
  })
  .then(data => data.json())
  .then(json => json.token);

  return {token};
}

const resendEmail = async ({ email }, { headers }) => {
  const isSuccess = await fetch(`http://accounts.node.internal.getbouncecode.com:3000/resend_email`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      email: email
    })
  })
  .then(data => data.json())
  .then(json => !!json.success);

  return {isSuccess};
}

const signup = async ({ email, password }, { headers }) => {
  const isSuccess = await fetch(`http://accounts.node.internal.getbouncecode.com:3000/signup`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      email,
      password
    })
  })
  .then(data => data.json())
  .then(json => !!json.success);

  return {isSuccess};
}

const tokenFacebook = async ({ accessToken }, { headers }) => {
  const token = await fetch(`http://accounts.node.internal.getbouncecode.com:3000/token/oauth/facebook?access_token=${accessToken}`, {
    method: 'GET',
    headers
  })
  .then(data => data.json())
  .then(json => json.token);

  return {token};
}

const tokenGithub = async ({ code }, { headers }) => {
  const token = await fetch(`http://accounts.node.internal.getbouncecode.com:3000/token/oauth/github?code=${code}`, {
    method: 'GET',
    headers
  })
  .then(data => data.json())
  .then(json => json.token);

  return {token};
}

const tokenGoogle = async ({ accessToken }, { headers }) => {
  const token = await fetch(`http://accounts.node.internal.getbouncecode.com:3000/token/oauth/google?access_token=${accessToken}`, {
    method: 'GET',
    headers
  })
  .then(data => data.json())
  .then(json => json.token);

  return {token};
}

const tokenPassword = async ({ email, password }, { headers }) => {
  const token = await fetch(`http://accounts.node.internal.getbouncecode.com:3000/token`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      grant_type: 'password',
      email,
      password
    })
  })
  .then(data => data.json())
  .then(json => json.token);

  return {token};
}

module.exports = {
  getUser,
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