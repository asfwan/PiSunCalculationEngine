const exp = require("express");
const router = exp.Router();
const db = require("../database");

router.get("/", (req: any, res: any) => {
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

const calculatePiWithNConstant = (n: number) => {
  // using: leibniz
  // formula: pi/4 = 1-1/3+1/5-1/7+1/9...
  let sign = Sign.negative;
  let result = 1; // initial result
  const oddNumbers = oddNumberWithoutOneGenerator(n);
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
};

router.get("/calculate_pi/:numberOfOddNumbers", (req: any, res: any) => {
  const result = calculatePiWithNConstant(req.params.numberOfOddNumbers);

  res.send({ result });
});

router.get("/calculate_pi", (req: any, res: any) => {
  // console.log(db);
  res.send({});
});

router.get("/best_pi_value", (req: any, res: any) => {
  //
});

router.get("/sun_circumference", (req: any, res: any) => {
  //
});

module.exports = router;
