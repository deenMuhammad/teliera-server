const fetch = require('node-fetch');

const getExec = async ({ execId }, { headers }) => {
  const execInspect = await fetch(`http://instance.node.internal.getbouncecode.com:3000/exec/${execId}`, {
    method: 'GET',
    headers
  })
  .then(data => data.json())
  .then(json => json.inspect);

  return {execInspect};
}

const killExec = async (obj, { execId }, { headers }) => {
  const isSuccess = await fetch(`http://instance.node.internal.getbouncecode.com:3000/exec/${execId}`, {
    method: 'DELETE',
    headers
  })
  .then(data => data.json())
  .then(json => !!json.success);

  return {isSuccess};
}

module.exports = {
  getExec,
  killExec
}