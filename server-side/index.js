import express, { json, urlencoded } from "express";
import { createPool } from "mysql2";
import cors from "cors";

const db = createPool({
  host: "node_mysql", // the host name MYSQL_DATABASE: node_mysql
  user: "MYSQL_USER", // database user MYSQL_USER: MYSQL_USER
  password: "MYSQL_PASSWORD", // database user password MYSQL_PASSWORD: MYSQL_PASSWORD
  database: "pi_sun", // database name MYSQL_HOST_IP: pi_sun
});

app.use(cors());
const app = express();
app.use(json());
app.use(urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Pi Test");
});
