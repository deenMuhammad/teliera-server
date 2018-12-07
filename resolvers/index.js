const {
  courses,
  course,
  section
} = require('./Query/node-courses');

const {
  user
} = require('./Query/node-accounts');

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

module.exports = {
  Query: {
    // node-courses
    courses,
    course,
    section,

    // node-accounts
    user
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

    // node-instance
    startContainer,
    stopContainer,
    testContainer,
    runExec,
    killExec,
    waitExec
  }
}