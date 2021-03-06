require("dotenv").config();
const express = require("express");
const cors = require("cors");
const testsController = require('./controllers/testsController');
const classesController = require('./controllers/classesController');
const teachersController = require('./controllers/teachersController');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/classes', classesController.getAllClasses);
app.get('/api/categories', testsController.getAllCategories);
app.get('/api/:classId/teachers', teachersController.getTeacherAccordingToClass);
app.get('/api/:classId/:teacherId/semester', classesController.getFiltredSemester);
app.post('/api/test', testsController.postTest);

app.get('/api/teachers', teachersController.getAllTeachers);
app.get('/api/teachers/:teacherId', teachersController.getTeacherById);
app.get('/api/teachers/:teacherId/:categoryId', testsController.getTestByTeacherIdAndCategoryId);

app.get('/api/classes/semesters', classesController.getAllSemesters);
app.get('/api/classes/semesters/:semesterId', classesController.getAllClassesInfo);
app.get('/api/classes/:classId', classesController.getClassById);

app.get('/api/semester/:semesterId/classes/:classId/categories/:categoryId', testsController.getTestsBySemesterIdCategoryIdClassId);

const port = process.env.PORT;
app.listen(port, () => console.log(`Servidor on no port ${port}`));

module.exports = app;
