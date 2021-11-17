/* Recursive Factorial 
input: integer
output: integer, product of ints from 1 up to a given integer

If less than 0, treat as zero. 
Bonus: If not integer, truncate. 

rFact(3)=6 
rFact(6.8)=720. 1*2*3*4*5*6
*/

const num1=3;
const expected1=6

const num2=6.8
const expected2=720

const num3=10
const expected=3628800

function rFact(num){
    num=Math.trunc(num)
    if (num <= 0){
        return 1
    }
    return rFact(num-1)*num
}

console.log(rFact(num3));


function fibonacci(num){
    if(num==0){
        return 0
    }
    else if( num < 2){
        return 1
    }
    return fibonacci(num-2) + fibonacci(num-1)
    }
