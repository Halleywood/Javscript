// In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

// For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

// If you can, try writing it in only one line of code.

function abc (x,y){
    array=[]
    let i=1
    while(i <= y/x){
        array.push(x*i);
        i++;
    }
    return array
}
console.log(abc(2,6))
console.log(abc(13,123))

function findMultiples(int, limit) {
    return Array.from({length: parseInt(limit/int)}, (_,i)=> (i+1)*int )
}
console.log(findMultiples(2,6))

// A number increased by 7 equals 22. Write a function that return
// A number's value. Return null if initial_value or final_value is not a number and when
//  final_value is less than initial_value.

function increaseNumber(initialValue, finalValue) {
    if(isNaN(initialValue) && isNaN(finalValue)){
        return finalValue-initialValue
    }
    else if(finalValue < initialValue){
        return null
    }
    else{
        return null 
    }
}
