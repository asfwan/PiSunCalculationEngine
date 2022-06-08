import mysql from "mysql2";

export const database = mysql.createPool({
  host: "localhost", // the host name MYSQL_DATABASE: node_mysql
  user: "mysql_user", // database user MYSQL_USER: MYSQL_USER
  password: "mysql_pass", // database user password MYSQL_PASSWORD: MYSQL_PASSWORD
  database: "pi_sun", // database name MYSQL_HOST_IP: pi_sun
});

database.query("select count(*) as count from pi_values", (err, res) => {
  if (err) return console.log("db is not ok");
  console.log("db is ok");
});

// module.exports = database;
