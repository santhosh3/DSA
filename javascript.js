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

// function isPrime(num){
//   for(let i = 2; i < num; i++){
//     if(num % 2 == 0) return false 
//   }
//   return true
// }
// function primeNumbers(n){
//   let obj = {}
//   let j = 1
//   for(let i = 3; i < n; i++){
//     if(isPrime(i)) {
//      obj[j] = i
//      j++
//    }
//  }
//  return obj
// }
// console.log(primeNumbers(20))
//+++++++++++++++++++++++++++++++++++++++++++++++++++

function first(a,callback){
  setTimeout(() => {
    callback(a*a)
  },1000)
}
// first(2,function(val1,err){
//    if(!err){
//     first(val1,function(val2,err){
//       if(!err){
//         first(val2,function(val3,err){
//           if(!err){
//             first(val2,function(val3,err){
//               console.log(val3)
//             })
//           }
//         })
//       }
//     })
//    }
// })
first(2,function(val1,err){
  if(!err){
    console.log(val1)
  }
})
first(2,function(val1){
  console.log(val1)
})

// first(2,function(val1){
//   first(val1,function(val2){
//     first(val2,function(val3){
//       first(val3,function(val4){
//         console.log(val4)
//       })
//     })
//   })
// })
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function second(a){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a*a)
    },1000)
  })
}
second(2).then((val1) => {
  return second(val1)
}).then((val2) => {
  console.log(val2)
})

async function calculate() {
  let val1 = await second(2)
  let val2 = await second(val1)
  console.log(val2)
}
calculate()