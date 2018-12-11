const fetch = require('node-fetch')

const enroll = (obj, { courseId }, { headers }) => {
  return fetch(`http://courses.node.internal.getbouncecode.com:3000/course/${courseId}/enroll`, {
    method: 'POST',
    headers
  })
  .then(data => data.json())
  .then(json => json.data);
}

// const startContainer = (obj, { image, env, git }, { headers }) => {
//   return fetch(`http://instance.node.internal.getbouncecode.com:3000/container`, {
//     method: 'POST',
//     headers
//   })
//   .then(data => data.json());
// }

// const stopContainer = (obj, { containerId }, { headers }) => {
//   return fetch(`http://instance.node.internal.getbouncecode.com:3000/container/${containerId}`, {
//     method: 'DELETE',
//     headers
//   })
//   .then(data => data.json())
//   .then(json => !!json.success);
// }

// const testContainer = (obj, { containerId, workgit, testgit, image, cmd, env }, { headers }) => {
//   return fetch(`http://instance.node.internal.getbouncecode.com:3000/container/${containerId}/test`, {
//     method: 'POST',
//     headers,
//     body: JSON.stringify({
//       workgit,
//       testgit,
//       image,
//       cmd,
//       env
//     })
//   })
//   .then(data => data.json())
//   .then(json => ({...json.insp, Output: json.data}));
// }

module.exports = {
  enroll
}