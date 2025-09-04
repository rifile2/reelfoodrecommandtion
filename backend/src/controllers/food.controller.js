const foodModel = require('../models/food.model');
const storageService = require('../services/storage.service');
const { v4: uuid } = require('uuid');

async function addFood(req, res) {
    console.log(req.foodPartner);
    console.log(req.body);
    console.log(req.file); // multer file object
    const fileUploadResult = await storageService.uploadFile(req.file.buffer, uuid())
    console.log(fileUploadResult);
    res.send("food item ccreated")
}


module.exports = {
    addFood
}