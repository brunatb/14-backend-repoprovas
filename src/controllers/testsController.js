const categoriesRepository = require('../repositories/categoriesRepository');
const testsRepository = require('../repositories/testsRepository');
const testSchema = require('../schemas/testSchema');

async function getAllCategories (req, res) {
    try{
        const categories = await categoriesRepository.getAllCategories();
        res.status(200).send(categories);
    }catch(err){
        console.log(err);
    }
}

async function postTest(req, res) {
    try{
        if(testSchema.validate(req.body).error) return res.status(422).send(testSchema.validate(req.body).error.message);

        await testsRepository.postTest(req.body);
        res.sendStatus(201);

    }catch(err){
        console.log(err);
    }
}

async function getTestByTeacherIdAndCategoryId(req, res){
    const { teacherId, categoryId } = req.params;
    try{

    }catch(err){
        console.log(err);
    }
}

module.exports = {
    getAllCategories,
    postTest,
};