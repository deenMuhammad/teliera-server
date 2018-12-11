const fetch = require('node-fetch')

const enroll = (obj, { courseId }, { headers }) => {
  return fetch(`http://courses.node.internal.getbouncecode.com:3000/course/${courseId}/enroll`, {
    method: 'POST',
    headers
  })
  .then(data => data.json())
  .then(json => json.data);
}

const startContentWorkbench = async (obj, { contentId, startContainer }, { headers }) => {
  const { content, repoId, container } = await fetch(`http://instance.node.internal.getbouncecode.com:3000/content/${contentId}/start?start_container=${startContainer}`, {
    method: 'POST',
    headers
  })
  .then(data => data.json())

  return {
    socketId: container.Name,
    repoId: repoId,
    container: container
  }
}

const testContentWorkbench = async (obj, { contentId, repoId }, { headers }) => {
  const content = await fetch(`http://instance.node.internal.getbouncecode.com:3000/content/${contentId}`, {
    method: 'GET',
    headers
  })
  .then(data => data.json())
  .then(json => json.data)

  const exec = await fetch(`http://instance.node.internal.getbouncecode.com:3000/container/test`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      workgit: repoId,
      testgit: content.testgit,
      image: content.image,
      cmd: content.test,
      callbackContentId: contentId
    })
  })
  .then(data => data.json())
  .then(json => ({...json.insp, Output: json.data}));

  return exec;
}

// TODO: repoId
const resetContentWorkbench = async (obj, { contentId }, { headers }) => {
  const success = await fetch(`http://instance.node.internal.getbouncecode.com:3000/content/${contentId}/git-reset`, {
    method: 'GET',
    headers
  })
  .then(data => data.json())
  .then(json => json.success)

  return success;
}

const resetContentWorkbenchContainer = async (obj, { contentId, containerId }, { headers }) => {
  await fetch(`http://instance.node.internal.getbouncecode.com:3000/container/${containerId}`, {
    method: 'DELETE',
    headers
  })
  .then(data => data.json());

  return await startContentWorkbench(obj, { contentId, startContainer: true }, { headers });
}

module.exports = {
  enroll,
  startContentWorkbench,
  testContentWorkbench,
  resetContentWorkbench,
  resetContentWorkbenchContainer
};