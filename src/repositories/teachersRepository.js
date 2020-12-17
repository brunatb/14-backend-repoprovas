const db = require('../database/index');

async function getTeacherToSendTest(classId){
    const teachers = await db.query(`SELECT name, "teacherId" FROM teachers
    JOIN offering ON offering."teacherId" = teachers.id 
    WHERE offering."classId" = $1`, [classId]);

    return teachers.rows; 
}

module.exports = { getTeacherToSendTest }