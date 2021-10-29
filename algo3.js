/*
  String: Is Palindrome
  Create a function that returns a boolean whether the string is a strict palindrome. 
    - palindrome = string that is same forwards and backwards
  
  Do not ignore spaces, punctuation and capitalization
*/

const str1 = "a x a";
const expected1 = true;

const str2 = "racecar";
const expected2 = true;

const str3 = "Dud";
const expected3 = false;

const str4 = "oho!";
const expected4 = false;

function isPalindrome(str) {
    newString="";
    for(var i=str.length-1; i>=0;i--){
        newString += str[i];
    }
    if(newString == str){
        return true
    }
    else{
        return false
    }
}
console.log(isPalindrome(str1))
console.log(isPalindrome(str2))
console.log(isPalindrome(str3))
console.log(isPalindrome(str4))

/* 
  Longest Palindrome

  For this challenge, we will look not only at the entire string provided, but also at the substrings within it. Return the longest palindromic substring. 

  Strings longer or shorter than complete words are OK.

  All the substrings of "abc" are:
  a, ab, abc, b, bc, c
*/

const str_1 = "what up, daddy-o?";
//const expected1 = "dad";

const str_2 = "uh, not much";
//const expected2 = "u";

const str_3 = "Yikes! my favorite racecar erupted!";
//const expected3 = "e racecar e";

const str_4 = "a1001x20002y5677765z";
//const expected4 = "5677765";

const str_5 = "a1001x20002y567765z";
//const expected5 = "567765";
var longest_pali = "";
var result = [];

function longestPalindromicSubstring(str) {
    for(var i=0; i<str.length; i++){
        for(var j=1;j<str.length; j++){ 
        result.push(str.slice(i, j));                   // memorize substring
        }
    }
    console.log(result);
}
//palindrome function 

    for (var i=0; i<result.length; i++) {
        if (isPalindrome(result[i])) {                          // check if palindrome
            if ( result[i].length > longest_pali.length ) {     // check if this palindrome is longer than longest palindrome so far
             longest_pali = result[i];                       //      store the longest palindrome
            }
        }
        return longest_pali; 
    }


longestPalindromicSubstring(str2)
