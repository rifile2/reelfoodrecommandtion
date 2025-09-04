// const express = require('express');
// const authRoutes = require('./routes/auth.routes');
// const foodRoutes = require('./routes/food.routes');
// const cookieParser = require('cookie-parser');
// const app = express();

// // Middlewares
// app.use(express.json());
// app.use(cookieParser());

// app.get('/', (req, res) => {
//     res.send('Server chal raha hai ✅');
// });


// // Routes
// app.use('/api/auth', authRoutes);

// app.use('/api/food', foodRoutes);
// module.exports = app;
const express = require('express');
const authRoutes = require('./routes/auth.routes');
const foodRoutes = require('./routes/food.routes');
const cookieParser = require('cookie-parser');

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // ✅ for form-data
app.use(cookieParser());

// Test route
app.get('/', (req, res) => {
    res.send('Server chal raha hai ✅');
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/food', foodRoutes);

module.exports = app;