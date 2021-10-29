/*Given in an alumni interview in 2021.
  String Encode
  You are given a string that may contain sequences of consecutive characters.
  Create a function to shorten a string by including the character,
  then the number of times it appears. 
  
  
  If final result is not shorter (such as "bb" => "b2" ),
  return the original string.
  */

const str1 = "aaaabbcddd";
const expected1 = "a4b2c1d3";


const str2 = "";
const expected2 = "";

const str3 = "a";
const expected3 = "a";

const str4 = "bbcc";
const expected4 = "bbcc";

const str5 = "aaaabbaaacddd";
const expected5 = "a4b2a3c1d3";

function encodeStr(str){
    var newString="";
    counter=1;
    for(var i=0;i<str.length;i++){
        if(str[i]===str[i+1]){
            counter++;
        }
        else if(str[i]===str[(str.length-1)]){
            newString+=str[i];
        }
        else if(str[i] != str[i+1]){
            newString+= str[i] + counter;
            counter=1;
        }
    }
        console.log(newString);
}

encodeStr(str1);
encodeStr(str2);
encodeStr(str3);
encodeStr(str4);
encodeStr(str5);


/* 
  String Decode  
*/

const two_str1 = "a3b2c1d3";
const two_expected1 = "aaabbcddd";

const two_str2 = "a3b2c12d10";
const two_expected2 = "aaabbccccccccccccdddddddddd";

/**
 * Decodes the given string by duplicating each character by the following int
 * amount if there is an int after the character.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str An encoded string with characters that may have an int
 *    after indicating how many times the character occurs.
 * @returns {string} The given str decoded / expanded.
 */
function decodeStr1(str) {
        let newString="";
        for(let i=0;i<str.length;i++){
            if((NaN(str[1])=true) && (NaN(str[i+1])=false))
                newString+=str[1]*str[i+1]
            }
            console.log(newString);
    }
decodeStr1(two_str1);