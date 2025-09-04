require('dotenv').config();
const app = require('./src/app');
const connectDB = require('./src/db/db');
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
connectDB(); // DB connect