const db = require('./db_config');

const sql = `DELETE FROM customers WHERE id=1`;

db.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Number of record deleted : " + result.affectedRows);
});