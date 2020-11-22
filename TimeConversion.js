// https://www.hackerrank.com/challenges/time-conversion/problem
// Given a time in -hour AM/PM format, convert it to military (24-hour) time.
//
// Note: Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock. Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock.
//
// Function Description
//
// Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.
//
// timeConversion has the following parameter(s):
//
// s: a string representing time in  hour format
// Input Format
//
// A single string  containing a time in -hour clock format (i.e.:  or ), where  and .
//
// Constraints
//
// All input times are valid
// Output Format
//
// Convert and print the given time in -hour format, where .
//
// Sample Input 0
//
// 07:05:45PM
// Sample Output 0
//
// 19:05:45

let s = "07:05:45PM";
// let s = "12:05:45AM";
// let s = "07:05:45AM";
let expectedResult = "19:05:45";
let hh = "";
let mmSS = "";
let amORpm = "";
function timeConversion(s) {
  amORpm = s[s.length - 2]    // grab the character A or P. To check if is AM or PM
  hh = s.substring(0,2) * 1;  // grab the hour. Multiply by 1 to convert it to int
  mmSS = s.substring(2,8);    // grab the rest of the time (minutes and seconds)
  return convertHours(hh, amORpm) + mmSS;
}

function convertHours(hh, amORpm){
  if (amORpm == "A") {
    return "00"
  }
  return hh + 12
}

console.log(timeConversion(s));
