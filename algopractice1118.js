/*
Sum To One Digit
implement a function sumToOne(num)​ that,
given a number, sums that number’s digits
repeatedly until the sum is only one digit. Return
that final one digit result.
Tips:
    to access digits from a number, need to convert it .toString() to access each digit via index
    parseInt(arg) returns arg parsed as an integer, or NaN if it couldn't be converted to an int
    isNaN(arg) used to check if something is NaN
*/

const num1 = 5;
const expected1 = 5;

const num2 = 10;
const expected2 = 1;
// 1 + 0 = 1

const num6 = 25;
const expected6 = 7;
// 2 + 5 = 7

const num4 = 258;
const expected4 = 6;
// 2 + 5 + 8 = 15 ; 1 + 5 = 6

// Bonus
const num3 = -25;
const expected3 = -7;
// 2 + 5 = -7 
// -2 + 5 = 3



function sumToOneDigit(num, i=0) {
    if(num<0){
        num *= -1
    }
    
    if(num<10){
        return num
    }
    if(i===num.length){
        return 0
    }
    num=num.toString()

    return sumToOneDigit(num, i+1) + (Number.parseInt(num[i]))

}
// console.log(sumToOneDigit(num1));
// console.log(sumToOneDigit(num2));
// console.log(sumToOneDigit(num3));
// console.log(sumToOneDigit(num4));
// console.log(sumToOneDigit(num6));

// ********************************


// http://algorithms.dojo.news/static/Algorithms/index.html#LinkTarget_2129
/* 
  String Anagrams
  Given a string,
  return array where each element is a string representing a different anagram (a different sequence of the letters in that string).
  Ok to use built in methods
*/

const two_str1 = "lim";
const two_expected1 = ["ilm", "iml", "lim", "lmi", "mil", "mli"];
// Order of the output array does not matter

function generateAnagrams(str, solution=[], partial="") {
    if(!str){
        solution.push(partial)
    }
    for(let i=0;i<str.length;i++){
        const leftSlice=str.slice(0,i)
        const rightSlice=str.slice(i+1)
        return generateAnagrams(leftSlice+rightSlice, solution, partial+str[i])
    }
}
console.log(generateAnagrams(two_str1))