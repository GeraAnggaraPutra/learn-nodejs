const db = require('./db_config');

const sql = `CREATE TABLE customers (
    id int NOT NULL AUTO_INCREMENT,
    name VARCHAR(225),
    address VARCHAR(225),
    PRIMARY KEY (id)
)`;

db.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
});