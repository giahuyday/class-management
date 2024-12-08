const studentController = require('../../src/student/student.controllers');

const express = require('express');

const router = express.Router();

router.post('/api/create', studentController.createStudentController);
router.get('/api/get_student/:id', studentController.getStudentByIdController);
router.get('/api/get_by_name', studentController.getStudentByNameController);
router.get('/api/get_by_classname', studentController.getStudentByClassNameController);
router.get('/api/get_students', studentController.getAllStudentController);
router.post('/api/update', studentController.updateStudentController);
router.post('/api/delete', studentController.deleteStudentController);

module.exports = router;
