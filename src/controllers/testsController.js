const categoriesRepository = require('../repositories/categoriesRepository');

async function getAllCategories (req, res) {
    try{
        const categories = await categoriesRepository.getAllCategories();
        res.status(200).send(categories);
    }catch(err){
        res.sendStatus(500);
    }
}

module.exports = {
    getAllCategories,
};