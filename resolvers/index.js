const {
  courses,
  course,
  section
} = require('./Query/node-courses');

const {
  container,
  exec
} = require('./Query/node-instance');

const {
  user
} = require('./Query/node-accounts');

const {
  repoUri,
  repoUsers
} = require('./Query/node-gitserver');

const {
  enroll,
  startContentWorkbench,
  testContentWorkbench,
  resetContentWorkbenchSource,
  resetContentWorkbenchContainer
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
  startWorkbench,
  commitContainerSource,
  pullContainerSource,
  stopContainer,
  runExec,
  killExec,
  waitExec,
  startTheia,
  stopTheia,
  startJupyter,
  stopJupyter,
  startVnc,
  stopVnc
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

    // node-instance
    container,
    exec,

    // node-accounts
    user,

    // node-gitserver
    repoUri,
    repoUsers,
  },
  Mutation: {
    // node-courses
    enroll,
    startContentWorkbench,
    testContentWorkbench,
    resetContentWorkbenchSource,
    resetContentWorkbenchContainer,

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
    startWorkbench,
    commitContainerSource,
    pullContainerSource,
    stopContainer,
    runExec,
    killExec,
    waitExec,

    // editor
    startTheia,
    stopTheia,
    startJupyter,
    stopJupyter,
    startVnc,
    stopVnc
  }
}