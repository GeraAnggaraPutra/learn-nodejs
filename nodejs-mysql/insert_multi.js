const db = require('./db_config');

const sql = "INSERT INTO customers (name, address) VALUES ?";
const values = [
  ["Gera", "Bandung"],
  ["Ksd", "Jakarta"],
  ["Ioh", "Surabaya"],
  ["Ps", "New York"],
  ["Yuuu", "Bali"],
];

db.query(sql, [values], function (err, result) {
  if (err) throw err;
  console.log("Number of records inserted: " + result.affectedRows);
});