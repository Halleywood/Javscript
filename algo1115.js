const num1=5;
const expected1=15;

const num2=2.5;
const expected2=3;

const num3= -1;
const expected3 = 0;

function recursiveSigma(num, i=0){
    //edge case
    num=Math.floor(num)

    if(num <=0){
        return 0
    }
    if( i==num+1){
        return 0
    } 
    return recursiveSigma(num, i+1)+ i
    //recusion call => calls itself
}

console.log(recursiveSigma(num1));
console.log(recursiveSigma(num2));
console.log(recursiveSigma(num3));