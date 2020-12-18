const teachersRepository = require('../repositories/teachersRepository');

async function getTeacherAccordingToClass(req, res){
    const { classId } = req.params;
    try{
        const teachers = await teachersRepository.getTeacherAccordingToClass(classId);
        res.status(200).send(teachers);
    }catch(err){
        console.log(err);
        res.send(err.body);
    }
}

async function getAllTeachers(req, res){
    try{
        const teachers = await teachersRepository.getAllTeachers();
        res.status(200).send(teachers);
    }catch(err){
        console.log(err);
        res.send(err.body);
    }
}

module.exports = {
    getTeacherAccordingToClass,
    getAllTeachers,
}