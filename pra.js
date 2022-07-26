// function sortedList(arr){
//     const output = []
//     let left = 0, right = arr.length-1
//     let i = right
//     while(left <= right){
//         const leftVal = arr[left]**2
//         const rightVal = arr[right]**2
//         if(leftVal > rightVal){
//             output[i] = leftVal
//             i--;
//             left++
//         }
//         else{
//             output[i] = rightVal
//             i--
//             right--
//         }
//     }
//     return output
// }
// //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function inportance(n,roads){
//     let map = new Map()
//     for(let el of roads){
//         if(map.get(el[0])) map.set(el[0],map.get(el[0])+1)
//         else map.set(el[0],1)
//         if(map.get(el[1])) map.set(el[1],map.get(el[1])+1)
//         else map.set(el[1],1)
//       }
//     console.log(map)
//     let newmap = new Map()
//     const sort = [...map.entries()].sort((a,b) => b[1]-a[1])
//     console.log(sort)
//     for(let el of sort){
//         newmap.set(el[0], n--)
//     }
//     console.log(newmap)

//     let sum = 0
//     for(let i = 0; i < roads.length; i++){
//         sum = sum + newmap.get(roads[i][0]) + newmap.get(roads[i][1])
//     }
//     return sum
// }

// let n = 5, roads = [[0,1],[1,2],[2,3],[0,2],[1,3],[2,4]]
// console.log(inportance(n,roads))
///+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function findRanks(score){
//     let arr = [...score]
//     arr = arr.sort((a,b) => b-a)
//     let obj = []
//     for(let i = 0; i < arr.length; i++){
//         if(i == 0) obj[arr[i]] = "Gold Medal"
//         else if(i == 1) obj[arr[i]] = "Silver Medal"
//         else if(i == 2) obj[arr[i]] = "Bronze Medal"
//         else obj[arr[i]] = (i+1).toString()
//     }
//     console.log(obj)
//     let result = []
//     for(let el of score){
//         result.push(obj[el])
//     }
//     return result
// }
// let arr = [10,3,8,9,4]
// console.log(findRanks(arr))
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

