/* 
  Given a string that may have extra spaces at the start and the end,
  return a new string that has the extra spaces at the start and the end trimmed (removed)
  do not remove any other spaces.
*/

const str1 = "   hello world     ";
const expected1 = "hello world";

const str2 = "   hello  world my friend is tyler     ";
const expected2 = "hello  world my friend is tyler";

/**
 * Trims any leading or trailing white space from the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {string} The given string with any leading or trailing white space
 *    stripped.
 */
function trim(str) {
    newString=""
    count=0
    count2=0
    for (var i=0; i<str.length;i++){
        if (str[i] !="")
        count=1
        break
    }
    for (var i=str.length-1; i>=0; i--){
        if (str[i] != "")
        count2=i
        break
    }
    for(var i=count; i<=count2; i++){
        newString+=str[i]
    }
    return newString
}
console.log(trim(str1))
console.log(trim(str2))
// ******************************************************************


/* 
  An anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
  typically using all the original letters exactly once.
  Is there a quick way to determine if they aren't an anagram before spending more time?
  Given two strings
  return whether or not they are anagrams
*/

const strA1 = "yes";
const strB1 = "eys";
const expected1A = true;

const strA2 = "yes";
const strB2 = "eYs";
const expected2A = true;

const strA3 = "no";
const strB3 = "noo";
const expected3A = false;

const strA4 = "silent";
const strB4 = "listen";
const expected4A = true;

/**
 * Determines whether s1 and s2 are anagrams of each other.
 * Anagrams have all the same letters but in different orders.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean} Whether s1 and s2 are anagrams.
 */
function isAnagram(s1, s2) {
    if (s1.length != s2.length){
        return false
    }
    const s1CharFreq={}
    const s2CharFreq={}
    for(let i=0;i<s1.length;i++){
        s1CharUpper=s1[i].toUpperCase()
        s2CharUpper=s2[i].toUpperCase()
    }
        if (s1CharFreq.hasOwnProperty(s1CharUpper)){
            s1CharFreq[s1CharUpper]++
    }
        else{
            s1CharFreq[s1CharUpper]=1
        }
        if (s2CharFreq.hasOwnProperty(s2CharUpper)){
            s2CharFreq[s2CharUpper]++
    }
        else{
            s2CharFreq[s1CharUpper]=1
        }
}