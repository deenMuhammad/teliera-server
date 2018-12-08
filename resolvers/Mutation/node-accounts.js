const fetch = require('node-fetch')

const changePassword = (obj, { currentPassword, newPassword }, { headers }) => {
    return fetch(`http://accounts.node.internal.getbouncecode.com:3000/user/change_password`, {
        method: 'PUT',
        headers,
        body: JSON.stringify({
            current_password: currentPassword,
            password: newPassword
        })
    })
    .then(data => data.json())
    .then(json => !!json.success);
}

const emailVerify = (obj, { email, code }, { headers }) => {
  return fetch(`http://accounts.node.internal.getbouncecode.com:3000/email_verify?email=${email}&code=${code}`, { method: 'GET', headers })
      .then(data => data.json())
      .then(json => !!json.success);
}

const refreshToken = (obj, { refreshToken }, { headers }) => {
  return fetch(`http://accounts.node.internal.getbouncecode.com:3000/token`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
          grant_type: 'refresh_token',
          refresh_token: refreshToken
      })
  })
  .then(data => data.json())
  .then(json => json.token);
}

const resendEmail = (obj, { email }, { headers }) => {
  return fetch(`http://accounts.node.internal.getbouncecode.com:3000/resend_email`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
          email: email
      })
  })
  .then(data => data.json())
  .then(json => !!json.success);
}

const signup = (obj, { email, password }, { headers }) => {
  return fetch(`http://accounts.node.internal.getbouncecode.com:3000/signup`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
          email,
          password
      })
  })
  .then(data => data.json())
  .then(json => !!json.success);
}

const tokenFacebook = (obj, { accessToken }, { headers }) => {
  return fetch(`http://accounts.node.internal.getbouncecode.com:3000/token/oauth/facebook?access_token=${accessToken}`, {
      method: 'GET',
      headers
  })
  .then(data => data.json())
  .then(json => json.token);
}

const tokenGithub = (obj, { code }, { headers }) => {
  return fetch(`http://accounts.node.internal.getbouncecode.com:3000/token/oauth/github?code=${code}`, {
      method: 'GET',
      headers
  })
  .then(data => data.json())
  .then(json => json.token);
}

const tokenGoogle = (obj, { accessToken }, { headers }) => {
  return fetch(`http://accounts.node.internal.getbouncecode.com:3000/token/oauth/google?access_token=${accessToken}`, {
      method: 'GET',
      headers
  })
  .then(data => data.json())
  .then(json => json.token);
}

const tokenPassword = (obj, { email, password }, { headers }) => {
  return fetch(`http://accounts.node.internal.getbouncecode.com:3000/token`, {
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