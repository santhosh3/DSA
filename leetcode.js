


// function reverseVowels(s) {
//     const vowels = {}
//     for(const char of "aeiouAEIOU") {
//         vowels[char] = true;
//     }
//     const characters = s.split('');

//     let left = 0
//     let right = s.length-1

//     while(left < right) {
//         while(left < right && !(s[left] in vowels)) {
//             left += 1
//         }
//         while(left < right && !(s[right] in vowels)) {
//             right -= 1
//         }
//      swap(characters,left,right);
//      left += 1;
//      right -= 1;
//     }
//     return characters.join('')
//  // return vowels
// }

// function swap(arr,i,j) {
//     const temp = arr[i];
//     arr[i] = arr[j]
//     arr[j] = temp
// }

// console.log(reverseVowels('hello'))
// //...................................................

  //   const rotateArrayBy3 = function(nums, k) {
  //   function reverse(arr, i, j) {
  //     while (i < j) {
  //      arr[i] = arr[i] + arr[j]
  //      arr[j] = arr[i] - arr[j]
  //      arr[i] = arr[i] - arr[j]
  //      i++;
  //      j--;
  //     }
  //   }
  //     k = k % nums.length;
  //     reverse(nums, 0, (nums.length - 1));
  //     reverse(nums, 0, (k - 1));
  //     reverse(nums, k, (nums.length - 1)); 
  //     return nums
  // }

  // console.log(rotateArrayBy3([1,2,3,4,5],3))
  //........................................................

  // let reverseString = function(str) {
  //     s=str.split('')
  //     let left = 0
  //     let right = s.length - 1
  //     while(left < right) 
  //     {
  //         let temp = s[left]
  //         s[left] = s[right]
  //         s[right] = temp
  //         left++;
  //         right--;
  //     }
  //     return s.join('')
  // }
  // console.log(reverseString('CHINNA SANTHOSH'))
  //........................................................
/**
 * Input : ['eat', 'tea', 'bat', 'tan', 'ate', 'nat']
 * Output : [['eat', 'tea', 'ate'],
 *           ['nat, 'tan'], 
 *           ['bat']
 *          ]
 */
// function Program(str) {
//     let cache = {};
//     for(let i of str) {
//         let array = str.split('').sort().join('')
//         (!cache[array]) ? cache[array] = [str] : cache[array].push(str);
//     }
//     return Object.values(cache)
// }
// console.log(Program(['eat', 'tea', 'bat', 'tan', 'ate', 'nat']))

// let A = ('eat', 'tea', 'bat', 'tan', 'ate', 'nat').split('')
// console.log(A)

/*
    given two strings s and t check both are anargams are not
*/
/*
var isAnagram = function(s,t) {
  const sSorted = s.split('').join('')
  const tsorted = t.split('').join('')     // timecomplexity is NlogN + MlogM
  return sSorted == tsorted
}
*/

// var isAnagram = function(s,t) {
//   if(s.length !== t.length) return false
//   const sCount = {}
//   const tCount = {}
//   for(let i = 0; i < s.length; i++) {
//     if(!sCount[s[i]]) sCount[s[i]] = 0
//     if(!sCount[t[i]]) sCount[t[i]] = 0
//     sCount[s[i]]++
//     tCount[t[i]]++
//   }
//   for(let char in sCount) {
//     if(sCount[char] != tCount[char]) return false
//   }
//   return true
// }

// isAnagram('santhosh','santhosh')
//---------------------------------------------------------------
// function solution(a,b,c,d) {
//   //Write your solution here
//     let sol = []
//     for(let i = 0; i < a; i++){
//         if(!d.includes(b[i])) sol.push(b[i])
//     }
//     for(let i = 0; i < c; i++){
//         if(!b.includes(d[i])) sol.push(d[i])
//     }
//    return sol.sort((a,b) => a-b).join(' ') 
// }


// function main() {
//     var a = parseInt(readLine());
//     var b = readLine().split(' ').map(Number)
//     var c = parseInt(readLine())
//     var d = readLine().split(' ').map(Number)
//     var res = solution(a,b,c,d);
//     console.log(res);
// }
//------------------------------------------------------
//longest subString withOut repeating Characters

//INPUT: S = 'abcabcbb'
//OUTPUT: 3
// Explanation: the answer is 'abc' with the length of 3

// var lengthOfLongestSubString = function(s) {
  
//   let end = 0
//   let start = 0
//   let maxLength = 0

//   if(!s) {
//     return 0
//   }
//   const Uniquechar = new Set();

//   // while(end < s.length) {
//   //    if( 
//   //   )
//   // }
// }
//------------------------------------------------------------------------------------
// let romanToInt = function(s) {
//   const map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000};
//   let res = 0
//   s.split('').forEach((num, i) => {if(map[num] < map[s[i+1]]) res = res - map[num];
//                                    else res = res + map[num]
//   });
//   return res
// }
// console.log(romanToInt('XIII'))
//-----------------------------------------------------------------------------------

// let romanToInt = function(s) {
//   const map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000};
//   let res = 0
//   s.split('').map((num) => {return (map[num] < map[num+1])? res = res-map[num]:res = res+map[num]});
//   return res
// }
// console.log(romanToInt('MDC'))
//------------------------------------------------------------------------------------

// let nums = new Set();

// nums.add(3);
// nums.add(4)
// nums.add(3)
// nums.add(3)
// nums.add('Mahesh babu')
// nums.add('kumar')

// //console.log(nums)
// console.log(nums.has(3))
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let reverseString = function(str) {
//       s=str.split('')
//       let left = 0
//       let right = s.length - 1
//       while(left < right) 
//       {
//           let temp = s[left]
//           s[left] = s[right]
//           s[right] = temp
//           left++;
//           right--;
//       }
//       return s.join('')
//   }
//   console.log(reverseString('CHINNA SANTHOSH'))

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let reverseString = function(str) {
//   if(str.length == 0) return ''
//   return reverseString (str.slice(1)) + str[0]
// }
// console.log(reverseString(['s','a','n','t','h','o','s','h']))
// let A = ['A','P','P','L','E']
// console.log(reverseString(A).split(''))
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const elements = 'santhosh is one of the fellow living in country india'
// const arr = elements.replace(/ /g, "").split('')
// let max_occorance = 0, max_occorance_char = null
// let freqObj = {}
// for(let i = 0; i < arr.length; i++) {
//   if(freqObj.hasOwnProperty(arr[i])) {
//     freqObj[arr[i]] += 1;
//   }
//   else{
//     freqObj[arr[i]] = 1
//   }
//   if(max_occorance < freqObj[arr[i]]) {
//     max_occorance = freqObj[arr[i]];
//     max_occorance_char = arr[i]
//   }
// }

// console.log(max_occorance, '>>>>>>>>>>>>>',max_occorance_char)
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const elements = 'I am one of the fellow living in country india'
// const arr = elements.replace(/ /g, "").toLowerCase().split('')
// let max_occorance = 0, max_occorance_char = null
// let freqObj = {}
// for(let nums of arr) {
//   if(freqObj.hasOwnProperty(nums)) {
//     freqObj[nums] += 1;
//   }
//   else{
//     freqObj[nums] = 1
//   }
//   if(max_occorance < freqObj[nums]) {
//     max_occorance = freqObj[nums];
//     max_occorance_char = nums
//   }
// }

// console.log(max_occorance, '>>>>>>>>>>>>>',max_occorance_char)
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const elements = 'I is one of the fellow living in country india'
// const arr = elements.replace(/ /g, "").toLowerCase().split('')
// let max_occorance = 0, max_occorance_char = null
// let freqObj = {}
// arr.map(nums => {(freqObj[nums])? freqObj[nums]++ : freqObj[nums] = 1
//   if(max_occorance < freqObj[nums]) {
//   max_occorance = freqObj[nums];
//   max_occorance_char = nums
 
// }} )
// console.log(max_occorance, '>>>>>>>>>>>>>',max_occorance_char)
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let A = [1,2,3,4,5]
// let B = [1,4,9,16,25]

// let Obj1 = {}
// let Obj2 = {}

// for(let nums of A) {
//     (Obj1[nums]) ? Obj1[nums]++ : Obj1[nums] = 1
// }
// for(let nums of B) {
//     (Obj2[nums]) ? Obj2[nums]++ : Obj2[nums] = 1
// }
// for(let key in Obj1) {
//     (Obj1[key*key] != Obj2[key])? console.log('false') : console.log('true')
// }

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let arr = [1,3,5,7,9,11,13,15,17,19]

// function isGivenSumPresent(sum) {
//   let isPairExist = false
//   for(let i = 0; i < arr.length; i++) {
//     for(let j = i+1; j < arr.length; j++) {
//         if(arr[i]+arr[j] == sum) {
//           isPairExist = true
//         }
//     }
//   }
//   return isPairExist
// }

// console.log(isGivenSumPresent(10))
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// let arr1 = [1,3,5,7,9,11,13,15,17,19]

// function optimalIsGivenSumIsPresent(sum) {
//   let isPairExist = false
//   let left = 0
//   let right = arr1.length - 1
//   while(left <= right) {
//     if(arr1[left]+arr1[right] == sum)
//     {
//        isPairExist = true
//        break;
//     }
//     else if(arr1[left]+arr1[right] > sum){
//       right--
//     }
//     else{
//       left++
//     }
//   }
//   return isPairExist
// }

// console.log(optimalIsGivenSumIsPresent(9))
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// let arr = [1,2,5,8,9,14]
// let result = []
// let distance = Infinity
// let left = 0
// let right = arr.length - 1
// while(left < right) 
// {
//   if(Math.abs(arr[left] + arr[right] - 12) < distance)
//   {
//     result = [arr[left], arr[right]]
//     distance = Math.abs(arr[left] + arr[right] - 12)
//   }
//   if(arr[left] + arr[right] - 12 > 0) {
//     right--
//   }
//   else {
//     left++
//   }
// }
// console.log(result)

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/**
 * INPUT :- [3,2,1]  OUTPUT :- [3,2,2]
 * INPUT :- [9,9,9]  OUTPUT :- [1,0,0,0]
 */

// var plusOne = (digits) => {
//   for(let i = digits.length - 1; i >= 0; i--)
//   {
//     if(digits[i] < 9) {
//       digits[i] = digits[i] + 1
//       return digits;
//     }
//     else{
//       digits[i] = 0
//     }
//   }
//   digits.unshift(1)
//   return digits;
// }

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// const obj = {
//   "0": 1,
//   "1": 1,
// };
// var climbStairs = function(n) {
//   if (n <= 1) return 1;
//   for (let i = 2; i <= n; i++) {
//     obj[i] = obj[i - 1] + obj[i - 2];
//   }
//   return obj[n];
// };

// console.log(climbStairs(50))
 
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function fib(n) {
//   const result = [1,1];
//   for(let i = 2; i <= n; i++) {
//       let a = result[i-1];
//       let b = result[i-2];

//       result.push(a+b);
//   }
//   return result[n]
// }

// console.log(fib(50))

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const fib = (n) => {
//   if(n < 2) return 1
//   return fib(n-1) + fib(n-2)
// }
// console.log(fib(50))
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const fib = (n,nums = {}) => {
    
// }

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// var minimumAbsDifference = function(arr) {
//   arr.sort((a,b) => a-b)
//   const a = [];
//   let min = Infinity
  
//   for(let i = 0; i < arr.length-1; i++){
//       let diff = arr[i+1] - arr[i]
//           diff = Math.min(diff,min)
//   }
  
//   for(let i = 0; i < arr.length-1; i++){
//       let diff = arr[i+1] - arr[i]
//       if(min == diff){
//           a.push([arr[i], arr[i+1]])
//       }
//   }
//   return a
// };

// let arr = [4,2,1,3]
// console.log(minimumAbsDifference(arr))

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// var findDuplicates = function(nums) {
//   let map = new Set()
//   let result = []
//   for(let el of nums){
//       if(!map.has(el)) map.add(el)
//       else result.push(el)
//   }
//   return result
// };

// let nums = [4,3,2,7,8,2,3,1]
// console.log(findDuplicates(nums))

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// //SLIDING WINDOW OF K SIZE BUT I WILL DO THIS THIS BRUT FORCE WAY

// function maxOfThree(num,k){
//     let result = []

    
//     for(let i = 0; i < nums.length -k +1; i++){
//       let res = []
//       console.log(res)
//       let max = Math.max(...res)
//       result.push(max)
//       res.length = 0
//       for(let j = i; j < k+1; j++){
//           res.push(num[i])
//       }
//     }
//     return result
// }

// let nums = [1,3,-1,-3,5,3,6,7], k = 3
// console.log(maxOfThree(nums,k))

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// var missingNumber = function(nums){
//     let obj = {}
//     for(let i = nums[0]; i <= nums[nums.length-1]; i++){
//       obj[i] = false
//     }

//     for(let i = 0; i < nums.length; i++){
//       if(obj.hasOwnProperty(nums[i])){
//         obj[nums[i]] = true
//       }
//     }
//     let arr = []
//     for(let key in obj){
//       if(obj[key] == false){
//         arr.push(key)
//       }
//     }
//     // return arr.map(Number)
//     return obj
// }

// let nums = [1,2,4,5,7,9].join('')
// console.log(missingNumber(nums))

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let lengthOfLongestString = (str) =>{
//   let max = 0
//   let windowStart = 0
//   let obj = {}
//   let str2 = ""

//   for(let windowEnd = 0; windowEnd < str.length; windowEnd++){
//     let rightChar = str[windowEnd]
//     obj[rightChar] = obj[rightChar]+1 || 1

//     while(obj[rightChar] > 1){
//       let leftChar = str[windowStart]
//       if(obj[leftChar] > 1){
//         obj[leftChar]--
//       }else{
//         delete obj[leftChar];
//       }
//       windowStart++
//     }
//     if(max < windowEnd - windowStart+1)
//     {
//       max = windowEnd - windowStart + 1
//       str2 = str.slice(windowStart, windowEnd+1)
//     }
//   }
//   return [max,str2].join(',')
// }
// let str = "abaccabb"
// console.log(lengthOfLongestString(str))

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// var lengthOfLongestSubstring = function(str) {
//   let end = 0
//   let start = 0
//   let maxlength = 0

//   const uniqueCharSet = new Set();
//   while(end < str.length) {
//       if(!uniqueCharSet.has(str[end])) {
//           uniqueCharSet.add(str[end]);
//           end++;
//          if(uniqueCharSet.size > maxlength) {
//            maxlength = uniqueCharSet.size
//          }
//       }
//       else {
//           uniqueCharSet.delete(str[start])
//           start++
//       }
//   }
//   return maxlength
// };


//  str = "abaccabb"
// console.log(lengthOfLongestSubstring(str))

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

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

// var longestConsecutive = function(nums) {
//   if(nums.length ===0)return 0
//   nums.sort((a,b)=>a-b)
//   let count = 0
//   for(let i = 0; i < nums.length; i++){
//     if(nums[i] == nums[i+1]){
//       count++
//     }
//   }
//   return count
// };

// let res = longestConsecutive([100,4,200,1,3,2])
// console.log(res)

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//  function spaceSplit(str){

//   let i = 0
//   let j = 0
//   while(j != str.length){
//     if(str[j] == " "){
//       console.log(str.slice(i,j))
//       i = j + 1
//     }
//     j++
//   }
//   console.log(str.slice(i,j))
// }
// spaceSplit("Hello World How Are You")

// //+++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function countPairs(arr){
//   let count = 0;
//   // for(let i = 0; i < arr.length; i++){
//   //   for(let j = i+1; j < arr.length; j++){
//   //     if(arr[i] % arr[j] == 0 || arr[j] % arr[i] == 0){
//   //       count++
//   //     }
//   //   }
//   // }
//   let i = 0; 
//   let j = 1;
//   while(i != arr.length){
//     if(arr[i] % arr[j] == 0 || arr[j] % arr[i] == 0){
//       count++
//     }
//     j++
//     if(j >= arr.length){
//       i++;
//       j = i+1
//     }
//   } 
//   return count
// }
// const result = countPairs([1,2,3,4])
// console.log(result)
// //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// // * AB CD  => ACBD
// function interLeavingCheck(s1,s2,s3){
//   let i = 0, j = 0, k = 0;
//   while(k != s3.length){
//     if(s1[i] === s3[k] && i < s1.length){
//       i++
//     }else if(s2[j] == s3[k] && j < s2.length){
//       j++;
//     }else{
//       return false
//     }
//     k++
//   }
//   if(i < s1.length || j < s2.length){
//     return false
//   }
//   return true
// }

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//var isAnagram = function(s,t)
// {
//   if(s.length != t.length) return false
//   const sCount = {}
//   const tCount = {}
//   const N = s.length
//   for(let i = 0; i < N; i++){
//     if(!sCount[s[i]]) sCount[s[i]] = 0
//     if(!tCount[t[i]]) tCount[t[i]] = 0
//     sCount[s[i]]++
//     tCount[t[i]]++
//   }
//   console.log(sCount, tCount)
//   for(let char in sCount){
//     if(sCount[char] !== tCount[char]) return false
//   }
//   return true
// }
// {
//   if(s.length !== t.length) return false
//   const count = {}
//   const N = s.length
//   for(let i = 0; i < N; i++){
//     if(!count[s[i]]) count[s[i]] = 0
//     if(!count[t[i]]) count[t[i]] = 0
//     count[s[i]]++
//     count[t[i]]--
//   }
//   console.log(count)
//   for(char in count){
//     if(count[char] != 0) return false
//   }
//   return true
// }

// let s = "abc";
// let t = "cab";
// console.log(isAnagram(s,t))
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function isBalance(str) {
  let stack = [];

  for (let i = 0; i < str.length; i++) {
      if (str[i] === "(" || str[i] === "[" || str[i] === "{") {
          stack.push(str[i]);
      }

      if (str[i] === "}") {
          if (stack[stack.length - 1] === "{") {
              stack.pop();
          }
          else {
              return false;
          }
      }

      if (str[i] === "]") {
          if (stack[stack.length - 1] === "[") {
               stack.pop();
               }
          else {
              return false;
          }
      }

      if (str[i] === ")") {
          if (stack[stack.length - 1] === "(") {
               stack.pop();
               }
          else {
              return false;
          }
      }
  }
  return stack.length === 0;
}
// let s = isBalance("([][]")
// console.log(s);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Given an array of size n find the max value in a current window of size w window is sliding from left to right

// const arr = [1,3,-1,-3,5,3,6,7]

// /**
//  * [|1,2,3|,] => 3
//  * [1|3,-1,-3] => 3
//  */

// // n = 8, w = 3 n-w+1 => 6
// // total number of window form of size w in an array having size n=>n-w+1

// let n = arr.length;
// let w = 3;
// let result =  []
// for(let window = 0; window < n-w+1; window++){
//     let max = arr[window];
//     for(let i = window; i < window+w; i++){
//       if(max < arr[i]){
//         max = arr[i]
//         console.log(max)
//       }
//     }
//     result.push(max)
// }
// console.log(result);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function numOfIncSubseqOfSizeK(arr, n, k){
//   let dp = new Array(k), sum = 0;            //k=3    [0, 0, 0, 0]
//   // Loop to create 2D array using 1D array
//   for (let i = 0; i < dp.length; i++) {             // [[0,0],[0,0],[0,0],[0,0]]
//         dp[i] = new Array(2);
//   }
// // count of increasing subsequences of size 1
// // ending at each arr[i]
// for (let i = 0; i < n; i++) {                      // [[1,0],[]]
//   dp[0][i] = 1;
// }
// // building up the matrix dp[][]
// // Here 'l' signifies the size of
// // increasing subsequence of size (l+1).
// for (let l = 1; l < k; l++) {

//   // for each increasing subsequence of size 'l'
//   // ending with element arr[i]
//   for (let i = l; i < n; i++) {

//       // count of increasing subsequences of size 'l'
//       // ending with element arr[i]
//       dp[l][i] = 0;
//       for (let j = l - 1; j < i; j++) {
//           if (arr[j] < arr[i]) {
//               dp[l][i] += dp[l - 1][j];
//           }
//       }
//   }
// }

// // sum up the count of increasing subsequences of
// // size 'k' ending at each element arr[i]
// for (let i = k - 1; i < n; i++) {
//   sum += dp[k - 1][i];
// }

// // required number of increasing
// // subsequences of size k
// return sum;
// }
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//leetcode 46
// if arr = [1,2,3]
// output will be []

// function permute(nums){                  //1,2,3
//   const result = []                      //
//   const dfs = (i,nums) => {              // 0,[1,2,3]
//     if(i === nums.length){               // 0 == 3 not satisisfy
//       return result.push(nums.slice())
//     }
//     for(let j = i; j < nums.length; j++){
//       [nums[i], nums[j]] = [nums[j], nums[i]]    // [1,2,3]
//       dfs(i+1, nums);
//       [nums[i], nums[j]] = [nums[j], nums[i]]
//     }
//   }
//   dfs(0, nums);
//   return result
// }

// let arr = [1,2,3]
// console.log(permute(arr))

// function permutation(i,nums){
//   const result = []
//   function dfs(i,nums){
//     if(i === nums.length){
//       return result.push(nums.slice())
//     }
//     for(let j = i; j < nums.length; j++){
//       [nums[i], nums[j]] = [nums[j], nums[i]]
//       dfs(i+1, nums);
//       [nums[i], nums[j]] = [nums[j], nums[i]]
//     }
//   }
//   dfs(0,nums)
//   return result
// }
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let sum = 0
// const calc = (n) => {
//   for(let i = 0; i <= n; i++){
//     sum = sum + i
//   }
//   return sum
// }
// const memorisation = (fun) => {
//   let cache = {};
//   return function(...args){
//     let n = args[0];
//     if(n in cache){
//        console.log("cache")
//        return cache[n];
//     }else{
//       console.log("calculating first time")
//       let result = fun(n);
//       cache[n] = result;
//       return result
//     }
//   }
// }
// console.time();
// const effecient = memorisation(calc);
// console.log(effecient(5));
// console.timeEnd()

// console.time();
// console.log(effecient(10));
// console.timeEnd()




































// function BFS(){
//   let node = this.root
//   let data = []
//   let queue = []
//   queue.push(node);
//   while(queue.length){
//     let root = queue.shift()
//     data.push(root.value)
//     if(root.left) queue.push(root.left)
//     if(root.right) queue.push(root.right)
//   }
//   return data
// }

// function preOrder(){
//   let data = []
//   function traverse(node){
//     data.push(node.value)
//     if(node.left) traverse(node.left)
//     if(node.right) traverse(node.right)
//   }
//   traverse(this.root)
//   return data
// }

function getAllSubstrings(str) {
  var i, j, result = [],result1 = []; 

  for (i = 0; i < str.length; i++) {
      for (j = i + 1; j < str.length + 1; j++) {
          result.push(str.slice(i, j));
      }
  }
  for (j = 0; j < result.length; j++){
    if(result[j].includes('aeiou') ){
        result1.push(result[j])
    }
  }
  return result1.length
}

// var theString = 'cuaieuouac';
// console.log(getAllSubstrings(theString));

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//find min in rotated sorted array

// if un- rotated sorted array then left is always less than right [1,2,3,4,5]
// [3,4,5,1,2] or [2,3,4,5,1] if mid is greater than left then move left to mid
//                [5,1,2,3,4] if mid is smaller than left then move right to mid
//                [5,4,1,2,3] => [5,4,1]

// function findMin(nums){
//   let left = 0
//   let right = nums.length-1;
//   if(right == 1) return nums[0]
//   if(nums[left] < nums[right]) return nums[left]
//   while(left <= right){
//     let mid = Math.floor((left+right)/2);
//     let leftVal = nums[left]
//     let rightVal = nums[right]
//     let midVal = nums[mid]
//     let leftOfMid = nums[mid-1]
//     let rightOfMid = nums[mid+1]
//     if(midVal > rightOfMid){
//       return rightOfMid
//     }else if(leftOfMid > midVal){
//       return midVal
//     }
//     if(midVal > leftVal){
//       left = mid + 1
//     }else{
//       right = mid - 1
//     }
//   }
// }

function findMin(nums){
  return searchMin(nums,0,nums.length-1);
}
function searchMin(nums,l,r){
  if(l+1 >= r){
    return Math.min(nums[l],nums[r])
  }
  if(nums[l] < nums[r]){
    return nums[l]
  }
  let mid = Math.floor((l+r)/2)
  return Math.min(searchMin(nums,1,mid), searchMin(nums,mid+1,r))
}

// let currDate = new Date()
// console.log(currDate.toLocaleDateString())
// console.log(currDate.toDateString())
// console.log(currDate.toLocaleString())
// console.log(currDate.toISOString())
// console.log(currDate.toString())
// console.log(currDate.getMonth())
// console.log(currDate.getDay())
// console.log(currDate.getFullYear())
// console.log(currDate.getHours())
// console.log(currDate.getMilliseconds())
// console.log(currDate.getDate())
// console.log(currDate.getTimezoneOffset())

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//2062

function countVowelSubstrings(word){
  let res = 0, n = word.length
  for(let i = 0; i < n-1; i++){
    for(let j = i+1; j < n; j++){
      if(isValid(word,i,j)) res++
    }
  }
  return res
}
function isValid(s,i,j){
  let set = new Set(['a','e','i','o','u'])
  let res = new Set()
  for(let k = i; k <= j; k++){
    if(set.has(s[k])) set.add(s[k])
    else return false
  }
  return res.size == set.size
}

let word = 'aeiouuu'
console.log(countVowelSubstrings(word))