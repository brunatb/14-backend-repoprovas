const express = require("express");
const classesRepository = require('../repositories/classesRepository');
const categoriesRepository = require('../repositories/categoriesRepository');
const teachersRepository = require('../repositories/teachersRepository');
const semesterRepository = require('../repositories/semesterRepository');
const router = express.Router();

router.get('/classes', async (req, res) =>{
    try{
        const classes = await classesRepository.getAllClasses();
        res.status(200).send(classes);
    }catch(err){
        console.log(err);
        res.send(err.body);
    }
});

router.get('/:classId/teachers', async(req, res) =>{
    const { classId } = req.params;
    try{
        const teachers = await teachersRepository.getTeacherToSendTest(classId);
        res.status(200).send(teachers);
    }catch(err){
        console.log(err);
        res.send(err.body);
    }
})

router.get('/:classId/:teacherId/semester', async(req, res) =>{
    const { classId, teacherId } = req.params;
    try{
        const semesters = await semesterRepository.getSemesterToSendTest(classId, teacherId);
        res.status(200).send(semesters);
    }catch(err){
        console.log(err);
        res.send(err.body);
    }
})

router.get('/categories', async (req, res) =>{
    try{
        const categories = await categoriesRepository.getAllCategories();
        res.status(200).send(categories);
    }catch(err){
        res.sendStatus(500);
    }
})

module.exports = router;