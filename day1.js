// BIG O DEFINES PERFORMANCE WHEN INPUT IS GETTING INCREASES
// BIG O WORST CASE SENARIO AVERAGE THEN 
// CONSTANT ZONE MATTER AND OTHER IS SMALLER TERMS NO MATTER AND LARGER TERMS DOMINATING

// let obj = {}

// obj.firstName = 'santhosh',
// obj.lastName  = 'chinna'

// console.log(obj['lastName']) //or console.log(obj.lastName)
// // access time complexity is O(n)
// // deletion time complexity is O(1)
// // searching time complexity is O(n)
// // time complexity of Object keys and value is O(n)
// console.log(obj.hasOwnProperty('firstName')) // O(n)

// function slidingWindow(arr,k) {
//    let maxSumSoFar = 0
//   // let subArr = []
//    for(let i = 0; i < arr.length; i++) {
//     let sum = 0 
//     for(let j = i; j < k; j++)
//     {
//         sum = sum + arr[j]
//     }
//     return sum
//     if(sum > maxSumSoFar) {
//         maxSumSoFar = sum 
//     }
//    }

// }
// let array = [23,34,6,2,43,89,9,3,2,7]
// console.log(slidingWindow(array),3)

// function A(arr,k) {
//     let sum = 0 
//     for(let i = 0; i < k; i++)
//     {
//         sum = sum + arr[i]
//     }
//     return sum
// }
// let a = [23,34,6,2,43,89,9,3,2,7]
// A((a),3)

// function sliding(arr,k) {
//     let sum = 0 
//     for(let i = 0; i < k; i++)
//     {
//         sum = sum + arr[i]
//     }
//     return sum
// }

// var maxImportance = function(n,roads) {
//     let map = new Map();
// for(let el of roads) {
//     if(map.get(el[0])) {
//         map.set(el[0],map.get(el[0]) + 1)
//     } else {
//         map.set(el[0],1)
//     }
//     if(map.get(el[1])) {
//         map.set(el[1],map.get(el[1]) + 1)
//     } else {
//         map.set(el[1],1)
//     }
// }
// return map
//     for(let i = 0; i < roads.length; i++)
//     {
//         if(map.has(roads[i][0])){
//             map.set(roads[i][0], map.get(roads[i][0])+1)
//         }else{
//             map.set(roads[i][0],1)
//         }
//         if(map.has(roads[i][1])){
//             map.set(roads[i][1], map.get(roads[i][1])+1)
//         }else{
//             map.set(roads[i][1],1)
//         }
//     }

//     let sorted = [...map.entries()].sort((a,b)=> b[1]-a[1])
//     let newMap = new Map()
//     for(let i = 0; i < sorted.length; i++){
//         newMap.set(sorted[i][0],n--)
//     }
//     let sum = 0
//     for(let i = 0; i < roads.length; i++){
//         sum = sum + newMap.get(roads[i][0]) + newMap.get(roads[i][i])
//     }
//     return sum
// }

// let n = 5;
// let roads = [[0,1],[1,2],[2,3],[0,2],[1,3],[2,4]]
// console.log(maxImportance(n,roads))
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// (function(){
//     console.log(1);
//     setTimeout(function(){console.log})
// })

// let arr = [1,23,45,56,21,32,34]

// //arr.splice(arr.indexOf(23),1)
// arr[2] = 999

// console.log(arr)

// var arr = [ 'A', 'B', 'D', 'E' ];
// arr.insert(2, 'C');
// console.log(arr)

//
//console.log(Number.MAX_SAFE_INTEGER)
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// LEETCODE - 340
// Longest Substring with At Most k

// String is 'eceba' and k = 2    here k rep atmost k dist characters
//        sustring is e,ec,ece,eceb,eceba,c,ce,ceb,ceba,e,eb,eba,b,ba,a
//                    1,1,  1,  0,    0,  1,1,  0 , 0,  1, 1, 0, 1, 1,1  
// SLIDING WINDOW  --> WINDOW START, WINDOW END, MAX, SOFAR,MAPDATA STRUCTURE

//        EXPLANATION => start   end       max      object                           how to calculate  size is end - start + 1  
//                        e       e         1        e:1                size is 1                              0   - 0     + 1 = 1
//                        e       c         2        e:1, c:1           size is 2                              1   - 0     + 1 = 2
//                        e       e         2        e:2, c:1           size is 2                              2   - 0     + 1 = 3  till now this is largest
//                        e       b size is greater than  k start will increment by 1   e:2, c:1, b:1          
//                        c       b size is greater than  k start will increment by 1   e:1, c:1, b:1
//                        e       b         2        e:1, b:1                                                  3   - 2     + 1 = 2     
//                        e       a size is greater than  k start will increment by 1   e:1, b:1, a:1
//                        b       a         2        b:1, e:1           size is 2                              4   - 3     + 1 = 2

// function length(s, k) {
//     let windowStart = 0;
//     const map = new Map();
//     let max = 0
//     let str = ""

//    for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
//         let rightChar = s[windowEnd];
//         if (!map.get(rightChar)) map.set(rightChar, 1);
//         else map.set(rightChar, map.get(rightChar) + 1);

//         while (map.size > k) {
//             let leftChar = s[windowStart];
//             if(map.get(leftChar) > 1) map.set(leftChar, map.get(leftChar) - 1);
//             else map.delete(leftChar)
//             windowStart++
//         }
//         if(max < windowEnd - windowStart + 1) {
//             max = windowEnd - windowStart + 1
//             str = s.slice(windowStart,windowEnd+1)
//         }
//     }
//     return [max,str].join(", ")
// }
// let slength = "eceba"
// console.log(length(slength,2))

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let lengthOfLongestString = function(s) {
//     let max = 0
//     let windowStart = 0
//     let obj = {}
//     let str = ""

//     for(let windowEnd = 0; windowEnd < s.length; windowEnd++){
//         let rightChar = s[windowEnd];
//         obj[rightChar] = obj[rightChar] + 1 || 1;

//         while(obj[rightChar] > 1){
//             let leftChar = s[windowStart];
//             if(obj[leftChar] > 1){
//                 obj[leftChar]--
//             }else{
//                 delete obj[leftChar];
//             }
//             windowStart++
//         }
//         if(max < windowEnd - windowStart + 1) {
//             max = windowEnd - windowStart + 1
//             str = s.slice(windowStart, windowEnd+1)
//         }
//     }
//     return [max,str].join(',')
// }

// let str = "abbcabcbb"
// console.log(lengthOfLongestString(str))
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// FIND ALL VALID ANAGRAMS IN A STRING          LEETCODE 438
// Input: s = "cbaebabacd", p = "abc"
// Output: [0,6]

//  cbaebabacd  P = abc

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function uniqueElem(arr){
    // let map = new Map()
    // for(let el of arr){
    //     if(!map.get(el)) map.set(el,1)
    //     else map.set(el, map.get(el)+1)
    // }
//     let unique = []
//     for(let pairs of map){
//         if(pairs[1] == 1) unique.push(pairs[0])
//     }
//     return unique
// }
// let result = [1,1,2,22,3,5,11,2]
// console.log(uniqueElem(result))
//OUTPUT = [2,22,3,11]
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//UNIQUE PAIRS OF ELEMENT WHOSE SUM IS EQUAL TO A TARGET K

// function uniquePairs(arr,sum) {
//     let map = {}
//     for(let el of arr){
//         map[el] = map[el] + 1 || 1;
//     }
//     let pairs = {}
//     for(let el of arr){
//         let temp = sum - el
//         if(map[temp]){
//             if(pairs[el] === undefined && pairs[temp] === undefined){
//                 pairs[el] = temp
                
//             }
//         }
//     }
//     //return Object.keys(pairs).length !==0 ? Object.keys(pairs).length : -1
//     return JSON.stringify(pairs)
// }
// let result = [1,1,2,22,3,105,-100,5,11,2]
// console.log(uniquePairs(result,5))

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function countUnique(arr){
//    let set = new Set()
//    for(let el of arr){
//     set.add(el);
//    }
//    return set.size
// }
// const result = countUnique([1,2,1,2,3,1,6,4,2,4,5,2,1,2,4,5,3,2,5])
// console.log(result)
// //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// function uniqueCount(arr){
//     let map = new Map()
//     let unique = 0
//     for(let el of arr){
//         if(!map.get(el)){
//             unique++;
//             map.set(el,1)
//         }
//     }
//     return unique
// }
// const result1 = uniqueCount([1,2,1,2,3,1,6,4,2,4,5,2,1,2,4,5,3,2,5])
// console.log(result1)
// //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function uniqueObj(arr){
//     let Obj = {}, count = 0
//     for(let el of arr){
//         if(!Obj[el]){
//             Obj[el] = 1;
//             count++
//         }
//     }
//    return count
// }
// const result2 = uniqueObj([1,2,1,2,3,1,6,4,2,4,5,2,1,2,4,5,3,2,5])
// console.log(result2)
// //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function uniqueArr(arr){
//     let arr1 = []
//     for(let el of arr){
//         if(!arr1.includes(el)){
//             arr1.push(el)
//         }
//     }
//     return arr1.length
// }
// const result3 = uniqueArr([1,2,1,2,3,1,6,4,2,4,5,2,1,2,4,5,3,2,5])
// console.log(result3)
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let result = [...new Set([1,2,1,2,3,1,6,4,2,4,5,2,1,2,4,5,3,2,5])]
// console.log(result.length)

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function isValidNumber(input){
//     let isNumber = true;
//     for(let i = 0; i < input.length; i++){
//         if(input[i] > "0" && input[i] <= "9"){
//             continue;
//         }else {
//             isNumber = false;
//             break;
//         }
//     }
//     return isNumber
// }
// console.log(isValidNumber("1234455657634"))
 
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function isValidNumberUsingRegExp(input){
//     const regex = new RegExp("^[0-9]+$")
//     return regex.test(input)
// }
// console.log(isValidNumberUsingRegExp("1234566k7"))

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function checkGivenSumPairExistsOrNot(arr,sum){
//     const map = new Map()
//     for(let el of arr){
//         if(map.get(el)){
//             map.set(el, map.get(el)+1)
//         }else{
//             map.set(el,1)
//         }
//     }
//     for(let i = 0; i < arr.length; i++){
//         let nextElement = sum - arr[i];
//         if(map.get(nextElement)){
//             if(nextElement == arr[i]  && map.get(nextElement) > 1){
//                 console.log("pair Exist")
//                 break;
//             }else if(nextElement == arr[i] && map.get(nextElement) == 1){
//                 console.log("pair Not Exist")
//                 break;
//             }
//             console.log("pair Exist")
//         }
//     }
// }
// (checkGivenSumPairExistsOrNot([9,2,4,5,9,7,4,5],10))

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function isPrime(number){
//     for(let i = 2; i <= parseInt(number/2); i++){
//         if(number % i == 0) return false;
//     }
//     return true;
// }

// function first1000PrimeNumbers(){
//     let count = 1;
//     let number = 100;
//     while(count < 500){
//         if(isPrime(number)){
//             count++
//             console.log(`${count}) ${number}`)
//         } 
//         if(number < 500) number++
//     }
// }
// first1000PrimeNumbers();

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//let Array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,28,29,20]
// const getPrimes=num=>Array(num-1).fill().map((e,i)=>2+i).filter((e,i,a)=>a.slice(0,i).every(x=>e%x!==0));
// console.log(getPrimes(500))
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//   var productExceptSelf = function(nums) {
//     const left = new Array(nums.length).fill(0);
//     left[0] = 1;
//     const right = new Array(nums.length).fill(0);
//     right[right.length - 1] = 1;
    
//       for(let i = 1; i < nums.length; i++){
//           left[i] = nums[i-1] * left[i-1]
//       }
//       for(let i = right.length - 2; i >= 0; i--){
//           right[i] = nums[i+1] * right[i+1]
//       }
//       for(let i = 0; i < nums.length; i++){
//           nums[i] = right[i] * left[i]
//       }
//       return nums
//   };

//   console.log(productExceptSelf([1,2,3,4]))

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// var longestPalindrome = function(s) {
//     const stringLength = s.length;
//     if( s === "" || stringLength == 0 ){
//         return s;
//     }
//     let maxLength = 1;
//     let low, high;
//     let start = 0;
//     for(i = 1; i < stringLength; i++){
//         // check for even length palindrome substring
//         low = i - 1;
//         high = i;
//         while(low >= 0 && high < stringLength && s[low] === s[high]){
//             if( high - low + 1 > maxLength ){
//                 start = low;
//                 maxLength = high - low + 1;
//             }
//             low--;
//             high++;
//         }
//         // check for odd length palindrome substring
//         low = i - 1;
//         high = i + 1;
//         while(low >= 0 && high < stringLength && s[low] === s[high]){
//             if( high - low + 1 > maxLength ){
//                 start = low;
//                 maxLength = high - low + 1;
//             }
//             low--;
//             high++;
//         }
//     }
//     return s.substring(start, start + maxLength);
// };
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const str = 'aabbbc';
// const secondMostFrequent = str => {
//    const strArr = str.split('');
//    const map = strArr.reduce((acc, val) => {
//       if(acc.has(val)){
//          acc.set(val, acc.get(val) + 1);
//       }else{
//          acc.set(val, 1);
//       };
//       return acc;
//    }, new Map);
//    const frequencyArray = Array.from(map);
//    return frequencyArray.sort((a, b) => {
//       return b[1] - a[1];
//    })[1][0];
   
// };
// console.log(secondMostFrequent(str));

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function secondMostFreq(str) {
//     const strArr = str.split('');
//     let map = new Map()
//     for(let el of strArr){
//         if(!map.get(el)) map.set(el,1)
//         else map.set(el, map.get(el)+1)
//     }
//     let secondFreq = Array.from(map);
//     return secondFreq.sort((a,b) => {return b[1] - a[1]})[1][0];
// }
// console.log(secondMostFreq('aabbbc'))

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++




// function sort01(arr){
//     let curr=0,count0=0
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]===0){
//         count0++
//         }
//     }
//     let count1=arr.length-count0
//     while(count0>0){
//         arr[curr]=0
//         count0--
//         curr++
//     }
//     while(count1>0){
//         arr[curr]=1
//         count1--
//         curr++
//     }
// }
// const arr=[1,1,1,0,0,1,0,1,0,1,1]
// sort01(arr)
// console.log(arr)
// //++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function withoutPair(arr){
//     let map = new Map()
//     for(let el of arr){
//         //if curr element value find in array
//         if(map.get(el)){
//             // increment the frequency count by 1
//             map.set(el, map.get(el)+1)
//         }else{
//             map.set(el,1)
//         }
//     }
//     console.log(map)
//     for(let el of map){
//         if(el[1] % 2 === 1){
//             console.log("without pair of numbers is", el[0]);
//         }
//     }
// }

// withoutPair([11,1, 7 , 11,1, 2,2, 3,3,3, 48,4,4,48])
// //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// // write a function to calculate the sum of three consecutive elements in an array.

// function simpleMaxSumOf3Consecutive(arr,k=3){
//      if(arr.length < k){
//         return null;
//      }
//      let currMax = -Infinity;
//      for(let i = 0; i < arr.length - k + 1; i++){
//         let sum = 0;
//         for(let j = 0; j < k; j++){
//             sum = sum + arr[i+j];
//         }
//         if(sum > currMax){
//             currMax = sum
//         }
//      }
//      return currMax
// }
// console.log(simpleMaxSumOf3Consecutive([11,1,7,11,1,2,2,3,3,3,48,100,4,48]))

// //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function simpleMaxSumOf3Consecutive1(arr,k=3){
//     if(arr.length < k){
//        return null;
//     }
//     let maxSum = 0
//     let tempSum = 0

//     for(let i = 0; i < k; i++){
//         maxSum += arr[i] 
//     }
//     tempSum = maxSum;
//     for(let i = k; i < arr.length; i++){
//         tempSum = tempSum - arr[i-k] + arr[i]
//         if(tempSum > maxSum){
//             maxSum = tempSum
//         }
//     }
//     return maxSum
// }

// console.log(simpleMaxSumOf3Consecutive1([11,1,7,11,1,2,2,3,3,3,48,100,4,48]))

// // //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// MERGING THESE 2 ARRAYS (WRITE A FUNCTION TO MERGE THESE TWO ARRAYS AND RESULT SHOULD BE LIKE THIS)

// let arr1 = [
//     {name: "a", value: 123},
//     {name: "b", value: 666},
// ];

// let arr2 = [
//     {name: "c", value: 444},
//     {name: "d", value: 999},
//     {name: "e", value: 111},
//     {name: "f", value: 789},
// ];

// //console.log([...arr1,...arr2])

// function mergeArrays(arr1,arr2,res=[]){
//     let arr1currIndex = 0;
//     let arr2currIndex = 0;

//     while(arr1currIndex < arr1.length && arr2currIndex < arr2.length){
//         if(arr1[arr1currIndex].name > arr2[arr2currIndex].name){
//             res.push(arr2[arr2currIndex]);

//         }
//     }

// }
//+++++++++++++++++++++++++++++++++++++++++++++++++++++

// function twoSum(nums, target) {
//     let numObj = {};
//       for (let i = 0; i < nums.length; i++) {
//         let complement = target - nums[i];
//         if (numObj[complement] !== undefined) {
//           return [numObj[complement], i];
//         }
//         numObj[nums[i]] = i;
//       }
//     }

// let nums = [2,7,11,15]
// let target = 9
// console.log(twoSum(nums,target ))

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// var maximumImportance = function(n, roads) {
//   let map = new Map()
//   for(let el of roads){
//       if(map.get(el[0])){
//           map.set(el[0], map.get(el[0]) + 1)
//       }else{
//           map.set(el[0],1)
//       }
//       if(map.get(el[1])){
//           map.set(el[1], map.get(el[1]) + 1)
//       }else{
//           map.set(el[1],1)
//       }
//   }
//   //assign values here from 1,2,3,4,5;
//   let newMAp = new Map()
//   const newMap = [...map.entries()].sort((a,b) => b[1] - a[1])
//   for(let i = 0; i < newMap.length; i++){
//       newMAp.set(newMap[i][0], n--)
//   }  
//   console.log(newMap)
//   console.log(newMAp)
//   let sum = 0
//   for(let i = 0; i < roads.length; i++){
//       sum = sum + newMAp.get(roads[i][0]) + newMAp.get(roads[i][1])
//       console.log(sum)
//   }
  
//   return sum
// };

// let  n = 5, roads = [[0,1],[1,2],[2,3],[0,2],[1,3],[2,4]]
// console.log(maximumImportance(n,roads))

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//MAXIMUM WORD SENTENCE

// function maximumWord(sentence){
//   let max = 0
//   for(let currSentence of sentence){
//     let currwordCount = currSentence.split(" ").length
//     let word = currSentence.split(" ")
//     console.log(word)
//     if(currwordCount > max){
//       max = currwordCount
//     }
//   }
//   return max;
// }
// console.log(maximumWord(["please wait for me", "continue to fight", "continue to win"]))

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function squareRoot(number,left,right){
//     while(true){
//       let mid = (left + right)/2; // (3+4/2)=(7/2 = 3.5)...(3.5+4/2 = 3.75)...(3.75+4/2 = 3.875)
//      // console.log(mid)
//       let mul = mid*mid;          // 3*3 = 9   // 3.75*3.75 = 14.06 // 3.875*3.875 = 15.015625
//       if(mul === number || (Math.abs(mul - number) < 0.00000001)){  
//       // 9 === 15 (wrong) ||  9 - 15 = 6 < 0.000001 (wrong)
//         console.log(mid)
//         return mid;
//       }
//       else if(mul > number){  // (9 > 15) wrong  (14.06 > 15)wrong  (15.015625 > 15) correct
//         right = mid                                                 //right = 3.875
//        // console.log(right)
//       }
//       else{
//         left = mid;  // left = 3.5   left = 3.75
//        // console.log(left)
//       }
//     }
// }
// function findSqrt(number){
//     let found = false
//     let i = 1
//     while(found == false){
//       if(i * i === number){
//         found = true
//         console.log(i)
//       }
//       else if(i * i > number){
//         var res = squareRoot(number, i-1, i)
//         console.log(number, i-1, i)
//         console.log(+res.toFixed(8), ">>>>>");
//         found = true
//       }
//       i++
//     }
// }
// let a = 7
// findSqrt(a)
// console.log(Math.sqrt(a))

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function missingNumber(arr=[]){

//   let min = Math.min(...arr);

//   for(let i = 0; i < arr.length; i++){
//     arr[i] = arr[i] - min + 1; 
//   }

//   let missNumberln = missingNumber(arr);
//   return missNumberln+min-1
// }

// console.log(missingNumber([8,10,11,12,13,15,9]))

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// var maximumUnits = function(boxTypes, truckSize) {
//   boxTypes.sort((a,b) => b[1] - a[1])
//   console.log(boxTypes)
//   let totalUnit = 0
//   for(let i = 0; i < boxTypes.length; i++){
//       if(boxTypes[i][0] > truckSize){                        // 5>10
//           return totalUnit + truckSize * boxTypes[i][1]
//       }
//       totalUnit += boxTypes[i][0]*boxTypes[i][1]         // totalUnits = 0 + 5*10 = 50  ... 50 + 2*5 = 60
//       truckSize -= boxTypes[i][0]                        // truckSize = 10 - 5 = 5  ... 5 - 2 =3 ...
//   }
//   return totalUnit    
// };

// let boxTypes = [[5,10],[2,5],[4,7],[3,9]], truckSize = 10
// console.log(maximumUnits(boxTypes,truckSize))

// 5*10 + 2*5 + 3*7 = 50+10+21 = 81 wrong
// 5*10 + 3*9 + 2*7 = 50+27+14 = 91 sorted array

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function plusOne(digits){
//   for(let i = digits.length - 1; i >= 0; i--){
//     if(digits[i] < 9){                           //1,9,9
//       digits[i] = digits[i] + 1
//       return digits;
//     }else{
//       digits[i] = 0                             //   2,0,0
//     }
//   }
//   digits.unshift(1);
//   return digits
//}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// GROUP ANAGRAMS

// function groupAnagrams(str){
//     const sortedStr = str.map(word => word.split('').sort().join(''))
//     const obj = {}
//     for(let i = 0; i < sortedStr.length; i++){
//       if(!obj[sortedStr[i]]){
//         obj[sortedStr[i]] = [str[i]]
//       }else{
//         obj[sortedStr[i]].push(str[i])
//       }
//     }
//     return Object.values(obj)
// }

// let str = ["eat","tea","tan","ate","nat","bat"]
// console.log(groupAnagrams(str))

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function secondFreqNumCalculator(arr){
//     let map = {}
//     for(let el of arr){
//       map[el] = map[el]+1 || 1;
//     }
//     console.log(map)
//     let max = 0
//     let prevMax;

//     for(let el in map){
//       if(map[el] > max){
//         prevMax = max;
//         max = map[el];
//       }else if(map[el] > prevMax){
//         prevMax = map[el]
//       }
//     }
//     if(prevMax == 0){
//       return "No second number is present"
//     }
//     for(let el in map){
//       if(map[el] == prevMax){
//         return el;
//       }
//     }
// }
// const result = secondFreqNumCalculator([1,1,1,1,2,1,1,1])
// console.log(result)

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function optimisedPrime(num){
//   if(num <= 1){
//     return "No";
//   }
//   let k = Math.ceil(num**0.5);
//   if(num == 2){
//     return "Yes";
//   }
//   for(let i = 2; i <= k; i++){
//     if(num % i == 0){
//       return "No"
//     }
//   }
//   return "Yes"
// }
// const result = optimisedPrime(2)
// console.log(result)


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function calculateTotalSum(banks){
//   let totalSum = 0

//   for(let balance of banks){
//     totalSum += balance
//   }
//   return totalSum
// }

// function calculateRichestPerson(accounts){
//     let maxAmount = -Infinity

//     for(let customer of accounts){
//       maxAmount = Math.max(calculateTotalSum(customer), maxAmount)
//     }
//     return maxAmount;
// }

// console.log(calculateRichestPerson([[2,10,7],[7,1,10],[1,9,5]]))
// MAXIMUM SUM IN ARRAY INSIDE ARRAY
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function animalCount(animals){
//     let animalFreq = {}

//     for(let animal of animals){
//       if(animalFreq[animal]){
//         animalFreq[animal]++
//       }else{
//         animalFreq[animal] = 1
//       }
//     }
//     console.log(animalFreq)
// }

// animalCount(["cat", "dog", "buffalow", "snake", "donkey", "Lion","cat", "dog",  "snake", "donkey", "Lion","buffalow","dog", "buffalow", "snake", "donkey"])

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function generateString(number){
//   let alphabet = "abcdefghijklmnopqrstuvwxyz";
//   let finalStr = ""
//   let currIndex = 0;

//   while(currIndex < number){
//     finalStr = finalStr + alphabet[currIndex%26]
//     currIndex++
//   }
//   return finalStr
// }

// function encodeNumberWithCharacter(arr){
//   for(let i = 0; i < arr.length; i++){
//     arr[i] = generateString(arr[i])
//   }
//   return arr
// }
// let temp = [1,2,3,4,5,6,7,8,9,10]
// temp = [32,21]
// console.log(encodeNumberWithCharacter(temp))

// function encodedNumberWithCharacterOptimally(arr){
//   let maxNumber = Math.max(...arr)
//   let encodedArray = ['']
//   for(let i = 1; i <= maxNumber; i++){
//     encodedArray.push(generateString(i))
//   }
//   for(let i = 0; i <= arr.length; i++){
//     arr[i] = encodedArray[arr[i]]
//   }
//   return arr
// }

// const temp = [1,2,3,4,5,6,7,8,9,10]
// console.log(encodedNumberWithCharacterOptimally(temp))

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function sorting(arr){
//   let i = 0
//   let n = arr.length - 1
//   let countZero = 0
//   let countOne = 0
//   let countTwo = 0

//   while(i <= n){
//     if(arr[i] == 0){
//       countZero++
//     }
//     else if(arr[i] == 1){
//       countOne++
//     }
//     else {
//       countTwo = countTwo + 1
//     }
//     i++
//   }
//   for(let i = 0; i < countZero; i++){
//     arr[i] = 0;
//   }
//   for(let i = countZero; i < countZero+countOne; i++){
//     arr[i] = 1;
//   }
//   for(let i = countZero+countOne; i < n; i++){
//     arr[i] = 2;
//   }
//   return arr
// }

// console.log(sorting([0,2,1,2,2,1,0,0,1]))

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//CHECK IF BOTH HALFS OF THE STRING HAVE SAME SET OF CHARACTERS

// function checkHalfs(str){
//   if(str.length % 2 != 0){
//     return "No"
//   }
//   let map = new Map()
//   for(let i = 0; i < str.length; i++){
//     if(i < str.length/2){
//       map[str[i]] = map[str[i]] + 1 || 1
//     }else{
//       if(map[str[i]]){
//          map[str[i]]--
//       }else{
//         return "No";
//       }
//     }
//   }
//   return "Yes";
// }
// console.log(checkHalfs("abcbac"))
// console.log(checkHalfs("abcaabbc"))
// console.log(checkHalfs("abcdeabcd"))
// console.log(checkHalfs("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"))

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//FIND THE HIDDEN NUMBER
//GIVEN AN ARRAY OF INTEGER, FIND ANOTHER INTEGER SUCH THAT, IF ALL THE ELEMENTS OF THE ARRAY ARE SUTRACTED INDIVIDUALLY FROM THAT NUMBER,
//THEN SUM OF ALL DIFFERENCES SHOULD BE EQUAL TO ZERO IF ANY SUCH INTEGER EXISTS, PRINT ITS VALUES OTHERWISE PRINT '-1'.
/**
 * HIDDEN NUMBER = X
 * [1,3,5,7,9] => 1-X + 3-X + 5-X + 7-X + 9-X ==> (1+3+5+7+9) - 5X => X = AVERAGE OF THE ELEMENTS
 */

// function avgInteger(arr){
//   let sum = 0
//   for(let el of arr){
//     sum = sum + el
//   }
//   if(parseInt(sum/arr.length) == sum/arr.length){
//     return sum/arr.length
//   }else{
//     return -1
//   }
// }
// console.log(avgInteger([1,2,3])) //2
// console.log(avgInteger([-3,45,98,65,12,-56])) //-1
// console.log(avgInteger([23,45,34,45,23,45,34,45,23,45])) // -1
// console.log(avgInteger([0,0,0,0,0,0,0])) // 0

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// REPLACE EACH ELEMENT BY DIFFERENCE OF ARRAY SIZE AND FREQUENCY OF THAT ELEMENT

// function replace(arr){
//   let map = {}
//   for(let el of arr){
//     map[el] = map[el]+1||1
//   }
//   for(let i = 0; i < arr.length; i++){
//     arr[i] = arr.length - map[arr[i]];
//   }
//   return arr;
// }
// console.log(replace([1,2,5,2,2,5,4]))

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//TO SORT AN ARRAY OF 0'S 1'S AND 2'S

/**
 * function reverse(){
 *    var node = this.head
 *    this.head = this.tail
 *    this.tail = node
 *    var next;
 *    var prev = null
 *    for(let i = 0; i < this.length; i++){
 *        next = node.next
 *        node.next = prev
 *        prev = node
 *        node = next
 *    }
 *    return this
 * }
 */    // 100    200   300   400   500 => Null
      //  NODE   NEXT
      //  100 => Null
      //  prev   NODE  next
      //  200 => 100 => NULL

      //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

      
// function sumDigit2(num){
//   let sum = 0
//   while(num != 0){
//     sum = sum + num%10;
//     num = parseInt(num/10)
//   }
//   return sum
// }
// const result = sumDigit2(97384);
// console.log(result)
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function sumDigit1(num){
//   if(num < 10){
//     return num
//   }
//   return num%10 + sumDigit1(parseInt(num/10))
// }

// const result = sumDigit1(97384)
// console.log(result)
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function stringToNumber(str){
//   //return str*1
//   //return +str
//   //return Number(str)
//   //return parseInt(str)
// }
// const result = stringToNumber("1234")
// console.log(result)
// console.log(typeof result)
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++