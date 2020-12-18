const db = require('../database/index');

async function getTeacherAccordingToClass(classId){
    const teachers = await db.query(`SELECT name, "teacherId" FROM teachers
    JOIN offering ON offering."teacherId" = teachers.id 
    WHERE offering."classId" = $1`, [classId]);

    return teachers.rows; 
}

async function getAllTeachers(){
    const teachers = await db.query(`SELECT *,
    (SELECT count("teacherId") AS "numberOfTests" FROM tests WHERE tests."teacherId" = teachers.id)
    from teachers`);

    return teachers.rows
}

async function getTeacherById(teacherId){
    const teacher = await db.query(`SELECT name FROM teachers WHERE id = $1`, [teacherId]);

    return teacher.rows[0];
}

module.exports = { 
    getTeacherAccordingToClass, 
    getAllTeachers,
    getTeacherById, 
}