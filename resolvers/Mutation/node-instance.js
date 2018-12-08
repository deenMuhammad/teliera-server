const fetch = require('node-fetch')

const startContainer = (obj, { image, env, git }, { headers }) => {
  return fetch(`http://instance.node.internal.getbouncecode.com:3000/container`, {
    method: 'POST',
    headers
  })
  .then(data => data.json());
}

const stopContainer = (obj, { containerId }, { headers }) => {
  return fetch(`http://instance.node.internal.getbouncecode.com:3000/container/${containerId}`, {
    method: 'DELETE',
    headers
  })
  .then(data => data.json())
  .then(json => !!json.success);
}

const commitContainer = (obj, { containerId }, { headers }) => {
  return fetch(`http://instance.node.internal.getbouncecode.com:3000/container/${containerId}/commit`, {
    method: 'POST',
    headers
  })
  .then(data => data.json())
  .then(json => !!json.success);
}

const testContainer = (obj, { containerId, workgit, testgit, image, cmd, env }, { headers }) => {
  return fetch(`http://instance.node.internal.getbouncecode.com:3000/container/${containerId}/test`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      workgit,
      testgit,
      image,
      cmd,
      env
    })
  })
  .then(data => data.json())
  .then(json => ({...json.insp, Output: json.data}));
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
  startContainer,
  stopContainer,
  commitContainer,
  testContainer,
  runExec,
  killExec,
  waitExec
}