const { func } = require('joi');
const db = require('../database/index');

async function getSemesterToSendTest(classId, teacherId){
    const semesters = await db.query(`SELECT name, "semesterId" FROM semester
    JOIN offering ON offering."semesterId" = semester.id
    WHERE offering."classId" = $1 and offering."teacherId" = $2`, [classId, teacherId]);

    return semesters.rows;
}

module.exports = { getSemesterToSendTest }