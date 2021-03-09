let mysql = require('mysql2');

let pool = mysql.createPool({
  host: "dbMysql",
  port: 3306,
  user: "root",
  password: "changeme",
  database: "park_buddy_db"
});

module.exports = pool;