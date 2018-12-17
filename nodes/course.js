const fetch = require('node-fetch');

const getCourse = async ({ courseId }, { headers }) => {
  const course = fetch(`http://courses.node.internal.getbouncecode.com:3000/course/${courseId}`, {
    method: 'GET',
    headers
  })
  .then(data => data.json())
  .then(json => json.data);

  return {course};
}

const getCourseList = async ({}, { headers }) => {
  const courseList = await fetch('http://courses.node.internal.getbouncecode.com:3000/course', {
    method: 'GET',
    headers
  })
  .then(data => data.json())
  .then(json => json.data);

  return {courseList};
}

const getEnrolledCourseList = async ({}, { headers }) => {
  const courseList = await fetch('http://courses.node.internal.getbouncecode.com:3000/enrolled', {
    method: 'GET',
    headers
  })
  .then(data => data.json())
  .then(json => json.data);

  return {courseList};
}

const getSection = async ({ sectionId }, { headers }) => {
  const section = await fetch(`http://courses.node.internal.getbouncecode.com:3000/section/${sectionId}`, {
    method: 'GET',
    headers
  })
  .then(data => data.json())
  .then(json => json.data);

  return {section};
}

const enroll = async ({courseId}, {headers}) => {
  const enroll = await fetch(`http://courses.node.internal.getbouncecode.com:3000/course/${courseId}/enroll`, {
    method: 'POST',
    headers
  })
  .then(data => data.json())
  .then(json => json.data);

  return {enroll};
}

module.exports = {
  getCourse,
  getCourseList,
  getEnrolledCourseList,
  getSection,
  enroll
}