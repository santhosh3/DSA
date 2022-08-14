/**
 * THE FUNCTION WHICH CALLS IT SELF IS CALLED RECURSSION
 * .......................
function show() {
    console.log("HI")
}
show()
..........................
function show() {
  console.log("HI")
}
function abc() {
    show()
}
abc()
.........................
function show() {
    console.log("HI");
    show()
}
show()
.........................
let num = 1
function show() {
    console.log("HI" , num);
    num++
    show();
}
show();
.........................
let num = 1
function show() {
    console.log("HI" , num);
    num++
    if(num <= 100)
    show();
}
show();
 */

/**
 * FACTORIAL USING RECURSSION
 * EX:-  5! = 5*4*3*2*1
 *       N! = (N)*(N-1)*(N-2)*(N-3).....(N-N)
 * ......................................
 function fact(n) {
    if(n == 0)
      return 1
    else
      return n = n*fact(n - 1)
}
let num = 3
let result = fact(num)
console.log(result)
.........................................
let num = 1
function show() {
    console.log(num);
    if(num < 100)
    num++
    show();
}
show();
..........................................
let num = 1
function show() {
    console.log(num);
    num++
    if(num <= 100)
    show();
}
show();
..........................................
function fib(n) {
    const result = [0,1];
    for(let i = 2; i <= n; i++) {
        let a = result[i-1];
        let b = result[i-2];

        result.push(a+b);
    }
    return result
}

console.log(fib(10))
.........................................
 */

/**
 * DEEP COPY USING RECURSSION
 */
//  const createDeepCopy = (input) => {
//     if(typeof input !== "object") {
//         return input
//     }
//     let copy = Array.isArray(input)? [] : {};
//     for(key in input) {
//         const value = input[key];
//         copy[key] = createDeepCopy(value)
//     }
//     return copy
// }


// const players = {
//     fName : "Jhon",
//     lName : "Doe",
//     location : {
//         city : "Hyderabad",
//         state : "telangana"
//     },
//     score : [23,12,4,32,12]
// }

// let copy = createDeepCopy(players)
// copy.location.city = "visakapatnam"
// copy.score[2] = 100  

// console.log("original :", players)
// console.log("copy :", copy)

// let A = parseInt([3,4,5].join(''))
// let B = parseInt([6,7,8].join(''))
// console.log(A+B)

// function takeShower(){
//     return "Showering!"
// }

// function eatBreakfast(){
//     let meal = cookFood()
//     return `Eating ${meal}`
// }

// function cookFood(){
//     let items = ["Oatmeal", "Eggs", "Protein Shake"]
//     return items[Math.floor(Math.random()*items.length)];
// }
// function wakeUp() {
//     console.log(takeShower())
//     console.log(eatBreakfast())
//     console.log("Ok ready to go to work!")
// }

// console.log(wakeUp())

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//SUM OF N NATURAL NUMBERS

// function sum(n) {
//     if(n == 1) console.log(1)
//     console.log(n + sum(n-1))
    
// }
// sum(10)

// function sumRange(num){
//     if(num === 1) return 1; 
//     return num + sumRange(num-1);
//  }
 
//  let A = sumRange(4)
//  console.log(A)
// program to count down numbers to 1
  
// function countDown(number) {
//     console.log(number);

//     if ( number - 1 > 0) {
//         countDown(number - 1);
//     }
// }

// countDown(4);

let arr = [0,1,2,3,4,5,6,7,8,9,10]

// function recursion(index) {
//    if(index < arr.length) {
//    console.log(arr[index])
//    index = index + 1
//    recursion(index)
//    }
// }
// recursion(0)

// function recursion(index) {
//     if(index >= arr.length) {
//         return 
//     }
//     index = index + 1
//     recursion(index)
//     console.log(arr[index - 1])
//  }
//  recursion(0)

// function countDown(count) {
//     if(count < 0){
//         return
//     }
//     console.log(count)
//     count--
//     countDown(count)
//   //  console.log(count)
// }
// countDown(10)


// function sumRange(num){
//     if(num == 1)
//     {
//         return 1;
//     }
//     return num + sumRange(num -1)
// }
// let sum = sumRange(100)
// console.log(sum)
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function collectOddValues(arr) {
//     let result = [];
// function helper(helperInput) {
//     if(helperInput.length == 0) {
//         return;
//     }
//     if(helperInput[0] % 2 !== 0) {
//         result.push(helperInput[0])
//     }
//     helper(helperInput.slice(1))
// }
// helper(arr)
// return result
// }

// const result = collectOddValues([1,2,3,4,5,6,7,8,9])
// console.log(result)

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let array = [1,2,3,4,5,6,7,8,9]
// console.log(array.filter( (arr,index) => (arr%2 != 0)))

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//PURE RECURSSION

// function collectOddValues(arr) {
//     let newArr = []
//     if(arr.length == 0) {
//         return newArr
//     }
//     if(arr[0] % 2 !== 0) {
//         newArr.push(arr[0])
//     }
//     newArr = newArr.concat(collectOddValues(arr.slice(1)))
//     return newArr
// }
// const result = collectOddValues([1,2,3,4,5,6,7,8,9])
// console.log(result)

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/**
 * INPUT :- [abc]
 * OUTPUT :- 2           explanation is = [ab,bc]  // subsequence of substring
 */

// function subsequence(str) {
//    let end = 0
//    let start = 0
//    let count = 0

//    const uniqueCharSet = new Set();
//    while(end < str.length) {
//     if(!uniqueCharSet.has(str[end])) {
//         uniqueCharSet.add(str[end])
//         end++;
//         if(uniqueCharSet.size == 2){
//             count++
//         }
//         if(uniqueCharSet.size > 3){
//             uniqueCharSet.delete(str[start])
//             start++
//         }
//     }
//     else{
//         uniqueCharSet.delete(str[start])
//         start++
//     }
//    }
//    return count
// } 

// const result = subsequence('abc')
// console.log(result)
 

// function longestSubString(str) {
//     let end = 0
//     let start = 0
//     let maxlength = 0

//     const uniqueCharSet = new Set();
//     while(end < str.length) {
//         if(!uniqueCharSet.has(str[end])) {
//             uniqueCharSet.add(str[end]);
//             end++;
//            if(uniqueCharSet.size > maxlength) {
//              maxlength = uniqueCharSet.size
//            }
//         }
//         else {
//             uniqueCharSet.delete(str[start])
//             start++
//         }
//     }
//     return maxlength
// }
// const result = longestSubString('abaabcbb')
// console.log(result)

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/**
 * INPUT AS [3,5,2,8] => 3*5*2*8 =(ANS)=> OUTPUT
 */

// function product(arr)
// {
//     if(arr.length == 0) return 1
//     return arr[0] * product(arr.splice(1))
// }
// let res = product([1,2,49,5,6,798,8,9,1980,98,20,914,15,16,17,11,12,13,3])
// console.log(res)

// let a = [1,2,3]
// console.log(a.shift())

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/**
 * INPUT AS POW(3,5) => 3*3*3*3*3 = ()=> OUTPUT
 */

// function power(b,exp) {
//     if(exp == 0) return 1
//     return b*b*power(b, exp-2)
// }
// console.log(power(2,8))

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let str = "santhosh";

// function isPalandrome(str){
//     let isPlr = true
//     let len = str.length
//     let mid = Math.floor(len/2)
//     for(let i = 0; i < mid; i++){
//         if(str[i] == str[n-i-1]){
//             continue;
//         }else{
//             isPlr = false
//         }
//     }
//     return isPlr
// }

// function isPalandrome1(str, start = 0, end = str.length-1){
//     if(start >= end) return true
//     if(str[start] != str[end]) return false
//     else return isPalandrome(str,start+1,end-1)
// }

// function power1(x,n){
//     if(n == 0) return 1
//     if(n < 0) return 1/power1(x,Math.abs(n))
//     return x*power1(x,n-1)
// }


// function power(x,n){
//     if(n == 0) return 1
//     if(n == 1) return x
//     if(n < 0) return 1/power(x,Math.abs(n))
//     let temp = power(x,n/2)
//     if(n % 2 == 0){
//         return temp*temp
//     }else{
//         x*temp*temp
//     }
// }

// Backtracking
// how many paths are there to reach the goal

// let pushed = [1,2,3,4,5]
// let poped = [4,3,5,1,2]
// let len = pushed.length 

// let j = 0
// let result = []

// for(let i = 0; i < len; i++){
//    result.push(pushed[i])           
//    while(result.length !== 0 && j < len && result[result.length-1] == poped[j]){
//      result.pop()
//      j++
//    }
// }

// console.log(j === len)


function maxProfit(prices){
    let sellIdx = prices[prices.length-1]
    let profit  = 0
    for(let buyIdx = prices.length; buyIdx >= 0; buyIdx--){
        let buyVal = prices[buyIdx];
        let sellVal = prices[sellIdx];
        if(buyVal - sellVal >= 0){
           sellIdx = buyIdx
        }else{
            let price = sellVal - buyVal
            profit = Math.max(profit,price)
        }
        return profit
    }
}

// console.log("11"-1) //10
// console.log("11"+1) //"111"

// let a = Math.random()
// console.log(a)
function insertionSort(arr){
    var currentVal;
    for(var i = 1; i < arr.length; i++){
        currentVal = arr[i];
        for(var j = i-1; j >= 0 && arr[j] > currentVal; j--){
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal
    }
    return arr
}
let arr1 = [2,1,9,76,4]
console.log(insertionSort(arr1))