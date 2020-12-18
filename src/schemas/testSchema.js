const Joi = require('joi');

const testSchema = Joi.object({
    name: Joi.string().required(),
    url: Joi.string().uri().required(),
    classId: Joi.number().required(),
    teacherId: Joi.number().required(),
    semesterId: Joi.number().required(),
    categoryId: Joi.number().required()
})

module.exports = testSchema;