import { database } from ".";
import { PiValuesQueryString } from "./PiValuesQueryString";
export class PiValuesQuery {
  static exec = async (queryString: string): Promise<any[]> => {
    return await new Promise((resolve, reject) => {
      database.query(queryString, (err, res) => {
        if (err) reject(err);
        resolve(res as any[]);
      });
    });
  };
  static select = () => {
    return this.exec(PiValuesQueryString.select());
  };
  static selectLatest = () => {
    return this.exec(PiValuesQueryString.selectLatest());
  };
  static count = async () => {
    return this.exec(PiValuesQueryString.entryCount());
  };
  static insert = (sample_number: number, pi_value: number) => {
    return this.exec(PiValuesQueryString.insert(sample_number, pi_value));
  };
}
