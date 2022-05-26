const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const db = mysql.createPool({
  host: "node_mysql", // the host name MYSQL_DATABASE: node_mysql
  user: "MYSQL_USER", // database user MYSQL_USER: MYSQL_USER
  password: "MYSQL_PASSWORD", // database user password MYSQL_PASSWORD: MYSQL_PASSWORD
  database: "pi_sun", // database name MYSQL_HOST_IP: pi_sun
});

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: any, res: any) => {
  res.send("Pi Test");
});

const oddNumberWithoutOneGenerator = (numberOfOddNumbers: number) => {
  const arrayOfOddNumbers = [];
  let i = 1; // it starts with 1, but 1 will be excluded from the array
  while (arrayOfOddNumbers.length < numberOfOddNumbers) {
    if (++i % 2 != 0) arrayOfOddNumbers.push(i++);
  }
  return arrayOfOddNumbers;
};

enum Sign {
  positive = 1,
  negative = -1,
}

app.get("/calculate_pi/:numberOfOddNumbers", (req: any, res: any) => {
  // using: leibniz
  // formula: pi/4 = 1-1/3+1/5-1/7+1/9...
  let sign = Sign.negative;
  let result = 1; // initial result
  const oddNumbers = oddNumberWithoutOneGenerator(
    req.params.numberOfOddNumbers
  );
  // loop the series
  oddNumbers.forEach((oddNumber) => {
    if (sign == Sign.positive) {
      // console.log(result + "+ 1/" + oddNumber);
      result += 1 / oddNumber;
      sign = Sign.negative;
    } else if (sign == Sign.negative) {
      // console.log(result + "- 1/" + oddNumber);
      result -= 1 / oddNumber;
      sign = Sign.positive;
    } else {
    }
  });
  // result is in form of pi/4 . So pi = pi/4 * 4
  result *= 4;

  res.send({ result });
});

app.get("/best_pi_value", (req: any, res: any) => {
  //
});

app.get("/sun_circumference", (req: any, res: any) => {
  //
});

app.listen("3001", () => {});
