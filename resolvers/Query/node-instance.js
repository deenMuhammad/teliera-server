const fetch = require('node-fetch')

const exec = (obj, { execId }, { headers }) => {
  return fetch(`http://instance.node.internal.getbouncecode.com:3000/exec/${execId}`, {
    method: 'GET',
    headers
  })
  .then(data => data.json())
  .then(json => json.inspect);
}

const container = (obj, { containerId }, { headers }) => {
  return fetch(`http://instance.node.internal.getbouncecode.com:3000/container/${containerId}`, {
    method: 'GET',
    headers
  })
  .then(data => data.json())
  .then(json => json.inspect);
}

module.exports = {
  exec,
  container
}