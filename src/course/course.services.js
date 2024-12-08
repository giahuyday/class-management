const util = require('../utils/utils')

const createCourse = (courseData) => {
    try {
        const courses = util.readData()
        const coursesLen = courses['courses'].length - 1

        // get id of last element +1 to ensure that next id is increase in case some courses was deleted
        const newId = courses['courses'][coursesLen].id + 1
        const newCourse = {
            id: newId,
            name: courseData?.name
        }

        courses['courses'].push(newCourse);
        util.writeData(courses);  // Lưu dữ liệu vào file JSON
        idx = courses['courses'].length - 1

        return courses['courses'][idx]
    } catch (error) {
        console.log(error)
    }
};

const getCourses = () => {
    const courses = util.readData()['courses']

    return courses
};

const getCourseById = (courseId) => {
    try {
        const courses = util.readData()['courses']
        const course = courses.filter(course => course.id == courseId)

        if (course.length > 0) {
            return course
        }
        else {
            return { "status": "NOT FOUND" }
        }
    } catch (error) {
        console.log(error)
    }
};

const updateCourse = (id, courseData) => {
    try {
        const courses = util.readData()
        const courseIdx = courses['courses'].findIndex(course => course.id === Number(id));

        if (courseIdx !== -1) {
            courses['courses'][courseIdx] = { ...courses['courses'][courseIdx], ...courseData }
            util.writeData(courses)

            return courses.courses[courseIdx]
        } else {
            return { "Status": "NOT FOUND" }
        }
    } catch (error) {
        console.log(error)
    }
};

const deleteCourse = (courseId) => {
    try {
        const courses = util.readData()
        const courseIdx = courses['courses'].findIndex(course => course.id === Number(courseId))
        const checkEnrolledStudent = util.checkEnrolledStudents(courses['students'], Number(courseId))

        if (courseIdx !== -1) {
            if (!checkEnrolledStudent) {
                courses['courses'].splice(courseIdx, 1)
                util.writeData(courses)

                return { "message": "Course is deleted" }
            } else {
                return { "message": "Exists student in class" }
            }
        }

        return { "message": "Courses is deleted" }
    } catch (error) {
        console.log(error)
    }
};

module.exports = {
    createCourse,
    getCourses,
    getCourseById,
    updateCourse,
    deleteCourse,
};
