import * as exp from "express";
const router = exp.Router();
import { PiValuesQuery } from "../database/PiValuesQuery";

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

const getPiValueEntryCounts = async () => {
  try {
    const countResult: any[] = await PiValuesQuery.count();
    return countResult[0].count;
  } catch (err) {
    return { err };
  }
};

const getLatestPiValueEntry = async (): Promise<{
  id: number;
  sample_number: number;
  pi_value: number;
  err?: any;
}> => {
  try {
    const countResult: any[] = await PiValuesQuery.selectLatest();
    return countResult[0];
  } catch (err) {
    return { err, id: 0, sample_number: 0, pi_value: 0 };
  }
};

// this returns pi value based on sample number
router.get("/calculate_pi/:numberOfOddNumbers", (req: any, res: any) => {
  const result = calculatePiWithNConstant(req.params.numberOfOddNumbers);
  res.send({ result });
});

// this returns pi value based on most accurate sample number and calculates one more times and stores the most accurate value found
router.get("/calculate_pi", async (req: any, res: any) => {
  const entryCounts = await getPiValueEntryCounts();
  // just a basic error handling
  if (entryCounts.err) return res.status(400).json(entryCounts.err);
  const sampleNumber = entryCounts * 1000;
  const calculatedPiResult = calculatePiWithNConstant(sampleNumber);
  await PiValuesQuery.insert(
    calculatedPiResult.sample_number,
    calculatedPiResult.pi_value
  );
  res.send({ entryCounts, calculatedPiResult });
});

router.get("/best_pi_value", async (req: any, res: any) => {
  const mostAccuratePiValue = await getLatestPiValueEntry();
  // just a basic error handling
  if (mostAccuratePiValue.err)
    return res.status(400).json(mostAccuratePiValue.err);
  res.send({ mostAccuratePiValue });
});

router.get("/sun_circumference", async (req: any, res: any) => {
  const radiusOfSun = 696340; // in kilometre
  const mostAccuratePiValue = await getLatestPiValueEntry();
  // just a basic error handling
  if (mostAccuratePiValue.err)
    return res.status(400).json(mostAccuratePiValue.err);
  const piValue = mostAccuratePiValue.pi_value;
  const circumferenceOfSun = 2 * piValue * radiusOfSun; // formula for circumference is 2*pi*r
  res.send({ circumferenceOfSun, piValue });
});

module.exports = router;
