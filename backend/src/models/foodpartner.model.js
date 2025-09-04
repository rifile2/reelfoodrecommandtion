const mongoose = require('mongoose');
const foodPartnerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
})
const foodPartnerModel = mongoose.model('FoodPartner', foodPartnerSchema);
module.exports = foodPartnerModel;