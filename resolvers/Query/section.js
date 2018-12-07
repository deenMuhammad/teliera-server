const fetch = require('node-fetch')

const section = (obj, { sectionId }, { headers }) => {
    return fetch(`http://courses.node.internal.getbouncecode.com:3000/section/${sectionId}`, { method: 'GET', headers })
        .then(data => data.json())
        .then(json => json.data);
}

module.exports = { section }