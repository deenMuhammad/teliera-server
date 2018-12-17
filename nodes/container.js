
const fetch = require('node-fetch');

const getContainer = async ({ containerId }, { headers }) => {
  const containerInspect = await fetch(`http://instance.node.internal.getbouncecode.com:3000/container/${containerId}`, {
    method: 'GET',
    headers
  })
  .then(data => data.json())
  .then(json => json.inspect);

  return {containerInspect};
}

const stopContainer = async ({ containerId }, { headers }) => {
  const isSuccess = await fetch(`http://instance.node.internal.getbouncecode.com:3000/container/${containerId}`, {
    method: 'DELETE',
    headers
  })
  .then(data => data.json())
  .then(json => !!json.success);

  return {isSuccess};
}

const commitContainerSource = async ({ containerId, force }, { headers }) => {
  const isSuccess = await fetch(`http://instance.node.internal.getbouncecode.com:3000/container/${containerId}/commit?force=${force}`, {
    method: 'POST',
    headers
  })
  .then(data => data.json())
  .then(json => !!json.success);
  
  return {isSuccess};
}

const pullContainerSource = async ({ containerId, force }, { headers }) => {
  const isSuccess = await fetch(`http://instance.node.internal.getbouncecode.com:3000/container/${containerId}/pull?force=${force}`, {
    method: 'POST',
    headers
  })
  .then(data => data.json())
  .then(json => !!json.success);

  return {isSuccess};
}

const runExec = async ({ containerId, cmd }, { headers }) => {
  const execInspect = await fetch(`http://instance.node.internal.getbouncecode.com:3000/container/${containerId}/exec`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      cmd
    })
  })
  .then(data => data.json())
  .then(json => json.inspect)

  return {execInspect};
}

const waitExec = async ({ containerId, cmd, timeout }, { headers }) => {
  const {output: execOutput, inspect: execInspect} = await fetch(`http://instance.node.internal.getbouncecode.com:3000/container/${containerId}/exec_wait`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      cmd,
      timeout
    })
  })
  .then(data => data.json())
  .then(json => {
    if (json.error) console.trace(json.error);
    return json;
  })

  return {execOutput, execInspect};
}

module.exports = {
  getContainer,
  commitContainerSource,
  pullContainerSource,
  stopContainer,
  runExec,
  waitExec
}