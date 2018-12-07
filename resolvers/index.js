const { courses } = require('./Query/courses');
const { course } = require('./Query/course');
const { section } = require('./Query/section');
const { enroll } = require('./Mutation/enroll');

module.exports = {
  Query: {
    courses,
    course,
    section
  },
  Mutation: {
    enroll
  }
}