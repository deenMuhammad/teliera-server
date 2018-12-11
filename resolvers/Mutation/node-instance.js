const fetch = require('node-fetch')

const commitContainerSource = (obj, { containerId, force }, { headers }) => {
  return fetch(`http://instance.node.internal.getbouncecode.com:3000/container/${containerId}/commit?force=${force}`, {
    method: 'POST',
    headers
  })
  .then(data => data.json())
  .then(json => !!json.success);
}

const pullContainerSource = (obj, { containerId }, { headers }) => {
  return fetch(`http://instance.node.internal.getbouncecode.com:3000/container/${containerId}/pull?force=${force}`, {
    method: 'POST',
    headers
  })
  .then(data => data.json())
  .then(json => !!json.success);
}

const stopContainer = (obj, { containerId }, { headers }) => {
  return fetch(`http://instance.node.internal.getbouncecode.com:3000/container/${containerId}`, {
    method: 'DELETE',
    headers
  })
  .then(data => data.json())
  .then(json => !!json.success);
}

const runExec = (obj, { containerId, cmd }, { headers }) => {
  return fetch(`http://instance.node.internal.getbouncecode.com:3000/container/${containerId}/exec`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      cmd
    })
  })
  .then(data => data.json());
}

const waitExec = (obj, { containerId, cmd }, { headers }) => {
  return fetch(`http://instance.node.internal.getbouncecode.com:3000/container/${containerId}/exec_wait`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      cmd
    })
  })
  .then(data => data.json())
  .then(json => ({...json.insp, Output: json.data}));
}

const killExec = (obj, { execId }, { headers }) => {
  return fetch(`http://instance.node.internal.getbouncecode.com:3000/exec/${execId}`, {
    method: 'DELETE',
    headers
  })
  .then(data => data.json())
  .then(json => !!json.success);
}

module.exports = {
  commitContainerSource,
  pullContainerSource,
  stopContainer,
  runExec,
  killExec,
  waitExec
}