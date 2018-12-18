
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

const startContainer = async ({ image, git, env }, { headers }) => {
  const containerInspect = await fetch(`http://instance.node.internal.getbouncecode.com:3000/container`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      image,
      env,
      git
    })
  })
  .then(data => data.json())
  .then(json => json)

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

const startTheia = async ({ containerId }, { headers }) => {
  const port = 1051;
  const runCmd = ['/bin/bash', '-c', `bouncecode theia start --port ${port}`];
  const waitCmd = ['/bin/bash', '-c', `bouncecode wait --port ${port}`];
  const endpointCmd = ['/bin/bash', '-c', `echo http://${port}.$DOMAIN`];
  const {execInspect} = await runExec({ containerId, cmd: runCmd }, { headers });
  await waitExec({ containerId, cmd: waitCmd }, { headers });
  const {execOutput} = await waitExec({ containerId, cmd: endpointCmd }, { headers });
  return {output: execOutput ? execOutput.trim() : execOutput, exec: execInspect};
}

const stopTheia = async ({ containerId }, { headers }) => {
  const port = 1051;
  const cmd = ['/bin/bash', '-c', `bouncecode theia stop --port ${port}`];
  const {execOutput, execInspect} = await waitExec({ containerId, cmd }, { headers });
  return {output: execOutput, exec: execInspect};
}

const startJupyter = async ({ containerId }, { headers }) => {
  const port = 1052;
  const runCmd = ['/bin/bash', '-c', `bouncecode jupyter start --port ${port}`];
  const waitCmd = ['/bin/bash', '-c', `bouncecode wait --port ${port}`];
  const endpointCmd = ['/bin/bash', '-c', `echo http://${port}.$DOMAIN`];
  const {execInspect} = await runExec({ containerId, cmd: runCmd }, { headers });
  await waitExec({ containerId, cmd: waitCmd }, { headers });
  const {execOutput} = await waitExec({ containerId, cmd: endpointCmd }, { headers });
  return {output: execOutput ? execOutput.trim() : execOutput, exec: execInspect};
}

const stopJupyter = async ({ containerId }, { headers }) => {
  const port = 1052;
  const cmd = ['/bin/bash', '-c', `bouncecode jupyter stop --port ${port}`];
  const {execOutput, execInspect} = await waitExec({ containerId, cmd }, { headers });
  return {output: execOutput, exec: execInspect};
}

const startVnc = async ({ containerId }, { headers }) => {
  const port = 1071;
  const vncPort = 5901;
  const runCmd = ['/bin/bash', '-c', `bouncecode vnc start --port ${port} --vnc-port ${vncPort}`];
  const waitCmd = ['/bin/bash', '-c', `bouncecode wait --port ${port}`];
  const endpointCmd = ['/bin/bash', '-c', `echo http://${port}.$DOMAIN/vnc_blank.html`];
  const {execInspect} = await runExec({ containerId, cmd: runCmd }, { headers });
  await waitExec({ containerId, cmd: waitCmd }, { headers });
  const {execOutput} = await waitExec({ containerId, cmd: endpointCmd }, { headers });
  return {output: execOutput ? execOutput.trim() : execOutput, exec: execInspect};
}

const stopVnc = async ({ containerId }, { headers }) => {
  const port = 1071;
  const vncPort = 5901;
  const cmd = ['/bin/bash', '-c', `bouncecode vnc stop --port ${port} --vnc-port ${vncPort}`];
  const {execOutput, execInspect} = await waitExec({ containerId, cmd }, { headers });
  return {output: execOutput, exec: execInspect};
}

module.exports = {
  startContainer,
  getContainer,
  commitContainerSource,
  pullContainerSource,
  stopContainer,
  runExec,
  waitExec,
  startTheia,
  stopTheia,
  startJupyter,
  stopJupyter,
  startVnc,
  stopVnc
}