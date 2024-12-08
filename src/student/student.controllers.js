const studentServices = require('./student.services');

function createStudentController(req, res) {
    try {
        const newStudent = studentServices.createStudent(req.body);

        if (newStudent.id) {
            return res.status(200).json(newStudent);
        }
        return res.status(500).json(newStudent);
    } catch (error) {
        console.log(error);
    }
}

function getAllStudentController(req, res) {
    try {
        const students = studentServices.getStudents();

        return res.status(200).json(students);
    } catch (error) {
        console.log(error);
    }
}

function getStudentByIdController(req, res) {
    try {
        const student = studentServices.getStudentById(req.params.id);

        return res.status(200).json(student);
    } catch (error) {
        console.log(error);
    }
}

function getStudentByNameController(req, res) {
    try {
        const studentName = req.body?.name;
        const student = studentServices.getStudentByName(studentName);

        return res.status(200).json(student);
    } catch (error) {
        console.log(error);
    }
}

function getStudentByClassNameController(req, res) {
    try {
        const courseName = req.body.courseName;
        console.log(courseName);
        const students = studentServices.getStudentByClassName(courseName);

        return res.status(200).json(students);
    } catch (error) {
        console.log(error);
    }
}

function updateStudentController(req, res) {
    try {
        const student = studentServices.updateStudent(req.params.id, req.body);

        return res.status(200).json(student);
    } catch (error) {
        console.log(error);
    }
}

function deleteStudentController(req, res) {
    try {
        const studentId = req.params.id;
        const deleted = studentServices.deleteStudent(studentId);

        return res.status(200).json(deleted);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    createStudentController,
    getStudentByIdController,
    getStudentByNameController,
    getStudentByClassNameController,
    getAllStudentController,
    updateStudentController,
    deleteStudentController,
};
