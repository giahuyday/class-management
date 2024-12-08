const fs = require('fs');
const path = require('path');
const DATA_FILE = path.join(__dirname, '../data/test.json');

const readData = () => {
    const data = fs.readFileSync(DATA_FILE, 'utf8');
    return JSON.parse(data);
};

const writeData = (data) => {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf8');
};

// Check if existed any course with required Id
const checkCourseExist = (coursesArr, courseId) => {
    const courseIdx = coursesArr.findIndex((course) => course.id === Number(courseId));

    if (courseIdx !== -1) {
        return true;
    } else {
        return false;
    }
};

// Check if classname existed or not
const checkCourseName = (courseArr, courseName) => {
    const courseIdx = courseArr.findIndex((course) => course.name === courseName);

    if (courseIdx !== -1) {
        return true;
    } else {
        return false;
    }
};

// Check if studen name existed or not
const checkStudentName = (studentArr, studentName) => {
    const studentIdx = studentArr.filter((student) => student.name === studentName);

    if (studentIdx.length > 0) {
        return true;
    }
    return false;
};

// Check if has any student enrolled in course or not
const checkEnrolledStudents = (studentArr, courseId) => {
    const students = studentArr.filter((student) => student.classId === courseId);

    if (students.length > 0) {
        return true;
    }
    return false;
};

// Serialize input data to make sure that a student must attend a class and that the class exists
const checkNewStudentClass = (studentData, studentArr, courseArr) => {
    const courseId = studentData['classId'];

    if (checkCourseExist(courseArr, courseId) && !checkStudentName(studentArr, studentData?.name)) {
        return true;
    }
    return false;
};

module.exports = {
    readData,
    writeData,
    checkCourseExist,
    checkCourseName,
    checkStudentName,
    checkEnrolledStudents,
    checkNewStudentClass,
};
