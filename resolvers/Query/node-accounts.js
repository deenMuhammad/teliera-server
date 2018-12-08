const fetch = require('node-fetch')

const user = (obj, args, { headers }) => {
    return fetch(`http://accounts.node.internal.getbouncecode.com:3000/user`, {
        method: 'GET',
        headers
    })
    .then(data => data.json())
    .then(json => !!json.success);
}

module.exports = {
  user
}