const { courses, course, section } = require('./Query/node-courses');
const { startPlaygroundWorkbench, container, exec } = require('./Query/node-instance');
const { user } = require('./Query/node-accounts');
const { getRepoList, repoUri, repoUsers } = require('./Query/node-gitserver');
const { getCreditCard, getBalance, getBalanceHistory, getSubscription } = require('./Query/node-billing');

const {
  enroll, startContentWorkbench, testContentWorkbench,
  resetContentWorkbenchSource, resetContentWorkbenchContainer
} = require('./Mutation/node-courses');
const {
  changePassword, emailVerify, refreshToken, resendEmail,
  signup, tokenFacebook, tokenGithub, tokenGoogle, tokenPassword
} = require('./Mutation/node-accounts');
const {
  startWorkbench, commitContainerSource, pullContainerSource,
  stopContainer, runExec, killExec, waitExec, startTheia,
  stopTheia, startJupyter, stopJupyter, startVnc, stopVnc
} = require('./Mutation/node-instance');
const {
  createRepo, deleteRepo, addUserPermission,
  updateUserPermission, removeUserPermission,
} = require('./Mutation/node-gitserver');
const {
  submitCreditCard, deleteCreditCard, changeSubscription
} = require('./Mutation/node-billing');


module.exports = {
  Query: {
    // node-courses
    courses,
    course,
    section,

    // node-instance
    startContentWorkbench,
    startPlaygroundWorkbench,
    waitExec,
    container,
    exec,

    // node-accounts
    user,

    // node-gitserver
    getRepoList,
    repoUri,
    repoUsers,

    // node-billing
    getCreditCard,
    getBalance,
    getBalanceHistory,
    getSubscription
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
    createRepo,
    deleteRepo,
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
    stopVnc,

    // node-billing
    submitCreditCard,
    deleteCreditCard,
    changeSubscription
  }
}