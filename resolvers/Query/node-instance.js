const execNode = require('../../nodes/exec');
const containerNode = require('../../nodes/container');
const contentNode = require('../../nodes/content');

const startContentWorkbench = async (obj, {editor, contentId}, {}) => {
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

const exec = async (obj, { execId }, { headers }) => {
  const {execInspect} = await execNode.getExec({ execId }, { headers });
  return execInspect;
}

const container = async (obj, { containerId }, { headers }) => {
  const {containerInspect} = await containerNode.getContainer({ containerId }, { headers });
  return containerInspect;
}

module.exports = {
  startContentWorkbench,
  startPlaygroundWorkbench,
  exec,
  container
}