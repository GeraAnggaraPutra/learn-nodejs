// load semua variable env dari file .env
require('dotenv').config();

// mencetak variable env
console.log("HOST = " + process.env.DB_HOST);
console.log("USER = " + process.env.DB_USER);
console.log("PASS = " + process.env.DB_PASS);
console.log("NAME = " + process.env.DB_NAME);