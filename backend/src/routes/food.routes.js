// const express = require('express');
// const router = express.Router();
// const authMiddleware = require('../middleware/auth.middleware');
// const foodController = require('../controllers/food.controller'); // 👈 controllers me singular file

// router.post('/', authMiddleware.authfoodPartnerMiddleware, foodController.addFood);

// module.exports = router;
const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });

const { authfoodPartnerMiddleware } = require('../middleware/auth.middleware');
const foodController = require('../controllers/food.controller');

// ✅ multer pehle, fir auth, fir controller
router.post(
    '/',
    upload.single('video'),
    authfoodPartnerMiddleware,
    foodController.addFood
);

module.exports = router;