const fetch = require('node-fetch')

const startContainer = (obj, { image, env, git }, { headers }) => {
    return fetch(`http://instance.node.internal.getbouncecode.com:3000/`, {
        method: 'POST',
        headers
    })
    .then(data => data.json());
}

const stopContainer = (obj, { containerId }, { headers }) => {
    return fetch(`http://instance.node.internal.getbouncecode.com:3000/${containerId}`, {
        method: 'DELETE',
        headers
    })
    .then(data => data.json())
    .then(json => !!json.success);
}

const commitContainer = (obj, { containerId }, { headers }) => {
    return fetch(`http://instance.node.internal.getbouncecode.com:3000/${containerId}/commit`, {
        method: 'POST',
        headers
    })
    .then(data => data.json())
    .then(json => !!json.success);
}

const testContainer = (obj, { containerId, workgit, testgit, image, cmd, env }, { headers }) => {
    return fetch(`http://instance.node.internal.getbouncecode.com:3000/${containerId}/test`, {
        method: 'POST',
        headers,
        body: {
            workgit,
            testgit,
            image,
            cmd,
            env
        }
    })
    .then(data => data.json())
    .then(json => json.token);
}

const runExec = (obj, { containerId, cmd }, { headers }) => {
    return fetch(`http://instance.node.internal.getbouncecode.com:3000/${containerId}/exec`, {
        method: 'POST',
        headers,
        body: {
            cmd
        }
    })
    .then(data => data.json());
}

// const killExec = (obj, { execId }, { headers }) => {
//     return fetch(`http://instance.node.internal.getbouncecode.com:3000/token`, {
//         method: 'POST',
//         headers,
//         body: {
//             grant_type: 'password',
//             email,
//             password
//         }
//     })
//     .then(data => data.json())
//     .then(json => json.token);
// }

// const waitExec = (obj, { containerId, cmd, timeout }, { headers }) => {
//     return fetch(`http://instance.node.internal.getbouncecode.com:3000/token`, {
//         method: 'POST',
//         headers,
//         body: {
//             grant_type: 'password',
//             email,
//             password
//         }
//     })
//     .then(data => data.json())
//     .then(json => json.token);
// }

module.exports = {
    startContainer,
    stopContainer,
    commitContainer,
    testContainer,
    runExec,
    killExec,
    waitExec
}