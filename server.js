const app = require('./app');
require('dotenv').config();


const PORT = process.env.PORT || 4000;
require("./config/db");


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));