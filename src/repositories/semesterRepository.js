const db = require('../database/index');

async function getFiltredSemester(classId, teacherId){
    const semesters = await db.query(`SELECT name, "semesterId" FROM semester
    JOIN offering ON offering."semesterId" = semester.id
    WHERE offering."classId" = $1 and offering."teacherId" = $2`, [classId, teacherId]);

    return semesters.rows;
}

async function getAllSemesters(){
    const semesters = await db.query('SELECT * FROM semester');

    return semesters.rows;
}

module.exports = { 
    getFiltredSemester,
    getAllSemesters,
}