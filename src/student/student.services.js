const util = require('../utils/utils');

const createStudent = (studentData) => {
    try {
        const data = util.readData();
        const studentsLen = data['students'].length - 1;

        if (util.checkNewStudentClass(studentData, data['students'], data['classes'])) {
            // get id of last element + 1 to ensure that next id is increase in case of some students was deleted
            const newId = data['students'][studentsLen].id + 1;
            const newStudent = {
                id: newId,
                name: studentData?.name,
                mail: studentData?.mail || '',
                classId: studentData?.classId,
            };

            data['students'].push(newStudent);
            util.writeData(data);
            const idx = data['students'].length - 1;

            return data['students'][idx];
        } else {
            return { message: 'Student name existed or class not found' };
        }
    } catch (error) {
        console.log(error);
    }
};

const getStudentById = (studentId) => {
    const students = util.readData()['students'];
    const student = students.filter((student) => student.id == studentId);

    return student;
};

const getStudents = () => {
    const students = util.readData()['students'];

    return students;
};

const getStudentByName = (studentName) => {
    const students = util.readData()['students'];
    const student = students.filter((student) => student?.name.toLowerCase().includes(studentName.toLowerCase()));

    return student;
};

const getStudentByClassName = (courseName) => {
    const data = util.readData();
    const students = data['students'];
    const courses = data['classes'];

    const course = courses.find((course) => course?.name.toLowerCase() == courseName.toLowerCase());

    if (course) {
        // Get student who attend to a class match with class name
        const student = students.filter((student) => student?.classId == course?.id);
        student.map((student) => (student.className = course?.name)); //map className field before response

        return student;
    } else {
        return { status: 'Not found class' };
    }
};

const updateStudent = (id, studentData) => {
    try {
        const students = util.readData();
        const studentIdx = students['students'].findIndex((student) => student.id == Number(id));

        if (studentIdx !== -1) {
            students['students'][studentIdx] = { ...students['students'][studentIdx], ...studentData };
            util.writeData(students);

            return students['students'][studentIdx];
        }
        return { status: 'NOT FOUND STUDENT TO UPDATE' };
    } catch (error) {
        console.log(error);
    }
};

const deleteStudent = (studentId) => {
    const data = util.readData();
    const studentIdx = data['students'].findIndex((student) => student.id === Number(studentId));

    if (studentIdx !== -1) {
        data['students'].splice(studentIdx, 1);
        util.writeData(data);

        return { status: 'Student is deleted' };
    }

    return { status: 'Student is deleted' };
};

module.exports = {
    createStudent,
    getStudentById,
    getStudents,
    getStudentByName,
    getStudentByClassName,
    updateStudent,
    deleteStudent,
};
