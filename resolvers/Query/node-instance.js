const execNode = require('../../nodes/exec');
const containerNode = require('../../nodes/container');

const exec = async (obj, { execId }, { headers }) => {
  const {execInspect} = await execNode.getExec({ execId }, { headers });
  return execInspect;
}

const container = async (obj, { containerId }, { headers }) => {
  const {containerInspect} = await containerNode.getContainer({ containerId }, { headers });
  return containerInspect;
}

module.exports = {
  exec,
  container
}