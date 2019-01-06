const repoNode = require('../../nodes/repo');

const getRepoList = async (obj, {}, { headers }) => {
  const {repoList} = await repoNode.getRepoList({}, { headers });
  return repoList;
}

const getRepo = async (obj, { repoId }, { headers }) => {
  const {repo} = await repoNode.getRepo({ repoId }, { headers });
  return repo;
}

const repoUri = async (obj, { repoId }, { headers }) => {
  const {repoUri} = await repoNode.getRepoUri({ repoId }, { headers });
  return repoUri;
}

const repoUsers = async (obj, { repoId }, { headers }) => {
  const {repoUserList} = await repoNode.getRepoUsers({ repoId }, { headers });
  return repoUserList;
}

module.exports = {
  getRepoList,
  getRepo,
  repoUri,
  repoUsers
}