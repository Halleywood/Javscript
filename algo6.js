/* 
Parens Valid
Given an str that has parenthesis in it
return whether the parenthesis are valid


const str1 = "Y(3(p)p(3)r)s";
const expected1 = true;

const str2 = "N(0(p)3";
const expected2 = false;
// Explanation: not every parenthesis is closed.

const str3 = "N(0)t ) 0(k";
const expected3 = false;
// Explanation: because the second ")" is premature: there is nothing open for it to close.

const str4 = "a(b))(c";
const expected4 = false;
// Explanation: same number of opens and closes but the 2nd closing closes nothing.

/**
 * Determines whether the parenthesis in the given string are valid.
 * Each opening parenthesis must have exactly one closing parenthesis.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {boolean} Whether the parenthesis are valid.
 */
/*function parensValid(str) {
    let openCount=0;
    let closedCount=0;
    for(var i=0; i<str.length; i++){
            if (str[i]=='('){
                openCount++;
            }
            if (str[i]==')'){
                closedCount++;
            }                
        if (closedCount>openCount){
            return false
        }
    }
    if(openCount != closedCount){
        return false
    }
    else{
        return true
    }
}
console.log(parensValid(str1));
console.log(parensValid(str2));
console.log(parensValid(str3));
console.log(parensValid(str4));
*/
// *****************************************************************



//Braces Valid
//Given a string sequence of parentheses, braces and brackets, determine whether it is valid. 


const str1 = "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!";
const expected1 = true;

const str2 = "D(i{a}l[ t]o)n{e";
const expected2 = false;

const str3 = "A(1)s[O (n]0{t) 0}k";
const expected3 = false;


const str4 = "";
const expected4 = true;

/**
 * Determines whether the string's braces, brackets, and parenthesis are valid
 * based on the order and amount of opening and closing pairs.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {boolean} Whether the given strings braces are valid.
 */
function bracesValid(str) {
    let list=[]
    let opens="([{"
    let opentoClose={
        ')':"(",
        '}': "{",
        ']':"[",
    }
    for(let i=0; i<str.length;i++){
        if(opens.includes(str[i])){
            list.push(str[i])
        }
        else if(str[i] in opentoClose){
            if(opentoClose[str[i]]===list[list.length-1]){
                list.pop()
            }
            else{
                return false
            }
        }
    }
    return list.length===0;
}
console.log(bracesValid(str1));
console.log(bracesValid(str2));
console.log(bracesValid(str3));
console.log(bracesValid(str4));