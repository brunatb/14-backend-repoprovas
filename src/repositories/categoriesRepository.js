const db = require('../database/index');

async function getAllCategories() {
    const categories = await db.query('SELECT * FROM categories');
    return categories.rows;
}

module.exports = { getAllCategories }