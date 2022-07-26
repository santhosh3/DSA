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


let a = 1
while(a < 10){
  console.log(a)
  a++
}

//for(let i = 0; i < 10; i++)