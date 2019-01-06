const GraphQLJSON = require('graphql-type-json')

const courseQuery = require('./Query/node-courses');
const instanceQuery = require('./Query/node-instance');
const accountQuery = require('./Query/node-accounts');
const gitserverQuery = require('./Query/node-gitserver');
const billingQuery = require('./Query/node-billing');

const courseMutation = require('./Mutation/node-courses');
const accountMutation = require('./Mutation/node-accounts');
const gitserverMutation = require('./Mutation/node-gitserver');
const billingMutation = require('./Mutation/node-billing');
const mailchimpMutation = require('./Mutation/mailchimp');
const instanceMutation = require('./Mutation/node-instance');

module.exports = {
  JSON: GraphQLJSON,
  Query: {
    // node-courses
    getCourseList: courseQuery.courses,
    getCourse: courseQuery.course,
    getSection: courseQuery.section,
    courses: courseQuery.courses, // @Deprecated
    course: courseQuery.course, // @Deprecated
    section: courseQuery.section, // @Deprecated

    // node-instance
    getContainer: instanceQuery.container,
    getExec: instanceQuery.exec,
    startContentWorkbench: courseMutation.startContentWorkbench,
    startPlaygroundWorkbench: instanceQuery.startPlaygroundWorkbench,
    waitExec: instanceMutation.waitExec,
    container: instanceQuery.container, // @Deprecated
    exec: instanceQuery.exec, // @Deprecated

    // node-accounts
    getUser: accountQuery.user,
    user: accountQuery.user, // @Deprecated

    // node-gitserver
    getRepoList: gitserverQuery.getRepoList,
    getRepo: gitserverQuery.getRepo,
    getRepoMemberList: gitserverQuery.repoUsers,
    repoUri: gitserverQuery.repoUri, // @Deprecated
    repoUsers: gitserverQuery.repoUsers, // @Deprecated

    // node-billing
    getCreditCard: billingQuery.getCreditCard,
    getBalance: billingQuery.getBalance,
    getBalanceHistory: billingQuery.getBalanceHistory,
    getSubscription: billingQuery.getSubscription
  },
  Mutation: {
    signupMailchimp: mailchimpMutation.signupMailchimp,

    // node-courses
    enroll: courseMutation.enroll,
    startContentWorkbench: courseMutation.startContentWorkbench,
    testContentWorkbench: courseMutation.testContentWorkbench,
    resetContentWorkbenchSource: courseMutation.resetContentWorkbenchSource,
    resetContentWorkbenchContainer: courseMutation.resetContentWorkbenchContainer,

    // node-accounts
    changePassword: accountMutation.changePassword,
    emailVerify: accountMutation.emailVerify,
    refreshToken: accountMutation.refreshToken,
    resendEmail: accountMutation.resendEmail,
    signup: accountMutation.signup,
    tokenFacebook: accountMutation.tokenFacebook,
    tokenGithub: accountMutation.tokenGithub,
    tokenGoogle: accountMutation.tokenGoogle,
    tokenPassword: accountMutation.tokenPassword,

    // node-gitserver
    createRepo: gitserverMutation.createRepo,
    deleteRepo: gitserverMutation.deleteRepo,
    addUserPermission: gitserverMutation.addUserPermission,
    updateUserPermission: gitserverMutation.updateUserPermission,
    removeUserPermission: gitserverMutation.removeUserPermission,

    // node-instance
    startWorkbench: instanceMutation.startWorkbench,
    commitContainerSource: instanceMutation.commitContainerSource,
    pullContainerSource: instanceMutation.pullContainerSource,
    stopContainer: instanceMutation.stopContainer,
    runExec: instanceMutation.runExec,
    killExec: instanceMutation.killExec,
    waitExec: instanceMutation.waitExec,

    // editor
    startTheia: instanceMutation.startTheia,
    stopTheia: instanceMutation.stopTheia,
    startJupyter: instanceMutation.startJupyter,
    stopJupyter: instanceMutation.stopJupyter,
    startVnc: instanceMutation.startVnc,
    stopVnc: instanceMutation.stopVnc,

    // node-billing
    submitCreditCard: billingMutation.submitCreditCard,
    deleteCreditCard: billingMutation.deleteCreditCard,
    changeSubscription: billingMutation.changeSubscription
  }
}