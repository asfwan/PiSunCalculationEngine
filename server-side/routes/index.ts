import * as exp from "express";
const router = exp.Router();
import { database } from "../database";

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
  return {
    sample_number: n,
    pi_value: result,
  };
};

router.get("/calculate_pi/:numberOfOddNumbers", (req: any, res: any) => {
  const result = calculatePiWithNConstant(req.params.numberOfOddNumbers);

  res.send({ result });
});

class QueryString {
  static select = () => {
    return "select * from pi_values";
  };
  static selectLatest = () => {
    return "select * from pi_values order by id desc";
  };
  static entryCount = () => {
    return "select count(*) as count";
  };
  static insert = (sample_number: string, pi_value: string) => {
    return (
      "insert into pi_values (sample_number,pi_value) values(" +
      sample_number +
      "," +
      pi_value +
      ")"
    );
  };
}

class Query {
  static exec = async (queryString: string): Promise<object[]> => {
    return await new Promise((resolve, reject) => {
      database.query(queryString, (err, res) => {
        if (err) reject(err);
        resolve(res as object[]);
      });
    });
  };
  static select = () => {
    return this.exec(QueryString.select());
  };
  static selectLatest = () => {
    return this.exec(QueryString.selectLatest());
  };
  static count = () => {
    return this.exec(QueryString.entryCount());
  };
}

router.get("/calculate_pi", async (req: any, res: any) => {
  // const queryString = QueryString.entryCount();
  // db.query(queryString, (err: any, result: any) => {
  //   if (err) res.status(400).json(err);
  //   else res.status(200).json(result);
  // });
  const count: Array<object> = await Query.count();
  console.log(count[0]);
  // const result = calculatePiWithNConstant(count[0].count);
  res.send({ count });
});

router.get("/best_pi_value", (req: any, res: any) => {
  //
});

router.get("/sun_circumference", (req: any, res: any) => {
  //
});

module.exports = router;
