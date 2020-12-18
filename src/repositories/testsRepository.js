const db = require('../database/index');

async function postTest(testInfos){
    await db.query('INSERT INTO tests (name, url, "categoryId", "semesterId", "teacherId", "classId") values ($1, $2, $3, $4, $5, $6)', [testInfos.name, testInfos.url, testInfos.categoryId, testInfos.semesterId, testInfos.teacherId, testInfos.classId]);
}

async function getTestByTeacherIdAndCategoryId(teacherId, categoryId){
    const tests = await db.query(`SELECT tests.id, tests.name, tests.url,
    (SELECT classes.name as "className" FROM classes WHERE classes.id = tests."classId")
    FROM tests
    WHERE tests."teacherId" = $1 AND tests."categoryId" = $2`, [teacherId, categoryId]);

    return tests.rows;
}

module.exports = {
    postTest,
    getTestByTeacherIdAndCategoryId,
}