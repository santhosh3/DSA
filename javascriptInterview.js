//Promises in javascript
//A promise is a special javascript object that represents an eventual result of an asychronous action
//Promise has 2 states =>{
// 1) Promise state = promise can be in one of 3 states pending, fulfilled, rejected
//   a) pending => Neither rejected or fullfilled, at this state promise is undefined
//   b) Fulfilled => Action completed successfully, value property contains the real value
//   c) Rejected => Action failed, value property contains the reason of failure
// 2) Promise Value = If everything goes well, this property will contain the real value of promise
//  }

// Reject state of promise

// const myPromise = new Promise((resolve,reject) => {
//     reject("I am rejected")
// })

// Resolved state of promise

// const myPromise = new Promise((resolve,reject) => {
//     resolve("I am resolved")
// })

// Pending state of promise

// const myPromise = new Promise((resolve,reject) => {

// })

// const myPromise = new Promise((resolve,reject) => {
//     resolve("I am resolved")
// })

// myPromise.then((value) => {
//     console.log(value)
// })

// Function to calculate square of a number

// function calculateSquare(number){
//     const promise = new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             const result = number * number
//             resolve(result)
//         },1000)
//     })
//     return promise
// }

// calculateSquare(2).then(valueOne => {
//     console.log(valueOne);
//     return calculateSquare(3)
// }).then(valueTwo => {
//     console.log(valueTwo);
//     return calculateSquare(4)
// }).then(valueThree => {
//     console.log(valueThree)
// })

// At present async/await is used heavily It is just a wrapper to restyle code and make promises easier to read and use
// the purpose of promise is not to avoid callback hell situation but to handle Asychronous operations "Efficiently"
// **********************************************************************************************************************************************
// const isValidURL = (url) => {
//     try {
//         new URL(url);
//         return true
//     } catch(error){
//         return false
//     }
// };
// ***************************************************************************************************************************************************
// const a = isValidURL("https://google.com")
// console.log(a)

// const isEmpty = (string) => {
//     if(string.trim() == "") return true
//     else return false
// }
// const userName = ""
// const userName1 = "software"
// console.log(isEmpty(userName), isEmpty(userName1))

// for( var i = 0; i < 3; i++){
//     setTimeout(() => console.log(i), 1)
// }

// for( let i = 0; i < 3; i++){
//     setTimeout(() => console.log(i), 1) 
// }

//  const rating = rate => "*****/////".slice(5-rate, 10-rate)
//  console.log(rating(5))

// const creditCardNumber = "12123434454555666";
// const last4Digits = creditCardNumber.slice(-4);
// const maskedNumber = last4Digits.padStart(creditCardNumber.length, "*");
// console.log(maskedNumber);

//******************************************************************************************************************* */

// Shallow Copy

/**
 * when a new reference variable is assigned the value of the old reference variable, The
 * address stored in the old reference variable copied into the new one
 * 
 * this means both the old and new features variable point to the same object in memory
 * 
 * As a result if the state of the oject changes through any of the reference variable it is
 * reflected for both
 */
//let emp = {
//     name : "xyz",
//     age : 23,
//     college : "abc"
// }

// console.log("********* before ************")
// let employe = emp
// console.log("new Employe =>", employe)

// console.log("********* After *************")
// employe.name = "XYZ";
// console.log("Employee =>", emp)  
// console.log("new Employe =>", employe)

/*ans
********* before ************
new Employe => { name: 'xyz', age: 23, college: 'abc' }
********* After *************
Employee => { name: 'XYZ', age: 23, college: 'abc' }
new Employe => { name: 'XYZ', age: 23, college: 'abc' }
*/

//DEEP COPY
/**
 * Deep copy makes a copy of all the members of the old obhects, allocates separate memory location for the new object
 * and then assigns the copied members to the new object
 * In this way,both the objects are independent of each other and incase of any modefication to either one the other is not effected
 */

// let emp = {
//     name : 'abc',
//     age : 23,
//     place : "hyd"
// }
// console.log("***** Deep Copy *******")
// let newEmp = JSON.parse(JSON.stringify(emp))
// console.log("emp =>" , emp)
// console.log("newEmp =>", newEmp)
// console.log("***** After modefication *******")
// newEmp.name = "ABC"
// newEmp.age = 34
// console.log("emp =>", emp)
// console.log("newEmp =>", newEmp)
/**
 * ***** Deep Copy *******
emp => { name: 'abc', age: 23, place: 'hyd' }
newEmp => { name: 'abc', age: 23, place: 'hyd' }
***** After modefication *******
emp => { name: 'abc', age: 23, place: 'hyd' }
newEmp => { name: 'ABC', age: 34, place: 'hyd' }
 */
/**
 * SHALLOW COPY METHODS
 *  spread syntax. .concate(), .slice(), .Array.from()
 *  .Object.assign()
 *  .Object.create()
 */
//Lodash is js library provides deepcopy
//*********************************************************************************************************************** */

// function a(){
//     var b = 10
//     c();
//     function c(){ 
//         return b
//     }
// }

// a();
// console.log(b)

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function fib(n){
//     if(n < 2) return 1
//     return fib(n-1)+fib(n-2)
// }
// console.log(fib(4))

function fiba(n){
   const res = [1,1]
   for(let i = 2; i <= n; i++){
     let a = res[i-1]
     let b = res[i-2]
     res.push(a+b)
   }
  return res[n]
}
console.log(fiba(4))




