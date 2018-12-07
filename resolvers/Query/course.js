const fetch = require('node-fetch')

const course = (obj, { id }, { headers }) => {
    return fetch(`http://courses.node.internal.getbouncecode.com:3000/course/${id}`, { method: 'GET', headers })
        .then(data => data.json())
        .then(json => json.data);
}

module.exports = { course }