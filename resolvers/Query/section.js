const fetch = require('node-fetch')

const section = (obj, { id }, { headers }) => {
    return fetch(`http://courses.node.internal.getbouncecode.com:3000/section/${id}`, { method: 'GET', headers })
        .then(data => data.json())
        .then(json => json.data);
}

module.exports = { section }