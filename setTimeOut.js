/**
 * THE SETTIMEOUT IS A FUNCTION IT IS ISN'T TRIGGERED UNTIL THE FOR LOOP EXECUTION HAS COMPLETED
 */

// for(var i = 0; i < 10; i++){
//     let j = i;
//     setTimeout(() => console.log(j), 1000*j);
// }
// let num = 3.75+4
// console.log(num/2)
// console.log(num*num/4)
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let arr = [1,2,3,4,5,6,7,8,9,10]
function binarySearch(arr,val,startPos = 0, endPos = arr.length-1){
    if(startPos > endPos) return -1
    let middleIndex = Math.floor(startPos+endPos)/2
    if(arr[middleIndex] == val) return middleIndex
    else if(arr[middleIndex] > val){
      return binarySearch(arr,val,startPos=0, endPos=middleIndex+1)
    }else{
      return binarySearch(arr,val,startPos=middleIndex+1,endPos=middleIndex-1)
    }
}
binarySearch(arr,6)
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function isPrime(num){
    for(let i = 2; i < num**0.5; i++){
        if(num%i == 0) return false
    }
    return true
}

function isPrime1(num, div = 3){
   if(num === 2) return true
   if(num < 2 || num % 2 === 0) return false
   if(div*div > num) return true
   if(num % div === 0) return false
   return isPrime1(num, div+2)
}

function printPrime(num){
    let Array = [2,3]
    for(let i = 4; i <= num; i++){
        if(isPrime1(i)){
            Array.push(i)
        }
    }
    return Array
}