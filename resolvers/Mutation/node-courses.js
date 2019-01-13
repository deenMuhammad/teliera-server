
const courseNode = require('../../nodes/course');
const contentNode = require('../../nodes/content');
const containerNode = require('../../nodes/container');

const enroll = async (obj, { courseId }, { headers }) => {
  const {enroll} = await courseNode.enroll({courseId}, {headers});
  return enroll;
}

const testContentWorkbench = async (obj, { contentId, repoId }, { headers }) => {
  const {content} = await contentNode.getContent({contentId, repoId}, {headers});
  if ( ! content.testgit || ! content.test) return null;

  const { execOutput, execInspect } = await contentNode.testRepo({content, repoId}, {headers});
  return { output: execOutput, exec: execInspect };
}

// TODO: repoId
const resetContentWorkbenchSource = async (obj, { contentId }, { headers }) => {
  const {isSuccess} = await contentNode.resetRepo({contentId}, {headers});
  return isSuccess;
}

const resetContentWorkbenchContainer = async (obj, { contentId, containerId }, { headers }) => {
  const {isSuccess} = await containerNode.stopContainer({containerId}, {headers});

  const {repoId} = await contentNode.createOrGetRepo({contentId}, {headers});
  const {container} = await contentNode.createOrGetContainer({contentId}, {headers});
  const containerName = container && container.Name ? container.Name.replace('/', '') : null;

  return {
    socketId: containerName,
    repoId,
    container
  }
}

module.exports = {
  enroll,
  testContentWorkbench,
  resetContentWorkbenchSource,
  resetContentWorkbenchContainer
}