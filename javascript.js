// let name = {
//     firstName: "Santhosh",
//     lastName: "kumar",
//     printFullName: function(){
//         console.log(this.firstName+ " " + this.lastName)
//     }
// }

// name.printFullName()

// let name2 = {
//     firstName: "Avinash",
//     lastName: "yadhav",
// }
// name.printFullName.call(name2)


let printFullName = function(city,state){
    console.log(this.firstName+ " " + this.lastName + " from " + city + ", " + state)
}


// let name1 = {
//     firstName: "Santhosh",
//     lastName: "kumar",
// }
// // printFullName.call(name1,"wanaparthy", "Telangana")
// // printFullName.apply(name1,["wanaparthy", "Telangana"])

// let name2 = {
//     firstName: "Avinash",
//     lastName: "yadhav",
// }
// printFullName.call(name2, "Hyderabad", "Kerla")
// printFullName.apply(name2, ["Hyderabad", "Maharasta"])

// let printNames = printFullName.bind(name2, "Mumbai", "Gujarat")
// console.log(printNames);
// printNames()


// let name = {
//     firstName: "santhosh",
//     lastName: "kumar"
// }

// let printFullName = function(city,state){
//     console.log(this.firstName+ " " + this.lastName)
// }

// let printMyName = printFullName.bind(name);
// printMyName()

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// COMPOSE

// const add2 = (x) => x+2;     //4+2=6
// const sub1 = (x) => x-1;     //6-1=5
// const mul5 = (x) => x*5;     //5*5=25

// const result = mul5(sub1(add2(4)))
// console.log(result)
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// function isPrime(num){
//    for(let i = 2; i < num; i++){
//      if(num % i == 0) return false
//    }
//    return true
// }
// function printPrime(n){
//    let count = 1
//    let arr = []
//    while(count < n){
//     if(isPrime(count)) {
//       arr.push(count)
//       count++
//     }
//     else count++
//    }
//    return arr
// }
// console.log(printPrime(20))

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function isPrime(num){
  for(let i = 2; i < num; i++){
    if(num % 2 == 0) return false 
  }
  return true
}
function primeNumbers(n){
  let obj = {}
  let j = 1
  for(let i = 3; i < n; i++){
    if(isPrime(i)) {
     obj[j] = i
     j++
   }
 }
 return obj
}
console.log(primeNumbers(20))