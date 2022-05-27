const mysql = require("mysql2");

const database = mysql.createPool({
  host: "localhost", // the host name MYSQL_DATABASE: node_mysql
  user: "MYSQL_USER", // database user MYSQL_USER: MYSQL_USER
  password: "MYSQL_PASSWORD", // database user password MYSQL_PASSWORD: MYSQL_PASSWORD
  database: "pi_sun", // database name MYSQL_HOST_IP: pi_sun
});

module.exports = database;
