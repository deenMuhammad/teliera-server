const fetch = require('node-fetch')

const enroll = (obj, { id }, { headers }) => {
    return fetch(`http://courses.node.internal.getbouncecode.com:3000/course/${id}/enroll`, { method: 'POST', headers })
        .then(data => data.json())
        .then(json => json.data);
}

module.exports = { enroll }