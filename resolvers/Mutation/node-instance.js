const containerNode = require('../../nodes/container');
const contentNode = require('../../nodes/content');
const execNode = require('../../nodes/exec');

const startContentWorkbench = async (obj, {editor, contentId, startContainer}, {headers}) => {
  const {repoId} = await contentNode.createOrGetRepo({contentId}, {headers});
  const {container} = (startContainer) ? await contentNode.createOrGetContainer({contentId}, {headers}) : {container: null};
  const containerName = container && container.Name ? container.Name.replace('/', '') : null;

  let editorUrl;

  if (editor == 'jupyter') {
    const {output} = await containerNode.startJupyter({containerId: container.Id}, {headers});
    editorUrl = output;
  } else if (editor == 'theia') {
    const {output} = await containerNode.startTheia({containerId: container.Id}, {headers});
    editorUrl = output;
  }

  return {
    socketId: containerName,
    repoId,
    container,
    editorUrl
  }
}

const startPlaygroundWorkbench = async (obj, {editor, repoId: git, image, env}, {headers}) => {
  const {containerInspect} = await containerNode.startContainer({ image, git, env }, { headers });
  const containerName = containerInspect && containerInspect.Name ? containerInspect.Name.replace('/', '') : null;
  
  let editorUrl;

  if (editor == 'jupyter') {
    const {output} = await containerNode.startJupyter({containerId: containerInspect.Id}, {headers});
    editorUrl = output;
  } else if (editor == 'theia') {
    const {output} = await containerNode.startTheia({containerId: containerInspect.Id}, {headers});
    editorUrl = output;
  }

  return {
    socketId: containerName,
    repoId: null,
    container: containerInspect,
    editorUrl
  };
}

const startWorkbench = async (obj, {image, git, env}, {headers}) => {
  const {containerInspect} = await containerNode.startContainer({ image, git, env }, { headers });
  const containerName = containerInspect && containerInspect.Name ? containerInspect.Name.replace('/', '') : null;

  return {
    socketId: containerName,
    repoId: null,
    container: containerInspect
  };
}

const pushContainerSource = async (obj, { containerId, force }, { headers }) => {
  const {isSuccess} = await containerNode.pushContainerSource({ containerId, force }, { headers });
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
  const {output, exec} = await containerNode.startTheia({ containerId }, { headers });
  return {output, exec};
}

const stopTheia = async (obj, { containerId }, { headers }) => {
  const {output, exec} = await containerNode.stopTheia({ containerId }, { headers });
  return {output, exec};
}

const startJupyter = async (obj, { containerId }, { headers }) => {
  const {output, exec} = await containerNode.startJupyter({ containerId }, { headers });
  return {output, exec};
}

const stopJupyter = async (obj, { containerId }, { headers }) => {
  const {output, exec} = await containerNode.stopJupyter({ containerId }, { headers });
  return {output, exec};
}

const startVnc = async (obj, { containerId }, { headers }) => {
  const {output, exec} = await containerNode.startVnc({ containerId }, { headers });
  return {output, exec};
}

const stopVnc = async (obj, { containerId }, { headers }) => {
  const {output, exec} = await containerNode.stopVnc({ containerId }, { headers });
  return {output, exec};
}

module.exports = {
  startContentWorkbench,
  startPlaygroundWorkbench,
  startWorkbench,
  pushContainerSource,
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