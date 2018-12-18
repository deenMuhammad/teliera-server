const repoNode = require('../../nodes/repo');

const addUserPermission = async (obj, { repoId, emailOrTokenId, permission }, { headers }) => {
  const {repoUser} = await repoNode.addUserPermission({ repoId, emailOrTokenId, permission }, { headers });
  return repoUser;
}

const updateUserPermission = async (obj, { repoId, username, permission }, { headers }) => {
  const {repoUser} = await repoNode.updateUserPermission({ repoId, username, permission }, { headers });
  return repoUser;
}

const removeUserPermission = async (obj, { repoId, username }, { headers }) => {
  const {isSuccess} = await repoNode.removeUserPermission({ repoId, username }, { headers });
  return isSuccess;
}

module.exports = {
  addUserPermission,
  updateUserPermission,
  removeUserPermission
}