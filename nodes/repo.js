const fetch = require('node-fetch')

const getRepoUri = async ({ repoId }, { headers }) => {
  const repoUri = await fetch(`http://gitserver.node.internal.getbouncecode.com/repo/${repoId}/uri`, {
    method: 'GET',
    headers
  })
  .then(data => data.json())
  .then(json => json.uri);

  return {repoUri};
}

const getRepoUsers = async ({ repoId }, { headers }) => {
  const repoUserList = await fetch(`http://gitserver.node.internal.getbouncecode.com/repo/${repoId}/users`, {
    method: 'GET',
    headers
  })
  .then(data => data.json())
  .then(json => json.list);

  return {repoUserList};
}

const addUserPermission = async ({ repoId, emailOrTokenId, permission }, { headers }) => {
  const repoUser = await fetch(`http://gitserver.node.internal.getbouncecode.com/${repoId}/users`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      username: emailOrTokenId,
      permission
    })
  })
  .then(data => data.json());

  return {repoUser};
}

const updateUserPermission = async ({ repoId, username, permission }, { headers }) => {
  const repoUser = await fetch(`http://gitserver.node.internal.getbouncecode.com/${repoId}/users/${username}`, {
    method: 'PUT',
    headers,
    body: JSON.stringify({
      permission
    })
  })
  .then(data => data.json());

  return {repoUser};
}

const removeUserPermission = async ({ repoId, username }, { headers }) => {
  const isSuccess = await fetch(`http://gitserver.node.internal.getbouncecode.com/${repoId}/users/${username}`, {
    method: 'DELETE',
    headers
  })
  .then(data => data.json())
  .then(json => json.success);

  return {isSuccess};
}

module.exports = {
  getRepoUri,
  getRepoUsers,
  addUserPermission,
  updateUserPermission,
  removeUserPermission
}