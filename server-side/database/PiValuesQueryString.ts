export class PiValuesQueryString {
  static select = () => {
    return "select * from pi_values";
  };
  static selectLatest = () => {
    return "select * from pi_values order by id desc";
  };
  static entryCount = () => {
    return "select count(*) as count from pi_values";
  };
  static insert = (sample_number: number, pi_value: number) => {
    return (
      "insert into pi_values (sample_number,pi_value) values(" +
      sample_number +
      "," +
      pi_value +
      ")"
    );
  };
}
