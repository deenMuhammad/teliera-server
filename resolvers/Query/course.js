const fetch = require('node-fetch')

const course = (obj, { courseId }, { headers }) => {
    return fetch(`http://courses.node.internal.getbouncecode.com:3000/course/${courseId}`, { method: 'GET', headers })
        .then(data => data.json())
        .then(json => json.data);
}

module.exports = { course }