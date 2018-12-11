const fetch = require('node-fetch')

const addUserPermission = (obj, { repoId, emailOrTokenId, permission }, { headers }) => {
  return fetch(`http://gitserver.node.internal.getbouncecode.com/${repoId}/users`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      username: emailOrTokenId,
      permission
    })
  })
  .then(data => data.json());
}

const updateUserPermission = (obj, { repoId, username, permission }, { headers }) => {
  return fetch(`http://gitserver.node.internal.getbouncecode.com/${repoId}/users/${username}`, {
    method: 'PUT',
    headers,
    body: JSON.stringify({
      permission
    })
  })
  .then(data => data.json());
}

const removeUserPermission = (obj, { repoId, username }, { headers }) => {
  return fetch(`http://gitserver.node.internal.getbouncecode.com/${repoId}/users/${username}`, {
    method: 'DELETE',
    headers
  })
  .then(data => data.json());
}

module.exports = {
  addUserPermission,
  updateUserPermission,
  removeUserPermission
}