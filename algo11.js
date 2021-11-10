/* 
Balance Index
Here, a balance point is ON an index, not between indices.
Return the balance index where sums are equal on either side
(exclude its own value).

Return -1 if none exist.

*/
const nums1 = [-2, 5, 7, 0, 3];
const expected1 = 2;

const nums3 = [7, 2, 4, 10, 3, 10];
const expected3 = 3;

const nums2 = [9, 9];
const expected2 = -1;

const nums4 = [7, 2, 4, 10, 3, 13];
const expected4 = -1;

// function balanceIndex(nums) {
//     if(nums.length < 3) {
//         return -1
//     }
//     left=nums[0]
//     right=0

//     for(var i=2; i<nums.length-1;i++){
//         right+=nums[i]
//     }
//     for(var i=1; i<nums.length-1; i++){
//         if(left===right){
//             return i
//         }
//         right -= nums[i + 1]
//         left += nums[i]
//     }
//         return -1
// }

function balanceIndex(nums) {
    if (nums.length < 3){
        return -1
    }

    let left  = nums[0]
    let right = 0

    for (let i=2; i<nums.length; i++){
        right += nums[i]
    }

    for (let i=1; i<nums.length-1; i++){
        if (left === right){
            return i
        }
        right -= nums[i + 1]
        left += nums[i]
    }
    return -1
}

console.log(balanceIndex(nums1))
console.log(balanceIndex(nums3))
console.log(balanceIndex(nums2))
console.log(balanceIndex(nums4))



//     var count=0
//     var reverseCount=0
//     var i=0
//     while (i < nums.length){
//         count+=nums[i]
//         reverseCount+=nums[nums.length-1-i]
//             console.log(count, reverseCount)
//         if(count===reverseCount){
//             console.log(i+1)
//             return 
//         }
//         i++
//     }
// 