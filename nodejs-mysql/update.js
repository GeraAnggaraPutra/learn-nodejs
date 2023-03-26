const db = require('./db_config');

// mengubah alamat Assalaam
const sql = `UPDATE customers SET address='Cibaduyut' WHERE id=1`;

db.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Number of record inserted: " + result.affectedRows);
})