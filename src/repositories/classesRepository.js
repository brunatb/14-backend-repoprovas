const db = require('../database/index');

async function getAllClasses() {
    const classes = await db.query('SELECT * FROM classes');
    return classes.rows;
}

module.exports = { getAllClasses }
