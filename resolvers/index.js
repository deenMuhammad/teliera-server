const {
  courses,
  course,
  section
} = require('./Query/node-courses');

const {
  user
} = require('./Query/node-accounts');

const {
  repoUri,
  repoUsers
} = require('./Query/node-gitserver');

const {
  enroll
} = require('./Mutation/node-courses');

const {
  changePassword,
  emailVerify,
  refreshToken,
  resendEmail,
  signup,
  tokenFacebook,
  tokenGithub,
  tokenGoogle,
  tokenPassword
} = require('./Mutation/node-accounts');

const {
  startContainer,
  stopContainer,
  testContainer,
  runExec,
  killExec,
  waitExec
} = require('./Mutation/node-instance');

const {
  addUserPermission,
  updateUserPermission,
  removeUserPermission,
} = require('./Mutation/node-gitserver');


module.exports = {
  Query: {
    // node-courses
    courses,
    course,
    section,

    // node-accounts
    user,

    // node-gitserver
    repoUri,
    repoUsers,
  },
  Mutation: {
    // node-courses
    enroll,

    // node-accounts
    changePassword,
    emailVerify,
    refreshToken,
    resendEmail,
    signup,
    tokenFacebook,
    tokenGithub,
    tokenGoogle,
    tokenPassword,

    // node-gitserver
    addUserPermission,
    updateUserPermission,
    removeUserPermission,

    // node-instance
    commitContainerSource,
    pullContainerSource,
    runExec,
    killExec,
    waitExec
  }
}