const classesRepository = require('../repositories/classesRepository');
const semesterRepository = require('../repositories/semesterRepository');

async function getAllClasses(req, res) {
    try{
        const classes = await classesRepository.getAllClasses();
        res.status(200).send(classes);
    }catch(err){
        console.log(err);
        res.send(err.body);
    }
}

async function getFiltredSemester(req, res) {
    const { classId, teacherId } = req.params;
    try{
        const semesters = await semesterRepository.getFiltredSemester(classId, teacherId);
        res.status(200).send(semesters);
    }catch(err){
        console.log(err);
        res.send(err.body);
    }
}

async function getAllSemesters(req, res){
    try{
        const semesters = await semesterRepository.getAllSemesters();
        res.status(200).send(semesters);
    }catch(err){
        console.log(err);
        res.send(err.body);
    }
}

async function getAllClassesInfo(req, res){
    const { semesterId } = req.params;
    try{
        const classes = await classesRepository.getAllClassesInfo(semesterId);
        res.status(200).send(classes);
    }catch(err){
        console.log(err);
        res.send(err.body);
    }
}

async function getClassById(req, res){
    const { classId } = req.params;
    try{
        const name = await classesRepository.getClassById(classId);
        res.status(200).send(name);
    }catch(err){
        console.log(err);
        res.send(err.body);
    }
}

module.exports = {
    getAllClasses,
    getFiltredSemester,
    getAllSemesters, 
    getAllClassesInfo,
    getClassById
}