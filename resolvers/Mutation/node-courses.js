const fetch = require('node-fetch')

const enroll = (obj, { courseId }, { headers }) => {
  return fetch(`http://courses.node.internal.getbouncecode.com:3000/course/${courseId}/enroll`, {
    method: 'POST',
    headers
  })
  .then(data => data.json())
  .then(json => json.data);
}

module.exports = {
  enroll
}