const db = require('../database/index');

async function getAllClasses() {
    const classes = await db.query('SELECT * FROM classes');
    return classes.rows;
}

async function getAllClassesInfo(semesterId){
    const classes = await db.query(`SELECT *,
    (SELECT count("classId") AS "numberOfTests" FROM tests WHERE tests."classId" = classes.id 
    AND tests."semesterId" = $1)
    from classes`, [semesterId]);

    return classes.rows
}

async function getClassById(classId){
    const className = await db.query(`SELECT name FROM classes WHERE id = $1`, [classId]);

    return className.rows[0];
}

module.exports = { 
    getAllClasses,
    getAllClassesInfo, 
    getClassById
}
