import { NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";
import moment from "moment";

export const getUnixTimestamp = (dateStruct: NgbDateStruct): number => {
  const date = moment([dateStruct.year, dateStruct.month - 1, dateStruct.day]);
  return date.unix();
}

export const convertUnixToNgbDateStruct = (unixTimestamp: number): NgbDateStruct => {
  // Create a moment object from the Unix timestamp
  const date = moment.unix(unixTimestamp);

  // Construct and return the NgbDateStruct
  return {
    year: date.year(),
    month: date.month() + 1, // Moment.js months are 0-indexed
    day: date.date(),
  };
}
