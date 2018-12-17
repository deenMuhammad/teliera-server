const containerNode = require('../../nodes/container');
const execNode = require('../../nodes/exec');

const commitContainerSource = async (obj, { containerId, force }, { headers }) => {
  const {isSuccess} = await containerNode.commitContainerSource({ containerId, force }, { headers });
  return isSuccess;
}

const pullContainerSource = async (obj, { containerId, force }, { headers }) => {
  const {isSuccess} = await containerNode.pullContainerSource({ containerId, force }, { headers });
  return isSuccess;
}

const stopContainer = async (obj, { containerId }, { headers }) => {
  const {isSuccess} = await containerNode.stopContainer({ containerId }, { headers });
  return isSuccess;
}

const runExec = async (obj, { containerId, cmd }, { headers }) => {
  const {execInspect} = await containerNode.runExec({ containerId, cmd }, { headers });
  return execInspect;
}

const waitExec = async (obj, { containerId, cmd, timeout, port }, { headers }) => {
  const {execOutput, execInspect} = await containerNode.waitExec({ containerId, cmd, timeout, port }, { headers });
  return {output: execOutput, exec: execInspect};
}

const killExec = async (obj, { execId }, { headers }) => {
  const {isSuccess} = await execNode.killExec({ execId }, { headers });
  return isSuccess;
}

const startTheia = async (obj, { containerId }, { headers }) => {
  const port = 1051;
  const runCmd = ['/bin/bash', '-c', `bouncecode theia start --port ${port}`];
  const waitCmd = ['/bin/bash', '-c', `bouncecode wait --port ${port}`];
  const {execInspect} = await containerNode.runExec({ containerId, cmd: runCmd }, { headers });
  const {execOutput} = await containerNode.waitExec({ containerId, cmd: waitCmd }, { headers });
  return {output: execOutput, exec: execInspect};
}

const stopTheia = async (obj, { containerId }, { headers }) => {
  const port = 1051;
  const cmd = ['/bin/bash', '-c', `bouncecode theia stop --port ${port}`];
  const {execOutput, execInspect} = await containerNode.waitExec({ containerId, cmd }, { headers });
  return {output: execOutput, exec: execInspect};
}

const startJupyter = async (obj, { containerId }, { headers }) => {
  const port = 1052;
  const runCmd = ['/bin/bash', '-c', `bouncecode jupyter start --port ${port}`];
  const waitCmd = ['/bin/bash', '-c', `bouncecode wait --port ${port}`];
  const {execInspect} = await containerNode.runExec({ containerId, cmd: runCmd }, { headers });
  const {execOutput} = await containerNode.waitExec({ containerId, cmd: waitCmd }, { headers });
  return {output: execOutput, exec: execInspect};
}

const stopJupyter = async (obj, { containerId }, { headers }) => {
  const port = 1052;
  const cmd = ['/bin/bash', '-c', `bouncecode jupyter stop --port ${port}`];
  const {execOutput, execInspect} = await containerNode.waitExec({ containerId, cmd }, { headers });
  return {output: execOutput, exec: execInspect};
}

const startVnc = async (obj, { containerId }, { headers }) => {
  const port = 1071;
  const vncPort = 5901;
  const runCmd = ['/bin/bash', '-c', `bouncecode vnc start --port ${port} --vnc-port ${vncPort}`];
  const waitCmd = ['/bin/bash', '-c', `bouncecode wait --port ${port}`];
  const {execInspect} = await containerNode.runExec({ containerId, cmd: runCmd }, { headers });
  const {execOutput} = await containerNode.waitExec({ containerId, cmd: waitCmd }, { headers });
  return {output: execOutput, exec: execInspect};
}

const stopVnc = async (obj, { containerId }, { headers }) => {
  const port = 1071;
  const vncPort = 5901;
  const cmd = ['/bin/bash', '-c', `bouncecode vnc stop --port ${port} --vnc-port ${vncPort}`];
  const {execOutput, execInspect} = await containerNode.waitExec({ containerId, cmd }, { headers });
  return {output: execOutput, exec: execInspect};
}

module.exports = {
  commitContainerSource,
  pullContainerSource,
  stopContainer,
  runExec,
  waitExec,
  killExec,
  startTheia,
  stopTheia,
  startJupyter,
  stopJupyter,
  startVnc,
  stopVnc
}