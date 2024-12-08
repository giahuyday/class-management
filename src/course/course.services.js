const util = require('../utils/utils');

const createCourse = (courseData) => {
    try {
        const courses = util.readData();
        const coursesLen = courses['classes'].length - 1;

        // get id of last element +1 to ensure that next id is increase in case some courses was deleted
        const newId = courses['classes'][coursesLen].id + 1;
        const newCourse = {
            id: newId,
            name: courseData?.name,
        };

        courses['classes'].push(newCourse);
        util.writeData(courses); // Lưu dữ liệu vào file JSON
        idx = courses['classes'].length - 1;

        return courses['classes'][idx];
    } catch (error) {
        console.log(error);
    }
};

const getCourses = () => {
    const courses = util.readData()['classes'];

    return courses;
};

const getCourseById = (courseId) => {
    try {
        const courses = util.readData()['classes'];
        const course = courses.filter((course) => course.id == courseId);

        if (course.length > 0) {
            return course;
        } else {
            return { status: 'NOT FOUND' };
        }
    } catch (error) {
        console.log(error);
    }
};

const updateCourse = (id, courseData) => {
    try {
        const courses = util.readData();
        const courseIdx = courses['classes'].findIndex((course) => course.id === Number(id));

        if (courseIdx !== -1) {
            courses['classes'][courseIdx] = { ...courses['classes'][courseIdx], ...courseData };
            util.writeData(courses);

            return courses['classes'][courseIdx];
        } else {
            return { status: 'NOT FOUND CLASS TO UPDATE' };
        }
    } catch (error) {
        console.log(error);
    }
};

const deleteCourse = (courseId) => {
    try {
        const courses = util.readData();
        const courseIdx = courses['classes'].findIndex((course) => course.id === Number(courseId));
        const checkEnrolledStudent = util.checkEnrolledStudents(courses['students'], Number(courseId));

        if (courseIdx !== -1) {
            if (!checkEnrolledStudent) {
                courses['classes'].splice(courseIdx, 1);
                util.writeData(courses);

                return { message: 'Course is deleted' };
            } else {
                return { message: 'Exists student in course' };
            }
        }

        return { message: 'Courses is deleted' };
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    createCourse,
    getCourses,
    getCourseById,
    updateCourse,
    deleteCourse,
};
