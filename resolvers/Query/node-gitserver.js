const repoNode = require('../../nodes/repo');

const repoUri = async (obj, { repoId }, { headers }) => {
  const {repoUri} = await repoNode.getRepoUri({ repoId }, { headers });
  return repoUri;
}

const repoUsers = async (obj, { repoId }, { headers }) => {
  const {repoUserList} = await repoNode.getRepoUsers({ repoId }, { headers });
  return repoUserList;
}

module.exports = {
  repoUri,
  repoUsers
}