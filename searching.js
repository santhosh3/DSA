/**
 * SEARCHING ALGORITHEMS DSA
 */
/*
let arr = [1,2,3,4,5,6,7,8,9,10]
console.log(arr.indexOf(10))             //we can search by using index
console.log(arr.includes(10))            //IF IT IS THERE TRUE OTHERWISE FALSE
console.log(arr.findIndex(x=>x > 5))     //IT WILL GOING TO WRITE INDEX OF NUMBER WHICH IS GREATER THAN 5
console.log(arr.find(x=>x > 5))          //IT WILL GOING TO WRITE DIGIT GREATER THAN 5
*/

/**
 * OBJECTIVES
 * => DESCRIBE WHAT IS SEARCHING ALGO IS
 * => IMPLEMENTING LINEAR SEARCH ON ARRAYS
 * => IMPLEMENTING BINARY SEARCH ON SORTED ARRAY
 * => IMPLEMENTING A NATIV STRING SEARCH ALGO
 * => IMPLEMENTING THE KMP STRING SEARCHING ALGO 
 */

// LINEAR SEARCH
/**
 * GIVEN ARRAY, THE SIMPLEST WAY TO SEARCH FOR AN VALUE IS TO LOOK AT EVERY ELEMENT IN THE ARRAY AND CHECK IF IT'S THE VALUE WE WANT
 * THIS FUNCTION ACCEPTS AN ARRAY AND A VALUE
 * LOOP THROUGH THE ARRAY AND CHECK IF THE CURRENT ARRAY ELEMENT IS EQUAL TO THE VALUE
 * IF IT IS RETURN THE INDEX AT WHICH THE ELEMENT IS FOUND
 * IF THE VALUE IS NEVER FOUND RETURN -1
 */

// function linearSearch(arr,val) {
//     for(let value of arr) {
//         if(value === val) return 1
//     }
//     return -1
// }
// let search = linearSearch([34,56,1,2], 56)
// console.log(search) 

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*   (BINARY SEARCH)     

BINARY SEARCH ALGO WILL WORK FOR THE SORTED ARRAY AND TIME COMPLEXITY OF BINARY SEARCH IS O(n) or O(logN)        
 
                                                                             */

// Original Solution
// function binarySearch(arr, elem) {
//     var start = 0;
//     var end = arr.length - 1;
//     var middle = Math.floor((start + end) / 2);
//     while(arr[middle] !== elem && start <= end) {
//         if(elem < arr[middle]){
//             end = middle - 1;
//         } else {
//             start = middle + 1;
//         }
//         middle = Math.floor((start + end) / 2);
//     }
//     if(arr[middle] === elem){
//         return middle;
//     }
//     return -1;
// }
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Refactored Version
// var findInMountainArray = function(arr, elem) {
//     var start = 0;
//     var end = arr.length - 1;
//     var middle = Math.floor((start + end) / 2);
//     while(arr[middle] !== elem && start <= end) {
//         if(elem < arr[middle]) end = middle - 1;
//         else start = middle + 1;
//         middle = Math.floor((start + end) / 2);
//     }
//     return arr[middle] === elem ? middle : -1;
// }

// let search = findInMountainArray([1,2,3,4,5,3,1], 3)
// console.log(search)
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/**
 * NATIVE STRING SEARCH
 * => SUPPOSE YOU WANT TO COUNT THE NUMER OF TIMES A SMALLER STRING APPEARE IN A LONGER STRING 
 * => A STRINGHTFORWARD APPROCH INVOLVES CHECKING PAIRS OF CHARACTERS INDIVIDUALLY
 * PSEUDOCODE
 * ==> LOOP OVER THE LONGER STRING
 * ==> LOOP OVER THE SHORTER STRING
 * ==> IF THE CHAR DON'T MATCH BREAK OUT OF THE INNER LOOP
 * ==> IF THE CHAR DO MATCH KEEP GOING
 * ==> IF U COMPLETED THE INNER LOOP AND FING THE MATCH, INCREMENT THE COUNT OF THE MATCH.
 * ==> RETURN THE COUNT
 */

//  function naiveSearch(long, short){
//     var count = 0;
//     for(var i = 0; i < long.length; i++){
//         for(var j = 0; j < short.length; j++){
//            if(short[j] !== long[i+j]) break;
//            if(j === short.length - 1) count++;
//         }
//     }
//     return count;
// }
// let NativeSearch = naiveSearch("lorie lolelold", "lol")
// console.log(NativeSearch)
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function naiveSearch(long, short){
        var count = 0;
        for(var i = 0; i < long.length; i++){
            for(var j = 0; j < short.length; j++){
               if(short[j] !== long[i+j]) break;
               if(j === short.length - 1) count++;
               if(j === short.length - 1 && count == 1){
                  return i
               }
            }
        }
    }
//     let NativeSearch = naiveSearch("dkljviulwerhwilruoypetiuhsklfakdcbvsduforywoerpqiuieuirkjflkfhskjdfhsodfiypqouwrypweurywuietryuitgdjgljhfsjkfhsfklsjahfajksfhkjhfvcmnbvnbzvfljsfglkjashrweiouyrpqueyqpeoyepiurylafghdsjfghpauryuqpruiyeitueaflalkjhdsjakdfz,mvbzmbxvjkfghlaskjfhuiwyeoiuwyepquyrqwpruyqruqyeruiweriugpiulajkagfjkhforqwpuwqpiuewrughvbmcvnbmmznxvkaghfsiufweoiuyoiryioqyriouryiuryqiupuqwyeoiwuewqpuoeyoryuiperypiuysfhkjfhlafhdjkfhqwoieuwquyuryfhjsgdfjsgfsiugfoaiufyperuiqyrpqwruywquiyjkfgsldjfgsdljfhsdjkfhwueirywieyiuyuiasaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaweeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvbfindmeherekkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkdsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjcanyoufindmesssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssscanyoufindmeggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnncanyoufindmebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb", "canyoufindme")
//     console.log(NativeSearch)
let SEARCH = naiveSearch("CodeZingeZinger", "Zinger")
console.log(SEARCH)
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function uniqueFreq(b) {
//         let Obj = {}
//         for(let element of b) {
//                 Obj[element] = Obj[element] + 1 || 1
//         }
//         let arr = Object.values(Obj)
//         let Obj1 = {}
//         arr.map(ele => {Obj1[ele] = Obj1[ele] + 1||1})

//         let keys = Object.keys(Obj1)
//         let newArr = []
//         keys.map(x => {if(Obj1[x] == 1) {newArr.push(x)}})
//         return newArr
// }
// let result = [1,2,3,3,4]
// console.log(uniqueFreq(result))

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function longestSubString(str) {
// let end = 0
// let start = 0
// let maxlength = 0

// const uniqueCharSet = new Set();
// while(end < str.length) {
//     if(!uniqueCharSet.has(str[end])) {
//         uniqueCharSet.add(str[end]);
//         end++;
//        if(uniqueCharSet.size > maxlength) {
//          maxlength = uniqueCharSet.size
//        }
//     }
//     else {
//         uniqueCharSet.delete(str[start])
//         start++
//     }
// }
// return maxlength
// }
// const result = longestSubString('abaabcbb')
// console.log(result)

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function longestSubString(str) {
//     indexStartOfLongestSub = 0
//     indexEndOfLongestSub = 0

//     SwStart = 0
//     SwLast = 0

//     windowMap = {}

//     while(SwLast <= String.length) {
//         if(!windowMap[str[SwLast]]) {
//             windowMap[str[SwLast]] = 1
//             if(SwLast - SwStart > indexEndOfLongestSub - indexStartOfLongestSub){
//                 indexStartOfLongestSub = SwStart
//                 indexEndOfLongestSub = SwLast
//             }
//             SwLast++
//         }
//         else {
//             while(str[SwStart] != str[SwLast]) {
//                 SwStart++
//                 delete windowMap[str[SwStart]]
//             }
//         }
//     }
//     return (indexStartOfLongestSub, indexEndOfLongestSub)
// }

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 
// const result = longestSubString('abcdefgh')
// console.log(result)

// for(let i = 0; ; i++){
//     console.log(i)
// }

// let arr = [{a:1},{b:2},{c:3}]
// let arr2 = [...arr]
// console.log(arr2)
// console.log(arr)

// let arr3 = []

// for(let i = 0; i < arr.length; i++) {
//     arr3.push({...arr[i]})
// }
// console.log(arr3)

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//MAXIMUM SUBARRAY
/**
 * INPUT [-2,1,-3,4,-1,2,1,-5,4]
 * OUTPUT 6  ==> [4,-1,2,1]               6 IS THE LARGEST SUM
 */
// function maxSubArray (nums){
//     let solution = nums[0]

//    //  for(let i = 1; i < nums.length; i++)
// }

// [-2,1,-3,4,-1,2,1,-5,4]
// [-2,1,-3,4,-1,2,1,-5,4]
// [-2,1,1,4,-1,2,1,-5,4]
// [-2,1,1,5,-1,2,1,-5,4]
// [-2,1,1,5,4,2,1,-5,4]
// [-2,1,1,5,4,6,1,-5,4]
// [-2,1,1,5,4,6,7,-5,4]
// [-2,1,1,5,4,6,7,2,4]
// [-2,1,1,5,4,6,7,2,6]

// function dublicates(arr) {
//     const map = new Map()
//     for(let el of arr){
//      if(map.get(el))  map.set(el,map.get(el)+1)
//      else   map.set(el,1)
//     }
//     return map
// }
// let arr = [23,3,2,1,3,1]
// console.log(dublicates(arr))
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function minwindow(str) {
//     let mapStr = {}
//     let distinct = 0;
//     for (let el of str) {
//         if (mapStr[el]) {
//             mapStr[el]++
//         }
//         else {
//             mapStr[el] = 1
//             distinct++
//         }
//     }


//     let mapWindow = {}
//     let i = 0;
//     let j = 0;
//     let count = 0
//     let minLength = str.length;
//     let minStr = ""
//     while (j != str.length) {
//         if (mapWindow[str[j]]) {
//             mapWindow[str[j]]++
//         } else {
//             mapWindow[str[j]] = 1
//             count++
//         }
//         if (count < distinct) {
//             j++;
//         } else if (count == distinct) {
//             while (count == distinct) {
//                 if (minLength > j - i + 1) {
//                     minLength = j - i + 1;
//                     minStr = str.slice(i, j + 1)
//                 }
//                 mapWindow[str[i]]--;
//                 if (mapWindow[str[i]] == 0) {
//                     count--
//                 }
//                 i++;
//             }
//             j++
//         }
//     }
//     return [minLength, minStr].join(", ");
// }
// let result = "aaabccbbdabbc"
// console.log(minwindow(result))
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const arr = [2,3,4,5,6,7,8,9];
// const k = 15;
// function findPairs(arr,k){
//     let start = 0
//     let end = arr.length - 1
//     let array = []
//     while(start < end){
//         if(arr[start] + arr[end] === k){
//             array.push([start, end])
//         }
//         else if(arr[start] + arr[end] <= k){
//             start++;
//         }
//         else {
//             end--;
//         }
//     }
//     return array
// }
// console.log(findPairs(arr,k))


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// var findAnagrams = function(s, p) {
//     let hashMap = new Map()
//     for(let i = 0; i < p.length; i++) {
//         if(hashMap.has(p[i])) {                         // THIS WILL GOING TO MAP ALL THE ELEMENTS IN P 
//             hashMap.set(p[i], hashMap.get(p[i]) + 1)    // a => 1, b => 1, c => 1
//         } else {
//             hashMap.set(p[i], 1)
//         }
//     }
//     console.log(hashMap)
//     let res = new Array()
//     let start = 0, end = 0                            // TWO POINTERS USED START = 0 AND END = 0
//     while(end < s.length) {                           // INETRATE ALL OVER THE LENGTH OF LONGEST STRING                                                      // C IS HAVING IN THE MAP SO IF COND SATISFY
//         if(hashMap.get(s[end]) > 0) {
//             hashMap.set(s[end], hashMap.get(s[end]) - 1)        // a => 1, b => 1, c => 0 *** a => 1, b => 0, c => 0 *** a&b&c => 0
//             end++                                               // end = 1;                   end = 2                    end = 3
//             if(end - start == p.length) {
//                 res.push(start)
//             }
//         } else if(start == end) {
//             start++
//             end++
//         } else {
//             hashMap.set(s[start], hashMap.get(s[start]) + 1)   //
//             start++
//         }
//     }
//     return res
// };

// let s = "cbaebabacd", p = "abc"
// console.log(findAnagrams(s,p))
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
///find all the anagrams in the given string
// str1 = cbaebabacd        str2 = abc
// TIME COMPLEXITY 
// SORT AN STRING IF IT IS NEEDED 
// SLIDING WINDOW APPROCH
// str2 array [0,0,0,0,0,0,0,0,0,0,0,0,0] // 26 zeroes

// function searchAnagrams(str1,str2){
//     let map = new Map()
//     for(let el of str2){
//         if(!map.get(el)) map.set(el, 1)
//         else map.set(el, map.get(el)+1)
//     }
//     let start = 0
//     let end = 0
//     let result = []
//     while(end < str1.length){
//         if(map.get(str1[end])) {
//             map.set(str1[end], map.get(str1[end] - 1))
//             end++
//             if(end - start == str2.length){
//                 result.push(start)
//             }
//         }
//         else if(start == end){
//             start++;
//             end++
//         }
//         else{
//             map.set(str1[start], map.get(str1[start]+1))
//             start++
//         }
//     }
//     return result
// }
// let str1 = "cbaebabacd", str2 = "abc"
// console.log(searchAnagrams(str1,str2))
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    // let lengthOfLongestString = (str) => {
    //     let max = 0
    //     let windowStart = 0
    //     let obj = {}
    //     let str2 = ""
        
    //     for(let windowEnd = 0; windowEnd < str.length; windowEnd++){
    //         let rightChar = str[windowEnd]
    //         obj[rightChar] = obj[rightChar]+1 || 1

    //         while(obj[rightChar] > 1){
    //             let leftChar = str[windowStart]
    //             if(obj[leftChar] > 1){
    //               obj[leftChar]--
    //             }else{
    //                 delete obj[leftChar];
    //             }
    //             windowStart++
    //         }
    //         if(max < windowEnd - windowStart + 1)
    //         {
    //             max = windowEnd - windowStart + 1
    //             str2 = str.slice(windowStart,windowEnd+1)
    //         }
    //     }
    //     return [max,str2].join(",")
    // }
    // let str = "abaccabb"
    // console.log(lengthOfLongestString(str))
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    // var strStr = function(haystack, needle){
    //     if(needle == "")return 0
    //     for(let i = 0; i < haystack.length; i++){
    //         let j = 0
    //         while(j < needle.length && needle[j] == haystack[i+j]){
    //             j++
    //         }
    //         if(j == needle.length){
    //             return i
    //         }
    //     }
    //     return -1
    // }
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
   var searchString = function(string, subString){
    if(subString == "") return 0
    
   }