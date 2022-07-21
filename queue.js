// // queue leanear datastructure FIFO (first in first out);
// // tickct booking
// // sliding window
// // used in breadth first search
// // tree in order traversal
// // event queue

// // linked list based implimentation

// class Node{
//     constructor(data){
//         this.data = data;
//         this.next = null;
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head = null;
//         this.size = 0
//     }
//     appendElement(data){
//         const node = new Node(data);
//         if(!this.head){
//             this.head = node;
//             this.tail = node;
//         }else{
//             this.tail.next = node;
//             this.tail = node
//         }
//         this.size++
//     }
//     removeElement(){
//         if(this.size === 0){
//             throw Error("Queue is empty");
//         }
//         let curr = this.head;
//         this.head = curr.next;

//         curr.next = null;
//         this.size--
//         return curr.data
//     }
// }

// class Queue{

//     constructor(){
//         this.list = new LinkedList();
//     }

//     enQueue(data){
//         this.list.appendElement(data)
//     }

//     deQueue(){
//         return this.list.removeElement()
//     }

//     get getSize(){
//         return this.list.size;
//     }

//     frontElement(){
//         return this.list.head.data;
//     }
     
//     isEmpty(){
//         return this.list.size === 0;
//     }
// }

// const que = new Queue();

// que.enQueue(10)
// que.enQueue(20)
// que.enQueue(50)
// que.enQueue(200)

// while(!que.isEmpty()){
//     console.log(que.getSize, "=====", que.deQueue());
// }

// console.log(que.getSize)

// //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// class StackUsingQUeue {
//     constructor(){
//         this.q1 = new Queue();
//         this.q2 = new Queue();
//     }

//     push(data){

//         if(this.q1.isEmpty()){
//             this.q1.enQueue(data);
//         }else{
//             this.que.enQueue(data)
//         }
//         this.size++
//     }

//     pop(){
//         this.size = Math.max(0, this.size-1)
//         if(this.q1.isEmpty()){
//             let size = this.q2.size;
//             while(size !== 1){
//                 this.q1.enQueue(this.q2.deQueue())
//             }
//             return this.q2.deQueue()
//         }
//     }

// }

class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Queue {
    constructor(){
        this.first = null
        this.last = null
        this.size = 0
    }
    enqueue(value){
        var newNode = new Node(value)
        if(!this.first){
            this.first = newNode
            this.last = newNode
        } else {
            this.last.next = newNode
            this.last = newNode
        }
        return ++this.size
    }

    dequeue() {
        if(!this.first) return null
        let temp = this.first
        if(this.first == this.last){
            this.last = null
        }
        this.first = temp.next
        this.size--
        return temp.value
    }
}

let q = new Queue
q.enqueue(10)
q.enqueue(20)
q.enqueue(30)
console.log(q.dequeue())
console.log(q.dequeue())
