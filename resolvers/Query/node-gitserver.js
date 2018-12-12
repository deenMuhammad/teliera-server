const fetch = require('node-fetch')

const repoUri = (obj, { repoId }, { headers }) => {
  return fetch(`http://gitserver.node.internal.getbouncecode.com/repo/${repoId}/uri`, {
    method: 'GET',
    headers
  })
  .then(data => data.json())
  .then(json => json.list);
}

const repoUsers = (obj, { repoId }, { headers }) => {
  return fetch(`http://gitserver.node.internal.getbouncecode.com/repo/${repoId}/users`, {
    method: 'GET',
    headers
  })
  .then(data => data.json())
  .then(json => json.list);
}

module.exports = {
  repoUri,
  repoUsers
}