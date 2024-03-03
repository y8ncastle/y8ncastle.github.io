import moment from "moment";

export const calculateAge = () => {
  const today = moment();
  const birthday = moment("1994-09-30", "YYYY-MM-DD");
  const age = today.diff(birthday, "years");

  return age;
};
