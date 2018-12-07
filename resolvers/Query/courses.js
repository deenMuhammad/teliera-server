const fetch = require('node-fetch')

const courses = (obj, { enrolled }, { headers }) => {
    if (enrolled) {
        return fetch('http://courses.node.internal.getbouncecode.com:3000/enrolled', { method: 'GET', headers })
            .then(data => data.json())
            .then(json => json.data);
    } else {
        return fetch('http://courses.node.internal.getbouncecode.com:3000/course', { method: 'GET', headers })
            .then(data => data.json())
            .then(json => json.data);
    }
}

module.exports = { courses }