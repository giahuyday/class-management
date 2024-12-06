const courseServices = require('./course.services')


function createCourseController(req, res) {
    try {
        const newCourse = courseServices.createCourse(req.body)

        if (newCourse) {
            return res.status(200).json(newCourse)
        }
        else {
            return res.status(500).json("Create course fail")
        }

    } catch (err) {
        console.log(err)
    }
}

function getAllCourseController(req, res) {
    try {
        const newCourse = courseServices.createCourse()

        return res.status(200).json(newCourse)
    } catch (error) {
        console.log(error)
    }
}

function getCourseByIdController(req, res) {
    try {
        const id = req.params.id
        const course = courseServices.getCourseById(id)
        if (course) {
            res.status(200).json(course)
        }
    } catch (error) {
        console.log(error)
    }
}

function updateCourseByIdController(req, res) {
    try {
        const id = req.params.id
        const course = courseServices.updateCourse(id, req.body)

        if (course) {
            res.status(200).json(course)
        }
        else {
            res.status(500).json({ "status": "SERVER ERROR" })
        }
    } catch (error) {
        console.log(error)
    }
}

function deleteCourseByIdController(req, res) {
    try {
        const id = req.params.id
        const deleted = courseServices.deleteCourse(id)

        if (deleted) {
            res.status(200).json(deleted)
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    createCourseController,
    getAllCourseController,
    getCourseByIdController,
    updateCourseByIdController,
    deleteCourseByIdController,
}