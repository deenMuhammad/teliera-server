const courseNode = require('../../nodes/course');

const course = async (obj, { courseId }, { headers }) => {
  const {course} = await courseNode.getCourse({ courseId }, { headers });
  return course;
}

const courses = async (obj, { enrolled }, { headers }) => {
  const {courseList} = (enrolled)
      ? await courseNode.getEnrolledCourseList({}, {headers})
      : await courseNode.getCourseList({}, {headers})
    
  return courseList;
}

const section = async (obj, { sectionId }, { headers }) => {
  const {section} = await courseNode.getSection({sectionId}, {headers});
  return section;
}

module.exports = {
  course,
  courses,
  section
}