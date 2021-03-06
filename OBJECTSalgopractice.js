
  /*
  Given two arrays, create an associative array (aka hash map, an obj / dictionary) containing keys from the first array, and values from the second.
  Associative arrays are sometimes called maps because a key (string) maps to a value 
 */


const keys1 = ["abc", 3, "yo"];
const vals1 = [42, "wassup", true];
const expected1 = {
    abc: 42,
    3: "wassup",
    yo: true,
  };

  const keys2 = ["abc", 3, "yo", "bro"];
  const vals2 = [42, "wassup", true];
  const expected2 = {
    abc: 42,
    3: "wassup",
    yo: true,
    bro: null
  };

  const keys3 = ["abc", 3, "yo"];
  const vals3 = [42, "wassup", true, 'bro'];
  const expected3 = {
    abc: 42,
    3: "wassup",
    yo: true,
    "?":"?"
  };
  
  /**
   * Converts the given arrays of keys and values into an object.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Array<string>} keys
   * @param {Array<any>} values
   * @returns {Object} The object with the given keys and values.
   */
 function zipArraysIntoMap(keys, values) {
    let newObj={};
    if (keys.length===values.length){
        for (var i=0;i<keys.length;i++){
            newObj[keys[i]]=values[i];
        }  
    }
    else{
        console.log("unable to perform zipArraysIntoMap. keys != values length")
        return newObj={};
    }
    return newObj
}

console.log(zipArraysIntoMap(keys1,vals1));
console.log(zipArraysIntoMap(keys2,vals2));
console.log(zipArraysIntoMap(keys3,vals3));



/*  Invert Hash
  A hash table / hash map is an obj / dictionary
  Given an object / dict,
  return a new object / dict that has the keys and the values swapped so that the keys become the values and the values become the keys
*/

const two_obj1 = { name: "Zaphod", charm: "high", morals: "dicey" };
const two_expected1 = { Zaphod: "name", high: "charm", dicey: "morals" };

const two_obj2 = { name: "Zaphod", charm: "high", morals: "dicey", something: "dicey" };
// const expected1 = { Zaphod: "name", high: "charm", dicey: ["morals","something"] };
// const expected1 = { Zaphod: "name", high: "charm", dicey: "something" };
// const expected1 = { Zaphod: "name", high: "charm", dicey: "morals", dicey1: "something" };

/**
 * Inverts the given object's key value pairs so that the original values
 * become the keys and the original keys become the values.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Object<string, string>} obj An object with string keys and string values.
 * @return The given object with key value pairs inverted.
 */
function invertObj(obj) {
    expected={};
    arr=[];
    keyArray=Object.keys(obj)
    valueArray=Object.values(obj);
    for (var i=0; i<valueArray.length;i++){
        if (expected.hasOwnProperty(valueArray[i])){
            if(typeof obj[valueArray] ==='string'){
                arr=[obj[valueArray], key]
            }
            else if (typeof obj[valueArray] === 'object'){
                obj[value].push(key)
            }

            obj[valueArray] = arr
        }
        else{
            expected[valueArray[i]]=keyArray[i];
        }
    }
    console.log(expected);
    return expected;
}
invertObj(two_obj1);
invertObj(two_obj2);
//can you make list for multiple keys??
