const fetch = require('node-fetch');

const getContent = async ({contentId}, {headers}) => {
  const content = await fetch(`http://courses.node.internal.getbouncecode.com:3000/content/${contentId}`, {
    method: 'GET',
    headers
  })
  .then(data => data.json())
  .then(json => json.data)

  return {content};
}

const createOrGetContainer = async ({contentId}, {headers}) => {
  const container = await fetch(`http://courses.node.internal.getbouncecode.com:3000/content/${contentId}/container`, {
    method: 'POST',
    headers
  })
  .then(data => data.json())
  .then(json => json.container)

  return {container};
}

const createOrGetRepo = async ({contentId}, {headers}) => {
  const repoId = await fetch(`http://courses.node.internal.getbouncecode.com:3000/content/${contentId}/git`, {
    method: 'POST',
    headers
  })
  .then(data => data.json())
  .then(json => json.repoId)

  return {repoId};
}

const testRepo = async ({content, repoId}, {headers}) => {
  const { output: execOutput, inspect: execInspect } = await fetch(`http://instance.node.internal.getbouncecode.com:3000/test`, {
    method: 'POST',
    headers: {
      ...headers,
      'X-Internal': 'graphql.node.internal.getbouncecode.com'
    },
    body: JSON.stringify({
      workgit: repoId,
      testgit: content.testgit,
      image: content.image,
      cmd: Array.isArray(content.test) ? content.test : [content.test],
      callbackContentId: contentId
    })
  })
  .then(data => data.json());

  return { execOutput, execInspect };
}

const resetRepo = async ({contentId}, {headers}) => {
  const isSuccess = await fetch(`http://courses.node.internal.getbouncecode.com:3000/content/${contentId}/git/reset`, {
    method: 'POST',
    headers
  })
  .then(data => data.json())
  .then(json => json.success)

  return {isSuccess};
}

module.exports = {
  getContent,
  createOrGetContainer,
  createOrGetRepo,
  testRepo,
  resetRepo
}