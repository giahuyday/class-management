const courseController = require('../../src/course/course.controllers');

const express = require('express');

const router = express.Router();

router.post('/api/create', courseController.createCourseController);
router.get('/api/get_courses', courseController.getAllCourseController);
router.get('/api/get_course/:id', courseController.getCourseByIdController);
router.post('/api/update/:id', courseController.updateCourseByIdController);
router.post('/api/delete/:id', courseController.deleteCourseByIdController);

module.exports = router;
