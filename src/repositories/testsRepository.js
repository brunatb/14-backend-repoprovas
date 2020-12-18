const db = require('../database/index');

async function postTest(testInfos){
    await db.query('INSERT INTO tests (name, url, "categoryId", "semesterId", "teacherId", "classId") values ($1, $2, $3, $4, $5, $6)', [testInfos.name, testInfos.url, testInfos.categoryId, testInfos.semesterId, testInfos.teacherId, testInfos.classId]);
}

module.exports = {
    postTest,
}