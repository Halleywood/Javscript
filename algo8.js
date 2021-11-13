/* 
String: Rotate String
Create a standalone function that accepts a string and an integer,
and rotates the characters in the string to the right by that given
integer amount.
*/

const str = "Hello World";

const rotateAmnt1 = 0;
const expected1 = "Hello World";


const rotateAmnt2 = 1;
const expected2 = "dHello Worl";

const rotateAmnt3 = 2;
const expected3 = "ldHello Wor";

const rotateAmnt4 = 4;
const expected4 = "orldHello W";

const rotateAmnt5 = 13;
const expected5 = "ldHello Wor";

const rotateAmnt6 = 6;
const expected6 = " WorldHello";
/* 
Explanation: this is 2 more than the length so it ends up being the same
as rotating it 2 characters because after rotating every letter it gets back
to the original position.
*/

function rotateStr(str, amnt){
    slice=""
    expected=""
    let x= amnt % str.length
    return (str.slice(str.length-x))+str.slice(0, str.length-x)
}
console.log(rotateStr(str, rotateAmnt6));

/* 
Create the function isRotation(str1,str2) that
returns whether the second string is a rotation of the first.
*/

const strA1 = "ABCD";
const strB1 = "CDAB";
const expected1 = true;
// Explanation: if you start from A in the 2nd string, the letters are in the same order, just rotated

const strA2 = "ABCD";
const strB2 = "CDBA";
const expected2 = false;
// Explanation: all same letters in 2nd string, but out of order

function isRotation(s1, s2) {
    if( s1.length != s2.length || s1===s2){
        return false
    }
    else{
        let text=s2+s2;
        if(text.includes(s1)){
            return true 
        }
        else{
            return false
        }
    }
}
console.log(isRotation(strA1, strB1))
console.log(isRotation(strA2, strB2))