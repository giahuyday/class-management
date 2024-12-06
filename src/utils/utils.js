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

const checkCourseExist = (coursesArr, courseId) => {
    const courseIdx = coursesArr.findIndex(course => course.id === Number(courseId))

    if (courseIdx !== -1) {
        return true
    } else {
        return false
    }
}

const checkStudentName = (studentArr, studentName) => {
    const studentIdx = studentArr.findIndex(student => student.name === studentName)

    if (studentIdx !== -1) {
        return true
    }
    return false
}

const checkEnrolledStudents = (studentArr, courseId) => {
    const students = studentArr.filter(student => student.classId === courseId)

    if (students.length > 0) {
        return true
    }
    return false
}

module.exports = {
    readData,
    writeData,
    checkCourseExist,
    checkStudentName,
    checkEnrolledStudents,
};
