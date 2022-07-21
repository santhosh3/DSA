//  let nums = [12,34,45,56,76,36,89,79];

//  nums.forEach((n,i,nums) => {console.log(nums[i])})
//  nums.forEach((n,i,nums) => {console.log(n)})
// nums.forEach((n,i,nums) => {console.log(nums)})

//nums.forEach((n,i,nums) => {if(i < 3) console.log(i,n)})

//nums.forEach(n => {if(n % 2 == 0) console.log(n)})
//console.log(nums.filter(n => n % 2 == 0))
//nums.filter(n => {if(n % 2 == 0) console.log(n)})

//nums.filter((n) => n % 2 == 0).forEach((n,i) => {console.log(i,n)})

//nums.filter((n) => n % 2 == 0).map(n => n*10).forEach((n,i,arr) => {console.log(i,n)})
/* FOREACH WILL GIVE MULTIPLE VALUES BUT REDUCE WILL GIVE SINGLE VALUE */

// let A = nums.filter(n => n % 2 == 0).map(n => n*2).reduce((a,b) => (a+b))
// console.log(A)

// let total = 0
// let A = nums.reduce((total,a) => (total+a))
// console.log(total)
/*
CODE ZINGER
let arr = [23, 45, 12, 3, 6]
let a = 10
let arr = [1,2,3,4,5,6]
let a = 3
let arr = [1,3,3,4,6]
let a = 1
let arr = [1,2,4,6]
let a = 2

let count = 0
for(let i = 0; i < arr.length - 1; i++)
{
   if(arr[i+1] - arr[i] != a)
      arr[i+1] = a + arr[i]
      count++
}
console.log(arr)

let temp = []
for(let i = 0; i < arr.length - 1; i++)
{
    temp.push(arr[i+1] - arr[i])
}

let A = temp.filter(n => n != a)
console.log(A.length)
*/
//console.log(Math.max(...[19,30,45,23,45,23,144]))

//SET

let arr = [1,2,3,4,5,6,6,5]
let set = new Set(arr)
set.add(7)
set.add({a:1,b:2});
set.delete({a:1,b:2})
set.clear()
set.add(10)
set.add(100)
// console.log(set)
// console.log(set.size)
console.log(set.has(1008))

//set.forEach( value => {console.log(value)})

let arr1 = [1,3,4,5,6,7,8,9]

let map = new Map(arr)
console.log(arr)
