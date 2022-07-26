// function selection(arr) {
//     for(var i = 0; i < arr.length; i++) {
//         var lowest = i;
//         for(var j = i+1; j < arr.length; j++) {
//             if(arr[j] <  arr[lowest]) {
//                 lowest = j
//             }
//         }
//         console.log("*******************")
//         console.log(arr)
//         console.log(i,lowest)
//         console.log("SWAPPING TO: ")
//         var temp = arr[i];
//         arr[i] = arr[lowest];
//         arr[lowest] = temp
//         console.log(arr)
//         console.log("*******************")
//     }
//     return arr
// }
// selection([34,22,10,19,17])    //[10,-------],  [17,]


// 4389 7600 3789 1225
// C SANTHOSH KUMAR
// 866         CVV
// 04/29       EXPI

/*
const arr = ["apple", "orange", "Kiwi"];

for( key in arr) {
    console.log(key, arr[key])
}

const obj = {
    firstName : "John",
    lastName : "Deo"
}

for( key in obj) {
    console.log(key, obj[key])
}*/

// function bubbleSort(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         for(let j = 0; j < arr.length; j++) {
//             if(arr[j] > arr[j+1]) {
//                 var temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp
//             }
//         }
//     }
//     return arr
// }

// console.log(bubbleSort([37, 45, 29, 8]))

/*
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
*/

//  first = (Array,target) => {

//     let temp = [];
//     for(let i = 0; i < Array.length-1; i++)
//     {
//         for(let j = i+1; j < Array.length; j++)
//         {
//             if(Array[i] + Array[j] == target)
//             {
//               temp.push(i,j)
//             }
//         }
//     }
//     return temp
// }

// let Array = [3,3]
// let target = 6
// console.log(first(Array, target))

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
//....................................................................
//  second = (num1, num2) => {
//    let A = parseInt(num1.reverse().join(''))
//    let B = parseInt(num2.reverse().join(''))
//    return JSON.stringify(A+B).split('').reverse().map(Number)
// }

// let num1 = [2,4,3]
// let num2 = [5,6,4]
// console.log(second(num1,num2))
//......................................................................

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// third = (str)=> {
//   let A = str.split('')
//   return [...new Set(A)].length
// }
// console.log(third("pwwkew"))
//......................................................................
// let arrayList = [1, 2, 3, 4, 3, 20, 0];

// let minNum = arrayList.reduce((prev, current) => {
//   return Math.min(prev, current)
// });
// console.log(maxNum);

/*
console.log(Math.max(...arrayList))
console.log(Math.max.apply(null,arrayList))
console.log(arrayList.reduce((prev, current) => {
  return Math.max(prev, current)
}))
*/

// function union(a, b) {
//     return a.concat(b.filter(function(el) {
//         return a.indexOf(el) === -1;
//     }));
// }
// console.log(union([1,2,3,4,5],[2,3,4,5,6,7,9]))

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const arr = [1, 3, 6, 5, 4];
// const rotatedArr = arr.map((e, i) => arr[arr.length-i-1])
// console.log(rotatedArr)
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const rotateArray2 = function(nums, k) {

//     // reverse helper function
//     function reverse(arr, start, end) {
//       while (start < end) {
//         [arr[start], arr[end]] = [arr[end], arr[start]];
//         start++;
//         end--;
//       }
//     }
//       k = k % nums.length;
//       reverse(nums, 0, (nums.length - 1));                    // 5,4,3,2,1
//       reverse(nums, 0, (k - 1));                              // 3,4,5,2,1
//       reverse(nums, k, (nums.length - 1));                    // 3,4,5,1,2
//       return nums
//   }

//   console.log(rotateArray2([1,2,3,4,5],3))        // output => 3,4,5,1,2
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// function codeZinger(arr) {
//   let A = Math.min(...arr)
//   let B = []
//   for(let i = 0; i < arr.length; i++)
//   {
//      if(arr[i] == A)
//      {
//         B.push(i)
//      }
//   }
//   let C = B.sort((a,b) => b-a)
//   return C[0] - C[1] || -1

// }

// let arr = [5,1,2,3,4,1,2,4,1]
// console.log(codeZinger(arr))
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//MOVE ALL ZEROES TO RIGHT SIDE OF ARRAY

// function moveZeroes(arr) {
//     let j = 0
//   for(let i = 0; i < arr.length; i++)
//   {
//     if(arr[i] != 0)
//     {
//       [arr[i], arr[j]] = [arr[j], arr[i]]
//       j++
//     }
//   }
//   return arr
// }
// let array = [4,8,6,0,2,0,1,15,12,1,0]
// console.log(moveZeroes(array))

// function moveZeroes1(arr){

//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] == 0){
//       arr.splice(i,1)
//       arr.push(0)
//     }
//   }
//   return arr
// }
// let array = [4,8,6,0,2,0,1,15,12,1,0]
//  console.log(moveZeroes(array))
//  console.log(moveZeroes1(array))

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function codeZinger(arr) {

//   let max = -10000000
//   let greatest = Math.max(...arr)
//   let ind = arr.indexOf(greatest)
//   let start = 0
//   while(start <= arr.length){
//     if(start != ind) {
//       let add = arr[start] + greatest
//       if(add > max){
//         max = add
//         start++
//       }
//       else{
//       start++
//       }
//     }
//     else{
//       start++
//     }
//   }
//   return max
// }
// let arr = [1,2,3,89,4,10]
// console.log(codeZinger(arr))
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function solution(str,k) {
//   if(str.length < k) return 0
//   let result = 0;
//   let count = 0;
//   for(let i = 0; i < k; i++) {
//     count = count + str[i].charCodeAt(0);
//   }
//   if(count % k == 0) result++
//   for(let i = k; i < str.length; i++) {
//     count = count + str[i].charCodeAt(0) - str[i - k].charCodeAt(0)
//     if(count % k == 0) result++
//   }
//   return result
// }

// let arr = 'bcgabc'
// console.log(solution(arr,3))
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log('ABC'.charCodeAt(2))

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// function same(arr1,arr2) {
//   if(arr1.length !== arr2.length) {
//     return false
//   }
//   for(let i = 0; i < arr1.length; i++) {
//     let correctIndex = arr2.indexOf(arr1[i]**2)
//     if(correctIndex === -1) {
//       return false
//     }
//     arr2.splice(correctIndex, 1)
//   }
//   return true
// }

// let arr1 = [1,2,3,4,5]
// let arr2 = [9,25,16,1,4]

// console.log(same(arr1,arr2))

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// OPTIMAL SOLUTION

// function same(arr1,arr2) {

//  let frequencyCounter1 = {}
//  let frequencyCounter2 = {}

//   if(arr1.length !== arr2.length) {
//     return false
//   }
//   for(let val of arr1) {
//     (!frequencyCounter1[val])? (frequencyCounter1[val] = 1) : (frequencyCounter1[val]++)
//   }
//   for(let val of arr2) {
//     (!frequencyCounter2[val])? (frequencyCounter2[val] = 1) : (frequencyCounter2[val]++)
//   }
//   for(let key in frequencyCounter1) {
//     if(!(key ** 2 in frequencyCounter2)) {
//       return false
//     }
//     if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
//       return false
//     }
//   }
// }


// let arr1 = [1,2,3,4,5]
// let arr2 = [9,25,16,1]

// console.log(same(arr1,arr2))
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function validAnagram(first,second) {
//   if(first.length !== second.length) {
//     return false
//   }
//   const lookup = {}

//   for(let i = 0; i < first.length; i++) {
//     let letter = first[i]
//     lookup[letter]? lookup[letter]++ : lookup[letter] = 1
//   }
//   for(let i = 0; i < second.length; i++) {
//     let letter = second[i]
//     if(!lookup[letter]) {
//       return false
//     }
//     else {
//       lookup[letter] -= 1;
//     }
//   }
//   return true
// }

// console.log(validAnagram('anagram', 'nagaram'))

// //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const IsObj = (str) => {
//   let Obj = {}
//   for (let i of str) 
//     (Obj[i]) ? Obj[i] == 1 : Obj[i]++
//   return Obj
// }

// const isPermutation = (str1,str2) => {
//   if(str1 == str2)
//     return true
//   else {
//     if(str1.length !== str2.length)
//       return false
//     else {
//       const Obj1 = IsObj(str1);
//       const Obj2 = IsObj(str2);
//     for (let i in Obj1) 
//     {
//        if(Obj1[i] !== Obj2[i])
//          return false
//     }
//     }
//   }
//   return true
// }
// const w1 = "pale";
// const w2 = "alep";
// console.log(validAnagram(w1,w2))
// console.log(validAnagram('anagram', 'nagaram'))
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const isUnique = (s) => {
//   const set = new Set()
//   for(let i = 0; i < s.length; i++) {
//     if(set.has(s[i])) {
//       return false
//     }
//     set.add(s[i])
//   }
//   return true
// }

// var longestSubString = function(s) {
//   let max = 0
//   let k
//   for(let begin = 0; begin < s.length; begin++)
//   {
//     for(let end = 0; end < s.length; end++) 
//     {
//       var substring = s.substring(begin, end+1)
//       if(isUnique(substring) && substring.length > max) {
//         max = substring.length
//         sub = substring
//       }
//     }
//   }
//   return (max)
// }

//console.log(longestSubString('santhosh'))
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function validAnagram(first,second) {
//     if(res1.length != res2.length)  return false
//     let a = res1.split('').sort()
//     let b = res2.split('').sort() 
//     return (a.join('') == b.join(''))? true:false
// }

// const res1 = 'anagram';
// const res2 = 'nagaram';
// console.log(validAnagram(res1,res2)) 

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function countSuString(str,k) {
//     var N = str.length;
//     var answer = 0;
//     var map = new Map()
//     for(var i = 0; i < k; i++) {
//         if(map.has(str[i]))
//             map.set(str[i],map.get(str[i]) + 1)
//         else
//             map.set(str[i],1)
//     }
//     if(map.size == k)
//        answer++
//     for(var i = 0; i < N; i++) {
//         if(map.has(str[i]))
//            map.set(str[i],map.get(str[i]) - 1)
//         else
//            map.set(str[i],1)
//         if(map.has(str[i-k]))
//         map.set(str[i-k],map.get(str[i-k]) - 1)

//         if(map.has(str[i-k]) && map.get(str[i-k]) == 0){
//             map.delete(str[i-k]);
//         }
//         if(map.size == k){
//             answer++
//         }
//     }
//     return answer
// }

// console.log(countSuString('aabcdabcdc', 3)) 
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// var maxImportance = function(n,roads) {
//     let map = new Map();
//     for(let el of roads) {
//         if(map.get(el[0])) {
//             map.set(el[0],map.get(el[0]) + 1)
//         } else {
//             map.set(el[0],1)
//         }
//         if(map.get(el[1])) {
//             map.set(el[1],map.get(el[1]) + 1)
//         } else {
//             map.set(el[1],1)
//         }
//     }
//     return map
// }

// let n = 5;
// let roads = [[0,1],[1,2],[2,3],[0,2],[1,3],[2,4]]
// console.log(maxImportance(n,roads))

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/**
 * IF INPUT IS 4 THEN OUTPUT SHOULD BE LIKE  2*4*6*8 ==> 384
 */

// function productEven(num) {
//     if(num <= 0){
//         return "ERROR"
//     }
//     else if(num === 1) {
//         return 2
//     }
//     return 2*num*productEven(num-1)
// }
// const result = productEven(9)
// console.log(result)

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/**
 * IF INPUT IS 1234 THEN OUTPUT SHOULD BE LIKE 1*2*3*4 ==> 24
 */
// function productDigits(num) {
//     if(num % 10 == 0){
//         return 0
//     }
//     if(num < 10) {
//         return num
//     }
//     return num % 10 * productDigits(parseInt(num/10))
// }

// const product = productDigits(123412334)
// console.log(product)

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/**
 * FUNCTION IS PALANDROME OR NOT 
 */

// function isPalindrome(str,left,right){
//     if(left<right){
//         if(str[left] == str[right]){
//             return isPalindrome(str, left+1, right-1);
//         }
//         else{
//             return false
//         }
//     }
//     return true
// }
// console.log(isPalindrome('NAMAN',0,4))

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function reverseString(str){
//     if(!str){
//         return "enter the string"
//     }else if(str.length === 1){
//         return str
//     }
//     return str.slice(-1) + reverseString(str.slice(0,-1))
// }

// let res = reverseString("kumar")
// console.log(res)

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//REVERSE A NUMBER

//  function reverseNumer(num,result = 0){
//     if(num > 0){
//         return reverseNumer(parseInt(num/10),result*10 + num % 10)
//     }
//     return result
//  }
//  let number = reverseNumer(1234887);
//  console.log(number)

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//  let result = 0
//  function reverseNumer(num){
//     if(num > 0){
//         result = result*10 + num % 10
//         return reverseNumer(parseInt(num/10))
//     }
//     return result
//  }
//  let number = reverseNumer(1234778888779);
//  console.log(number)

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// CHECK WEATHER THE STRING IS PALAENDROME OR NOT
//  let STR = 'Shreya'
//  console.log(STR.slice(1,-1))

// function checkPalandrome(str) {
//     if(str.length <= 0) return true
//     if(str[0] === str.slice(-1)) return checkPalandrome(str.slice(1,-1)) 
//     else return false
// }

// let resP = checkPalandrome("aaaaaaaa")
// console.log(resP)
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function flatArray(arr) {
//     let result = []
//     for(let i = 0; i < arr.length; i++){
//         if(Array.isArray(arr[i])){
//             result = [...result, ...flatArray(arr[i])]
//       //OR  result = result.concat(flatArray(arr[i]))
//         }
//         else{
//             result.push(arr[i])
//         }
//     }
//     return result
// }
// console.log(flatArray([[1,2],[[3,4],[5,6]]]))

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function CapitalizeElements(arr,index) {
//     if(index < arr.length) {
//         arr[index] = arr[index][0].toUpperCase()+arr[index].slice(1);
//         CapitalizeElements(arr, index+1)
//     }
// } 

// let arr = ["santhosh", "kumar", "aayush"]
// console.log(CapitalizeElements(arr,0))

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function evenSum(obj) {
//     let sum = 0;
//     for(let key of obj) {
//         if(obj[key] !== null && typeof(obj[key]) === 'object'){
//             sum = sum + evenSum(obj[key])
//         }
//         else if(typeof(obj[key]) === 'number'){
//             if(obj[key] % 2 == 0){
//                 sum = sum + obj[key]
//             }
//         }
//     }
//     return sum
// }

// let obj = {
//     outer:2,
//     obj:{
//         inner:2,
//         otherObj:{
//         superNumber:8,
//         notNumber:true,
//         notEven:7
//         }
//      }
// }
// console.log(evenSum(obj))
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function capital(arr){
//     let result = []
//     if(arr.length == 0) return []
//     let s = arr[0] [0].toUpperCase() + arr[0].slice(1)
//     result.push(s)
//     return result.concat(capital(arr.slice(1)))
// }
// console.log(capital(["abc", "def", "ghi"]))

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function reverse(str) {
//     if(str.length == 0) return ""
//     return reverse(str.slice(1)) + str[0]
// }

// function reverseSentWords(sent) {
//     let words = sent.split(" ")
//     for(let i=0; i<words.length; i++) {
//         words[i] = reverse(words[i])
//     }
//     return words.join(" ")
// }
// let result = reverseSentWords("hi to all")
// console.log(result)

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function reverse(sent) {
//   let words = sent.split(" ")
//   let result = []
//   for(let i = 0; i < words.length; i++) {
//     result.push(words[i].split("").reverse().join(''))
//   }
//   return result.join(' ')
// }
// let result = reverse("hi to all I am santhosh")
// console.log(result)
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// function duplicates(arr){
//   let freq = new Map()
//   for(let i = 0; i < arr.length; i++){
//     if(freq.get(arr[i]) == undefined) freq.set(arr[i],1)
//     else freq.set(arr[i], freq.get(arr[i]) + 1)
//   }
//   let res = []
//   for(let pairs of freq){
//     if(pairs[1] > 1) res.push(pairs[0])
//   }
//   return res
// }

// let elements = [23,3,2,1,3,1]
// console.log(duplicates(elements))

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function majorElements(arr){
//   const map = new Map();
//   let maxFreq = 0;
//   let major = 0;
//   for(let el of arr){
//     if(map.get(el)){
//       map.set(el,map.get(el)+1)
//       if(maxFreq < map.get(el)){
//         maxFreq = map.get(el);
//         major = el
//       }
//     }else{
//       map.set(el,1)
//     }
//   }
//   console.log(major)
// }
// majorElements([1,2,2,1,1,2,2,2,1])

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//  let leastCountFreq = (str) =>{
    //  const map = new Map()
    //  for(let el of str){
    //   if(map.get(el)){
    //     map.set(el,map.get(el)+1)
    //   }else{
    //     map.set(el,1)
    //   }
//      }
//      let minFreq = Infinity;
//      let least = "";
//      for(let el of map){
//       if(minFreq > el[1]){
//         minFreq = el[1]
//         least = el[0]
//       }
//      }
//      console.log(least)
//     console.log(map)
//  }

//  leastCountFreq("ababbbab")

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// SWAP 2 INTEGERS WITHOUT USING 3RD VARIABLE AND WITHOUT USING PREDEFINE FUNCTIONS IN JAVASCRIPT

// let a = 5;
// let b = 10;

// a = a + b;  //15
// b = a - b;  // 15-10=5
// a = a - b;

// console.log(a, ",", b)

//+++++++++++++++++++++++++++++++++++++++++++++++++++++

//SWAP 2 STRINGS WITHOUT USING 3RD VARIABLE AN DWITHOUT USING JAVASCRIPT PREDEFINE FUNCTIONS

// let x = "some";
// let y = "good";

// x = "somegood";
// y = x.slice(y.length)
// x = x.slice(y.length)

// [x, y] = [y, x]

// console.log(x, ",", y)

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//SWAPING AN ARRAY

//   let reverse = (arr) => {
//   let i = 0;
//   let j = arr.length - 1
//   while (i < j) {
//     arr[i] = arr[i] + arr[j]
//     arr[j] = arr[i] - arr[j]
//     arr[i] = arr[i] - arr[j]
//     i++;
//     j--;
//   }
//   return arr
// }

// let array = [1,2,3,4,5,6,7,8,9,10]
// console.log(reverse(array))

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function rotateBy3(arr,k){
//   let arr1 = []
//   let arr2 = []
//   for(let i = 0; i < arr.length; i++){
//     if(i < arr.length - k) {
//       arr1.push(arr[i])
//     }
//     else {
//       arr2.push(arr[i])
//     }
//   }
//   return [...arr2,...arr1]
// }

// let arr = [1,2,3,4,5,6,7,8,9,10]
// let k = 3
// console.log(rotateBy3(arr,k))

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function sumOfLargestTwo(arr){
//     let firstLarge = 0;
//     let secondLarge = 0;
//     for(let i = 0; i < arr.length; i++){
//       if(arr[i] > firstLarge)
//       {
//         secondLarge = firstLarge;
//         firstLarge = arr[i]
//       }
//       else if(arr[i] > secondLarge){
//         secondLarge = arr[i]
//       }
//     }
//     return firstLarge + secondLarge
// }

// let array = [1,2,3,4,5,6,7,8,9,10]
// console.log(sumOfLargestTwo(array))

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// function smallestWindow(arr) {
  //  let map = new Map()
  //  for(let i = 0; i < arr.length; i++){
  //  if(map.get(arr[i]) == undefined) map.set(arr[i],1)
  //  else map.set(arr[i], map.get(arr[i]) + 1)
  // }
//   let size = map.size
//   let visited = new Array(256).fill(0)
// //   for(let i = 0; i < arr.length; i++){

// //   }
//   return visited
// }

// let str = "aabbcc"

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/**
 * INPUT AS STRING - ADOBECODEANC
 *            T    - ABC
 *        OUTPUT   - ADOBEC
 */

//   function String(s,t) {

//   let need = {}
//   let have = {}
//   let haveCount = 0;
//   let found = false;
//   let minSet = [0, s.length-1];
//   let min = minSet.length;

//   for(let i = 0; i < t.length; i++){
//     need[t[i]] = ++need[t[i]] || 1;
//   }
//   let i = 0;
//   let j = 0;
//   let needCount = Object.values(need).length;

//   while(j < s.length){
//     if(need[s[j]] !== undefined){
//       have[s[j]] = ++have[s[j]] || 1;
//       if(have[s[j]] == need[s[j]]){
//         ++haveCount
//       }
//     }
//     while(haveCount == needCount){
//       found = true
//       let tempMin = (j - i) + 1
//       if(tempMin < min){
//         min = tempMin;
//         minSet = [i,j ]
//       }
//       if(have[s[i]] !== undefined){
//         --have[s[i]];
//         if(have[s[i]] < need[s[i]]){
//           --haveCount
//         }
//       }
//       i++
//     }
//     j++
//   }
//   return found? s.substring(minSet[0], minSet[1]+1):"";
// };


// console.log(String("ADOBECODEBANC", "ABC"))


// var minWindow = function(s, t) {
//   var map = {};
//   var sLen = s.length;
//   var tLen = t.length;
//   var count = tLen;
//   var min = Number.MAX_SAFE_INTEGER;
//   var head = 0;
//   var left = 0;
//   var right = 0;

//   if (!sLen || !tLen) return '';

//   for (var i = 0; i < tLen; i++) {
//     if (map[t[i]] === undefined) {
//       map[t[i]] = 1
//     } else {
//       map[t[i]]++;
//     }
//   }
//   console.log(map)


//   while (right < sLen) {
//     if (map[s[right]] !== undefined) {
//       if (map[s[right]] > 0) count--;
//       console.log(count)
//       map[s[right]]--;
//     }
//     console.log(map)
//     right++;

//     while (count === 0) {
//       if (right - left < min) {
//         min = right - left;
//         head = left;
//       }

//       if (map[s[left]] !== undefined) {
//         if (map[s[left]] === 0) count++;
//         map[s[left]]++;
//       }

//       left++;
//     }
//   }

//   return min === Number.MAX_SAFE_INTEGER ? '' : s.substr(head, min);
// };

// console.log(minWindow("ADOBECODEBANC", "ABC"))

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let result = 0
// var reverse = function(x) {
//     let a = Math.abs(x)
//     if(a > 0){
//       result = result*10 + a % 10
//       return reverse(parseInt(a/10))
//     }
//     if(x < 0){
//       return '-'+result
//     }
//     else{
//       return result
//     }
// };
// console.log(reverse(-123))