//BIG O Notation   we need to know little bit of mathamatics like log

// tell me big O for this algorithem

/*
    Motivate the need for something like Big O Notation
    Describe what is big O Notation
    SImplify big O Notation
    Define time and space complexity
    Evaluate the space and time complexity of different algorithems 
       using Big O Notation
*/

/*
    Here we have multiple implimentation of a single function
       ==> How can we know which one is best?
*/

/*
    for example I am taking an example of reversing a string
    function reverse(string) {
        let str = '';
        for(let i = string.length-1; i >= 0; i--)
            {
                str = str + string[i]
            }
        return str
    }

    function reverse(string){
        let str = '';
        for(let i = string.length - 1, j = 0; i >= 0; i--; j++)
            {
                str[j] = str[i]
            }
        return str.join(' ');
    }

    function reverse(string) {
        return string.split(' ').reverse().join(' ')
    }

    function reverse(string) {
        let i = string.length
        output = ''
        while(i > output) {
            output = output + string.substring(i - 1, i);
            i--
        }
        return output
    }
*/

/*
    one more example is sum of all numbers is an example

    function add(n) {
        let total = 0
        for(let i = 0; i <= n; i++) {
            total += i
        }
        return total
    }
    console.log(add(10))     1+2+3+----10 = n

    method-02 with formula

    function add(n) {
        return n * (n+1)/2;     // It is fast comparing to privious one  // n/2(2a+(n-1)d)
    }
    console.log(add(10))

    // Faster, Less memory-intensive, More 
*/
// function add(n) {
//     let total = 0
//     for(let i = 0; i <= n; i++) {
//         total += i
//     }
//     return total
// }

// function add(n) {
//     return n * (n+1)/2;     // It is fast comparing to privious one
// }

// let t1 = performance.now();
// add(10);
// let t2 = performance.now();
// console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds`)

/**
 * DIFFERENT MACHINES WILL RECORD DIFFERENT TIMES
 * THE SAME MACHINE WILL RECORD DIFFERENT TIMES
 * FOR FAST ALGORITHMS, SPEED MEASUREMENTS MAY NOT BE PRCISE ENOUGH
 */

/**
 * RATHER THEN COUNTING SEC WHICH ARE SO VARIABLE
 * LET'S COUNT NUMBER OF SIMPLE OPERATIONS THE COMPUTER HAS TO PERFORM
 * IN METHOD 1 WE HAVE 'N' OPERATIONS
 * IN METHOD 2 WE HAVE 3 OPERATIONS
 */

/**
 * DEALING WITH METHOD ONE
 * function add(n) {
        let total = 0
        for(let i = 0; i <= n; i++) {
            total += i
        }
        return total
    }
  *HERE WE HAVE N ADDITIONS AND N ASSIGNMENTS (TOTAL += I)
  *1 ASSIGNMENT (i=1)
  *n comparisions (i <= n)
  *n additions and n assignments
              // TOTAL TIME IS 5n+2
 */

/**
 * SPACE COMPLEXITY
 * AUXILARY SPACE COMPLEXITY TO REFER TO SPACE REQUIREMENT BY THE ALGORITHM,NOT INCLUDING SPACE TAKEN UP BY THE INPUTS
 * SPACE COMPLEXITY FOR MOST PRIMITIVES (BOOLEANS, NUMBERS, UNDEFINED, NULL) ARE CONSTANT SPACE
 * STRING REQUIRE O(n) space (WHERE n IS THE STRING LENGTH) (n IS LENGTH FOR ARRAY) (AND NUMBER OF KEYS FOR OBJECT)
 */
/**
 * function double (arr) {
 *  let newArr = [];
 *  for(let i = 0; i < arr.length; i++) {
 *    newArr.push(2*arr[i])
 * }
 * return newArr array.length =5
 * }
 * HERE SPACE COMPLEXITY IS 0(5)
 */
//.......................................................//
 /**
  *  SOME OF THE MOST COMMON COMPLEXITIES 0(n), O(1), O(n*n)
  *  SOMETIMES BIG O EXPRESSIONS INVOLVE MORE COMPLES MATHEMATICAL EXPRESSION
  *  SOME LOGS =>   log8(base)2 = 3 ---> 2(power)3 = 8      // here we will omit 2  log8 = 3
  *  having logorthematic time complexity is best
  *  CERTAIN SEARCHING ALGORITHEMS HAVE LOGARTHMIC TIME COMPLEXITY
  *  EFFICIENT SORTING ALGORITHMS INVOLVE LOGARITHMS
  *  RECURSION SOMETIMES INVOLVES LOGARITHMS SPACE COMPLEXITY
  */
         //     O[N+5]
 /**
  * RECAP
  * TO ANALIZE PERFORMANCE OF AN ALGORITHM WE USE BIG O NOTATION
  * BIG O NOTATION GIVES US A HIGH LEVEL UNDERSTANDING OF TIME AND SPACE COMPLEXITY
  * THE TIME AND SPACE COMPLEXITY DEPENDS ON THE ALGORITHEM NOT THE HARDWARE USED TO RUN THE ALGORITHM
  * O(n) => LINEAR TIME
  * O(1) => CONSTANT TIME
  * O(n*n) => QUADRATIC TIME
  * O(n*n*n) => CUBIC TIME
  *  QUIZ (https://www.udemy.com/js-algorithms-and-data-structures-masterclass/learn/v4/t/quiz/4412974)
  *       (https://www.udemy.com/js-algorithms-and-data-structures-masterclass/learn/v4/t/quiz/4412978)
  */

 /**
  * ELEMENTARY SORTING ALGORITHMS
  * SORTING IS THE PROCESS OF REARRANGING THE ITEMS
  * THERE ARE DIFFERENT ALGORITHEMS FOR SORTING HAVING ITS OWN ADVANTAGES AND DISADVANTAGES
  * EXAMPLE FOR ELEMENTARY SORT IS 1) bubble sort 2) selection sort 3) Insertion sort
  * to see performance (https://www.toptal.com/developers/sorting-algorithms)
  */

 /**
  * IN BUILT JS SORTING
  * let array = ['A', "B", "C"].sort() // Done alpheberic order     n**n , n*logn
  * function numberCompare (num1, num2) {
  *    return num1 - num2;
  * }
  * [6,4,3,2,1,9].sort(numberCompare)
  * 
  * function compareByLen (str1, str2) {
  *     return str1 - str2
  * }
  * ["steele", "Colt", "Data structure", "Algorithms"].sort(compareByLen)
  */

 /**
  * before we sort, we must swap!
  * how to swap
  * NORMAL TECHNIQUE *METHOD1*
  * function swap(arr, idx1, idx2) {
  *     var temp = arr[idx1];
  *     arr[idx1] = arr[idx2];
  *     arr[idx2] = temp;
  * }
  * 
  * ES2015
  * const swap = (arr, idx1, idx2) {
  *     [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
  * 
  *     ........................(https://visualgo.net/en/sorting).................
  * }
  */

 /*
    function bubbleSort(arr) {
        for(let i = 0; i < arr.length; i++) {
            for(let j = 0; j < arr.length; j++) {
                console.log(arr, arr[j], arr[j+1]);
                if(arr[j] > arr[j+1]) {
                    var temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp
                }
            }
             console.log("ONE PASS COMPLETE")
        }
        return arr
    }
 console.log(bubbleSort([37, 45, 29, 8]))

  function bubbleSort(arr) {
    for(let i = arr.length; i > 0; i--) {
        for(let j = 0; j < i - 1; j++) {
            console.log(arr, arr[j], arr[j+1]);
            if(arr[j] > arr[j+1]) {
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp
            }
        }
        console.log("ONE PASS COMPLETE")
    }
    return arr
}
console.log(bubbleSort([37, 45, 29, 8]))

function bubbleSort(arr) {
    var noSwaps;
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length - 1; j++) {
            console.log(arr, arr[j], arr[j+1]);
            if(arr[j] > arr[j+1]) {
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp
                noSwaps = false
            }
        }
       console.log("ONE PASS COMPLETE")
       if(noSwaps) break;
    }
    return arr
}
console.log(bubbleSort([37, 45, 29, 8]))
//////////////////////////////////////////// TIME COMPLEXITY OF BUBBLE SORT IS O(n*n)
*/

/**
 * SELECTION SORT   EXAMPLE IS  [5, 3, 4, 1, 2]
 * IT WILL FIND SMALLEST ELEMENT IN THE ARRAY AND PLACE IT IN FIRST POSITION
 * AND GO TO SECOND ELEMENT AND DO THE SAME OPRATION
 * STORE THE FIRST ELEMENT AS THE SMALLEST VALUE 
 * COMPARE THIS ITEM TO THE NEXT ITEM IN THE ARRAY UNTIL YOU FIND A SMALLER NUMBER
 * IF A SMALLER NUMBER FOUND DESIGNATETHAT SMALLER NUMER TO BE THE MINIMUM AND CONTINUE UNTIL END OF THE ARRAY
 * IF THE MINIMUM IS NOT THE VALUE (INDEX) YOU INITIALLY BEGAN WITH, SWAP THE TWO VALUES
 * REPEAT THIS WITH THE NEXT ELEMENT UNTL THE ARRAY IS SORTED
 * 
 * ...........................(https://visualgo.net/en/sorting).................................................
 */

/*
  function selection(arr) {
      for(var i = 0; i < arr.length; i++) {
          var lowest = i;
          for(var j = i+1; j < arr.length; j++) {
              if(arr[j] < arr[lowest]) {
                  lowest = j
              }
          }
          console.log("*******************")
          console.log(arr)
          console.log(i,lowest)
          console.log("SWAPPING TO: ")
          var temp = arr[i];
          arr[i] = arr[lowest];
          arr[lowest] = temp
          console.log(arr)
          console.log("*******************")
      }
      return arr
  }
selection([34,22,10,19,17])

 function selection(arr) {
      for(var i = 0; i < arr.length; i++) {
          var lowest = i;
          for(var j = i+1; j < arr.length; j++) {
              if(arr[j] < arr[lowest]) {
                  lowest = j
              }
          }
          if(i !== lowest) {
          console.log(i,lowest)
          console.log("SWAPPING TO: ")
          var temp = arr[i];
          arr[i] = arr[lowest];
          arr[lowest] = temp
          console.log(arr)
          console.log("*******************")
          }
      }
      return arr
  }
selection([34,22,10,19,17])

function selection(arr) {
      const swap = (arr, idx1, idx2) => {
          ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]])
      }
      for(var i = 0; i < arr.length; i++) {
          var lowest = i;
          for(var j = i+1; j < arr.length; j++) {
              if(arr[j] < arr[lowest]) {
                  lowest = j
              }
          }
          if(i !== lowest) {
          console.log(i,lowest)
          console.log("SWAPPING TO: ")
          swap(arr, i, lowest)
          console.log(arr)
          console.log("*******************")
          }
      }
      return arr
  }
selection([34,22,10,19,17])
 */

// function selection(arr) {
//     const swap = (arr, idx1, idx2) => {
//         ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]])
//     }
//     for(var i = 0; i < arr.length; i++) {
//         var lowest = i;
//         for(var j = i+1; j < arr.length; j++) {
//             if(arr[j] < arr[lowest]) {
//                 lowest = j
//             }
//         }
//         if(i !== lowest) {
//         console.log(i,lowest)
//         console.log("SWAPPING TO: ")
//         swap(arr, i, lowest)
//         console.log(arr)
//         console.log("*******************")
//         }
//     }
//     return arr
// }



// Namastey js

/**
 * INSERSION SORT PSEUDOCODE
 * => START BY PICKING THE SECOND ELEMENT IN THE ARRAY
 * => NOW COMPARE THE SECOND ELEMENT WITH THE ONE BEFORE IT AND SWAP IF NECESSARY
 * => CONTINUE TO THE NEXT ELEMENT AND IF IT IS IN THE INCORRECT ORDER, ITERATE THROUGH THE SORTED PORSION(i.e THE LEFT SIDE)
 * => TO PLACE THE ELEMENT IN THE CORRECT PLACE
 */

// function insersionSort(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         var currentValue = arr[i]
//         for(var j = i-1; j >= 0 && arr[j] > currentValue; j--) {
//             arr[j+1] = arr[j]
//             console.log(arr)
//         }
//         arr[j+1] = currentValue
//         console.log(arr)
//     }
//     return arr;
// }

// insersionSort([2,1,9,76,4])

//const arr = [2,2,3,4,9,14,25,7]

// var moveZeroes = function(nums) {
//     for(let i = 0; i < nums.length; i++){
//         if(nums[i] == 0){
//             nums.splice(i,1)
//             nums.push(0)
//         }
//     }
//     return nums
// };

// let nums = [0,0,1]
// console.log(moveZeroes(nums))
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function threeSum(nums){
    if(nums.length == 0) return []
    var result = []
    nums.sort((a,b) => a-b)
    for(let i = 0; i < nums.length; i++){
        if(i > 0 && nums[i] == nums[i-1]) continue;
    }
    let target = 0 - nums[0]
    let left = i+1
    let right = nums.length - 1
    while(left < right){
        let sum = nums[left] + nums[right]
        if(sum > target){
            right--
        }else if(sum < target){
            left++
        }else{
            result.push(nums[i],nums[left],nums[right])
            while(nums[left] == nums[left+1]) left++
            while(nums[right] == nums[right-1])right--
            left++
            right--
        }
    }
    return result
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//binary search it will be used when arr is given in sorted order 
function binarySearch(arr,num){  // [1,2,3,5,6,7,8,9,10,11,12,14]
   let left = 0;
   let right = arr.length;
   let middle = Math.floor((left+right)/2);
   while(left < right && arr[middle] != num){
     if(arr[middle] < num){
        left = middle + 1
     }else{
        right = middle - 1
     }
     middle = Math.floor((left+right)/2)
   }
   return (arr[middle] = num)? middle : -1
}
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// arr = [1,2,3,4,5,6]
function binarySearch1(arr, val, left = 0, right = arr.length-1){
    if(left > right) return -1
    let mid = Math.floor(left+right/2);
    if(arr[mid] == val) return mid;
    else if(arr[mid] > val){
        return binarySearch(arr, val, left = 0, right = mid+1)
    }else{
        return binarySearch(arr, val, left = mid-1, right = arr.length-1)
    }
}
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 11 leetcode 2 pointer
function maxArea(heights){
    let left = 0
    let right = heights.length-1
    let maximum = 0
    while(left < right){
        let width = right - left
        let maxArea = Math.min(heights[left],heights[right])*width
        maximum = Math.max(maximum,maxArea)
        if(heights[left] <= heights[right]){
            left++
        }else{
            right--
        }
    }
    return maximum
}
let arr = [1,8,6,2,5,4,8,3,7]
console.log(maxArea(arr))
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function isPalandrome(str){
    let cleanStr = cleanUp(str)
    return isPld(cleanStr)
}

function cleanUp(str){
    let char = "abcdefghijklmnopqrstuvwxyz"
    let newStr = ""
    for(let i = 0; i < str.length; i++){
        let lcase = str[i].toLowerCase()
        if(char.indexOf(char) != -1){
            newStr = newStr + lcase
        }
    }
    return newStr
}

// function isPld(str){
//     let left = 0
//     let right = str.length - 1
//     while(left < right){
//         if(str[left] != str[right]){
//             return false
//         }
//         left++
//         right--
//     }
//     return true
// }

function isPld(str){
    if(str.length <= 1) return true
    if(str[0] == str.slice(-1)) return isPld(str.slice(1,-1))
    else return false
}

// function isPld(str){
//     if(str.length <= 1)return true
//     if(str[0] == str.slice(-1) && isPld(str.slice(1,-1)))
// }
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function lengthOfLongestString(str){
    let longStr = 0
    let set = new Set()
    let left = 0
    let right = 0
    while(right < str.length){
        if(!set.has(set[right])){
            set.add(set[right])
            longStr = Math.max(longStr,set.size);
            right++
        }else{
            set.delete(left)
            left++
        }
    }
    return longStr
}
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//palindromin substring 647
/**
 * Input: s = "abc"
   Output: 3
   Explanation: Three palindromic strings: "a", "b", "c".
 */
/*
Input: s = "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
 */
function palSuString(str){
    let count = 0
    for(let i = 0; i < str.length; i++){
        let left = i
        let right = i
        helper(left,right) //0,0,1,1,2,2,3,3
        helper(left,right+1) //0,1,1,2,2,3,3,4
    }
    function helper(left,right){
        while(left >= 0 && right <= str.length - 1 && str[left] == str[right]){
            count++
            left--
            right++
        }
    }
    return count
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function moveZeroes1(arr){      //[0,1,0,3,12]
    let left = 0
    let right = 0
    while(right < arr.length){
        if(arr[right] != 0){
            [nums[left], nums[right]] = [nums[right], nums[left]]
            left++
        }
        right++
    }
}
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function twoSum(arr,target){
    let left = 0
    let right = arr.length - 1
    while(left < right){
        if(arr[left] + arr[right] == target){
            return [left+1,right+1]
        }else if(arr[left] + arr[right] < target){
            left++
        }else {
            right--
        }
    }
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// FIRST CLASS :)> CRATING OUR FIRST CLASS REMEMBER TO ADD 

class Animal{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    getInfo(){
        return(
            `The name of the animal is ${this.name} and age is ${this.age}`
        )
    }
}

// const firstAnimal = new Animal("Rex", 10)
// console.log(firstAnimal)
// console.log(firstAnimal.getInfo())

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Inhertance

// class Dog extends Animal {
//     constructor(name,age,breed){
//         super(name,age)
//         this.breed = breed
//     }

//     bark(){
//         return "woof"
//     }
// }

// class cat extends Animal {
//     constructor(name,age,weight){
//         super(name,age)
//         this.weight = weight
//     }
// }

// const myDog = new Dog("Rex", 2, "German Shepard")
// console.log(myDog.getInfo());
// console.log(myDog.breed)
// console.log(myDog.bark())
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function spiralMatrix(matrix){
    let top = 0
    let left = 0
    let right = matrix[0].length-1
    let bottom = matrix.length-1
    let result = new Array()
    let size = right*bottom
    while(result.length < size){
        for(let i = left; i <= right; i++){
            result.push(matrix[top][i])
        }
        top++
        for(let i = top; i <= bottom && result.length < size; i++){
            result.push(matrix[i][right])
        }
        right--
        for(let i = right; i >= left && result.length < size; i--){
            result.push(matrix[bottom][i])
        }
        bottom--
        for(let i = bottom; i >= top && result.length < size; i--){
            result.push(matrix[i][left])
        }
        left++
    }
    return result
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function maxProfit(prices){
    let min = prices[0],Max = 0
    for(let i = 1; i < prices.length; i++){
        min = Math.min(min,prices[i])
        profit = min - prices[i]
        Max = Math.max(profit,Max)
    }
    return Max
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function groupAnagrams(str){
    let sort = str.map(a => a.split('').sort().join(''))
    let obj = {}
    for(let i = 0; i < sort.length; i++){
        if(!obj[sort[i]]){
            obj[sort[i]] = [str[i]]
        }else{
            obj[sort[i]].push(str[i])
        }
    }
    return Object.values(obj)
}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function flattenArr(arr){
    let flat = []
    for(let i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i]) == false) flat.push(arr[i])
        else flat.concat(flattenArr(arr[i]))
    }
    return flat
}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function flatten(arr){
    let flat = []
    function handler(arr){
        let counter = 0
        while(counter < arr.length){
            const val = arr[counter];
            if(Array.isArray(val)){
               handler(val);
            }else{
               flat.push(val)
            }
            counter++;
        }
    }
    handler(arr);
    return flat
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

