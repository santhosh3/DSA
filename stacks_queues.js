// STACKS MEANS LASTIN FIRSTOUT OR FIRSTIN LASTOUT THEY ARE MORE NUMBER OF WAYS TO DO IT
// ARRAY IMPLEMENTATION  LIKE

// let stack = []
// stack.push("element")
// console.log(stack)
// stack.shift()
// stack.push("added")
// console.log(stack)
// stack.pop()
// console.log(stack)

//only these concepts will revolve around it all 
// ADDING TO THE BIGINING AND REMOVING TO THE BIGINNING IS NOT GOOD BECAUSE U NEED TO REINDEXING EACH ELEMENT ONCE AGAIN THIS IS NOT INSUFFICIENT

/**
 * IF WE ADD AT LAST AND REMOVING AT FIRST IT IS GOOD
 */

//WRITING OUR OUN STACK FROM SKETCH

// class Node {
//     constructor(value){
//         this.value = value;
//         this.next  = null;
//     }
// }

// class stack {
//     constructor(){
//         this.first = null
//         this.last = null
//         this.size = 0
//     }
//     push(val){
//         var newNode = new Node(val);
//         if(!this.first){
//             this.first = newNode;
//             this.last  = newNode;
//         }else{
//             var temp = this.first;
//             this.first = newNode;
//             this.first.next = temp;
//         }
//         return ++this.size
//     }
// }

// var stack1 = new stack();
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack is first in last out   [1,2,4,5,6,6,7]

// class Stack {
//     constructor(){
//         this.items = []
//         this.count = 0
//     }
//     push(element){
//         this.items[this.count] = element
//         console.log(`${element} added to ${this.count}`)
//         this.count++
//         return this.count - 1
//     }

//     pop(){
//         if(this.count == 0) return undefined
//         let deleteItm = this.items[this.count - 1]
//         this.count -= 1
//         console.log(`${deleteItm} removed`)
//         return deleteItm
//     }

//     peak() {
//         console.log(`Top element is ${this.items[this.count - 1]}`)
//         return this.items[this.count - 1]
//     }
//     isEmpty(){
//         console.log(this.count == 0 ? "stack is empty" : "Stack is NOT empty")
//         return this.count == 0
//     }

//     //check the size of stack
//     size(){
//         console.log(`${this.count} elements in stack`)
//         return this.count
//     }
    
//     print(){
//         let str = ""
//         for(let i = 0; i < this.count; i++){
//             str = str + this.items[i]+ ''
//         }
//         return str
//     }
// }

// const stack = new Stack()

// stack.isEmpty()
// stack.push(100)
// stack.push(200)
// stack.push(300) 
// console.log(print())
// stack.isEmpty()
// stack.push(400)
// stack.size()
// stack.push(500)
// //stack.pop()
// // console.log(stack.pop())
// // console.log(stack.pop())
// // console.log(stack.pop())
// stack.peak()

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let arr = []
// arr.push(23)
// arr.push(34)
// console.log(arr)

//++++++++++++++++++++++++++++++++++++++++++++++++++

// class Stack {
//     constructor(){
//         this.items = []
//     }
//     pushElement(val){
//         this.items.push(val)
//     }
//     popElement(){
//         if(this.items.length > 0) return this.items.pop()
//     }
//     peekElement(){
//         if(this.items.length > 0) return this.items[this.items.length - 1]
//     }
//     length(){
//        return this.items.length
//     }
//     getElements(){
//         let arr = []
//         for(let i = 0; i < this.items.length-1; i++){
//             arr.push(this.items[i])
//         }
//         return arr
//     }
//     largestNum(){
//         if(this.items.length > 0){
//             let a = this.items[0]
//             for(let i = 1; i < this.items.length; i++){
//                 if(this.items[i] > a){
//                     a = this.items[i]
//                 }
//             }
//             return a
//         }
//     }
//     destryEle(val){
//         if(this.items.length){
//             let index = this.items.indexOf(val)
//             this.items.splice(index,1)
//         }
//     }
// }

// let stack = new Stack
// let array = [1,2,3,4,45,6,7,1076,679]
// for(let i = 0; i < array.length; i++){
//     stack.pushElement(array[i])
// }
// // console.log(stack.length())
// // console.log(array.length)
// // console.log(stack)
// // console.log(array)
// console.log(stack.destryEle(1076))
// console.log(stack.largestNum())

//
//for(let i = 0; i < 10; i++)

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// class Node{
//   constructor(value){
//     this.value = value;
//     this.next = null
//   }
// }

// class queue{
//   constructor(){
//     this.first = null
//     this.last = null
//     this.size = 0
//   }
//   enqueue(value){
//     let newNode = new Node(value);
//     if(!this.first){
//       this.first = newNode
//       this.last = newNode
//     }else{
//       this.last.next = newNode;
//       this.last = newNode
//     }
//     return ++this.size
//   }
//   dequeue(){
//    if(!this.first) return null
//    var temp = this.first
//    if(this.first == this.last){
//      this.last = null
//    }
//    this.first = this.first.next
//    this.size--
//    return temp.value
//   }
// }

// let que = new queue()
// que.enqueue(12)
// // console.log(que.enqueue(13))
// // console.log(que.enqueue(14))
// let element = [15,67,986,95]
// for(let i = 0; i < element.length; i++){
//     que.enqueue(element[i])
// }
// // console.log(que.enqueue(100))
// // console.log(que)
// console.log(que.dequeue())
// console.log(que)
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function a(arr,k){
//    let queue = []
//    let answer = []
//    for(let i = 0; i < k; i++){
//      if(arr[i] < 0) queue.push(i)
//    }
//    for(let i = k; i < arr.length; i++){
//      if(queue.length == 0) answer.push(0)
//      else answer.push(arr[queue[0]])
//      while(!queue.length != 0 && queue[0] < (i-k+1)){
//       queue.shift()
//     }
//     if(arr[i] < 0) queue.push(i)
//    }
//    if(queue.length == 0) answer.push(0)
//    else answer.push(arr[queue[0]])
//    return answer
// }
// let arr = [-8, 2, 3, -6, 10], k = 2
// console.log(a(arr,k)) //-8,0,-6,-6
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


function sol(arr){
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[i].length; j++){
      arr[i][j] = arr[i][j]+1
    }
  }
  return arr
}

function sol(arr){
  let b = []
  for(let i = 0; i < arr.length; i++){
    let a = []
    b.push(a)
    for(let j = 0; j < arr[i].length; j++){
      if(arr[i][j] % 2 == 0){
         a.push(arr[i][j])
      }
    }
  }
  return b
}
let arr = [[1,2,3,4],[5,6,7,8]]
//console.log(sol(arr))
//+++++++++++++++++++++++++++++++++++++++++++++++++++++

// class Node{
//   constructor(value){
//     this.value = value
//     this.next = null
//   }
// }

// class myQueue {
//   constructor(){
//     this.head = null
//     this.tail = null
//     this.size = 0
//   }
//   enqueue(value){
//     const newNode = new Node(value);
//     if(!this.size){
//       this.head = newNode
//       this.tail = newNode
//     }else{
//       this.tail.next = newNode
//       this.tail = newNode
//     }
//     this.size++
//   }
//   dequeue(){
//     if(!this.size) return null
//     let node = this.node
//     this.head = this.head.next
//     node.next = null
//     this.size--
//     return node.value
//   }
//   peek(){
//     return this.head.value
//   }
//   empty(){
//     this.size === 0
//   }
// }

// class myStack {
//   constructor(){
//     this.queue = new myQueue()
//   }
//   push(value){
//     let rotate = this.queue.size
//     this.queue.enqueue(value)
//   }
// }
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function firstNegitive(a,k,arr){
//   let queue = []
//   for(let i = 0; i < k; i++){
//     if(arr[i] < 0) queue.push(i)
//   }

//   for(let j = k; j < a; j++){
//     if(queue.length == 0){

//     }
//   }
// }
// console.log(firstNegitive(8,3,[12,-1,-7,8,-15,30,16,28]))
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let num = [-2,1,-3,4,-1,2,1,-5,4]
// let solution = num[0]
// for(let i = 1; i < num.length; i++){
//    num[i] = Math.max(num[i], num[i]+num[i-1])
//    solution = Math.max(solution, num[i])
// }
// console.log(solution)

// nums.sort((a,b) => a-b)

// let res = "" ,count = 1
// for(let i = 0; i < nums.length; i++){
//     if(nums[i] == nums[i+1]){
//       count++
//     }else{
//       res = res + nums[i] + " " + count
//       count = 1
//     }
// }
// return res;
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function minWIndow(s,t){
  let map = new Map()
  for(let i = 0; i < t.length; i++){
    if(map.has(s[i])){
       map.set(s[i],map.get(s[i])+1)
    }else{
      map.set(s[i],1)
    }
  }
  let left = 0
  let right = 0
  let len = s.length
  let count = map.size
  let minWindow = ""
  while(right < s.length){
    let lright = s[right]
    if(map.has(lright)){
       map.set((lright), map.get(lright)-1);
       if(map.get(lright) === 0) count--
    }
    right++;
    while(count == 0){
      if(right - left < len){
         len = right - left 
         minWindow = slice(left,right)
      }
      let lLetter = s[left];
      if(map.has(lLetter)){
        map.set(lLetter, map.get(lLetter)+1);
        if(map.get(lLetter) > 0) count++
      }
      left++
    }
  }
  return minWindow
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function window(s){
  let map = new Map()
  let distinct = 0
  for(let el of s){
    if(map.has(el)){
       map.set(el, map.get(el)+1)
    }else{
       map.set(el, 1)
       distinct++
    }
  }
  let mapWIndow = new Map()
  let left = 0
  let right = 0
  let count = 0
  let minLength = s.length
  let minStr = ""
  while(right != str.length){
    if(mapWIndow.has(s[right])){
       mapWIndow.set(s[right], mapWIndow(s[right])+1)
    }else{
       mapWIndow.set(mapWIndow(s[right]),1)
       count++
    }
    if(count < distinct){
      right++
    }else if(count == distinct){
      while(count == distinct){
        if(minLength > right - left + 1){
           minLength = right - left + 1
           minStr = s.slice(left,right+1)
        }
        mapWIndow.set((right), map.get(right)-1);
        if(mapWIndow.has(s[i]) == 0){
          count--
        }
        left++;
      }
      right++
    }
  }
  return minStr
}
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function minDistWindow(str){
  let distint = [...new Set(str)].length
  let map = {}
  let i = 0;
  let j = 0;
  let count = 0
  let minLength = str.length
  let minStr = ""
  while(j != str.length){
    if(map[str[j]]) map[str[j]]++
    else{
       map[str[j]] = 1
       count++
    }
    if(count < distint) j++
    else if(count == distint){
      while(count == distint){
         if(minLength > j-i+1){
            minLength = j-i+1;
            minStr = str.slice(i,j+1)
         }
         map[str[i]]--
         if(map[str[i]] == 0){
          count--
         }
         i++
      }
      j++
    }
  }
  return [minLength, minStr].join(',')
}
//console.log(minDistWindow("abdd"))
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//for stack push and pop will work because first In last out .. or last in first out
// what is recently added it will be deleted
// stack.push(1)
// stack.push(2)
// stack.push(3)
// stack.push(4) we can pop

class stack {
  constructor(){
    this.item = []
  }
  push(item){
    this.item.push(item)
  }
  pop(){
    return this.item.pop()
  }
  peek(){
    if(this.item.length == 0) return -1
    return this.item[this.item.length-1]
  }
  getSize(){
    return this.item.length
  }
  isEmpty(){
    return this.item.length == 0
  }
}
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//impliment stack using queue

// class Node{
//   constructor(val){
//     this.val = val
//     this.next = null
//   }
// }
// class myQueue {
//   constructor(){
//     this.head = null;
//     this.tail = null;
//     this.size = 0
//   }
//   enQueue(val){
//     const newNode = new Node(val);
//     if(!this.size){
//         this.head = newNode;
//         this.tail = newNode;
//     }else{
//        this.tail.next = newNode
//        this.tail = newNode
//     }
//     this.size++
//   }
//   deQueue(){
//     if(!this.size) return null;
//     let node = this.head
//     this.head.next = this.head
//     node.next = null
//     this.size--
//     return node.val;
//   }
//   peek(){
//     return this.head.val
//   }
//   empty(){
//     return this.size == 0
//   }
// }

// class myStack {
//   constructor(){
//     this.queue = new myQueue();
//   }
//   push(val){
//     let rotate = this.queue.size;
//     this.queue.enQueue(val);
//     while(rotate){
//       this.queue.enQueue(this.queue.deQueue());
//       rotate--;
//     }
//   }
//   pop(){
//     return this.queue.deQueue()
//   }
//   top(){
//     return this.queue.peek()
//   }
//   empty(){
//     return this.queue.empty()
//   }
// }
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

class MinStack{
  constructor(){
    this.stack = []
    this.minStack = []
  }
  push(val){
    if(!this.stack.length){
        this.stack.push(val);
        this.minStack.push(val)
    }else{
        this.stack.push(val);
        this.minStack.push(Math.min(this.minStack[this.minStack.length-1],val))
    }
  }
  pop(){
    if(!this.stack.length) return null;
    this.minStack.pop()
    this.stack.pop()
  }
  top(){
    return this.stack[this.stack.length-1]
  }
  getMin(){
    return this.minStack[this.minStack.length-1]
  }
}
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function evalRPN(tokens){
    let stack = []
    const operators = {
      '+' : (num1,num2) => num1+num2,
      '-' : (num1,num2) => num1-num2,
      '*' : (num1,num2) => num1*num2,
      '/' : (num1,num2) => Math.trunc(num1/num2)
    }

    for(let token of tokens){
        if(operators[token]){
          let num2 = stack.pop();
          let num1 = stack.pop();
          stack.push(operators[token](num1,num2))
        }else{
          stack.push(parseInt(token))
        }
    }
    return stack.pop()
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function simplifyPath(path){
  let stack = []
  let pathArr = path.split('/').filter(el => el !== '.').filter(el => el !== '');
  console.log(pathArr)
  for(let el of pathArr){
    if(el == ".."){
      stack.pop()
    }else{
      stack.push(el)
    }
  }
  console.log(stack)
  return '/'+stack.join('/')
};

//console.log(simplifyPath('/a/./b/../../c/'))
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// valid parenthesis

function isValid(s){
  let stack = []
  const parems = '() {} []'
  let i = 0
  while(i < s.length){
    stack.push(s[i])
    i++;
    let open = stack[stack.length-2];
    let close = stack[stack.length-1];
    let potParams = open+close
    if(parems.includes(potParams)){
      stack.pop()
      stack.pop()
    }
  }
  return stack.length === 0
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function valid(s){
  if(s == '') return true
  if(s.length < 2) return false
  const pair = {
    "{" : "}",
    "(" : ")",
    "[" : "]"
  }
  let stack = []
  let arr = s.toString().split('');
  for(let i = 0; i < arr.length; i++){
    let br = arr[i]
    if(pair[br]){
      stack.push(br)
    }else{
      let check = stack.pop()
      if(pair[check] != br) return false;
    }
  }
  return stack.length === 0
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Transpose the matrix

function transpose(matrix){
  let answer = []
  for(let i = 0; i < matrix[0].length; i++){
    let row = [];
    for(let j = 0; j < matrix.length; j++){
        row.push(matrix[j][i])
    }
    answer.push(row)
  }
  return answer
}
let matrix = [[1,2,3],[4,5,6],[7,8,9]]
//console.log(transpose(matrix))
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//leetcode 766

function isToeplitzMatrix(matrix){
  let obj = {}
  for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix[0].length; j++){
      if(!obj.hasOwnProperty(i-j)){
          obj[i-j] = matrix[i][j]
      }else if(obj[i-j] !== matrix[i][j]){
          return false
      }
    }
  }
  return true
}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function isToeplitzMatrix1(matrix){
  for(let i = 0; i < matrix.length-1; i++){
    let newArray = [...matrix[i]]
    newArray.shift(matrix[i+1][0])
    newArray.pop()
    if(newArray.join('') !== matrix[i+1].join('')) return false
  }
  return true
}