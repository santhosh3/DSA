//reverse a linkedList
let arr = "1 2 3 4 5 6 7 8 9"
let arr1 = arr.split(' ').map(Number)
let len = arr1.length

class Node {
    constructor(val,next){
        this.val = val ? val : null
        this.next = next ? next : null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode
            this.tail = this.head
        }else{
            this.tail.next = newNode
            this.tail = newNode
        }
        ++this.length
        return;
    }
    pop(){
        if(!this.head) return undefined;
        var current = this.head
        var newTail = current;
        while(current.next){
            newTail = current;
            current = current.next
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--
        if(this.length === 0) {
            this.head = null
            this.tail = null
        }
        return this.print()
    }
    print(){
        let array = []
        let curr = this.head
        while(curr){
            array.push(curr.val)
            curr = curr.next
        }
        return array.join(' ');
    }
    reverse(){
        let node = this.head
        this.head = this.tail
        this.tail = node
        let prev = null
        let next;
        for(let i = 0; i < this.length; i++){
            next = node.next
            node.next = prev
            prev = node
            node = next 
        }
        return this.print()
    }
    shift(){
        if(!this.head) return 'undefined'
        let currentHead = this.head
        this.head = currentHead.next
        if(this.length == 1){
            this.tail = null
        }
        this.length--
        return this.print()
    }
    loop(){
        let fast = this.head
        let slow = this.head
        while(fast && fast.next){
            fast = fast.next.next
            slow = slow.next;
            if(fast == slow) return "Yes"
        }
        return "No"
    }
}

let linkedList = new SinglyLinkedList
for(let i = 0; i < len; i++){
    linkedList.push(arr1[i])
}
console.log(linkedList.print())
console.log(linkedList.reverse())
console.log(linkedList.pop())
console.log(linkedList.shift())

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Doubly linked list

class Node {
    constructor(val, next, prev){
        this.val = val ? val : null
        this.next = next ? next : null
        this.prev = prev ? prev : null
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(val){
        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = this.head
        }else{
            this.tail.next = newNode
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++
        return this.print();
    }
    print(){
        let arr = []
        let curr = this.head
        while(curr){
            arr.push(curr.val)
            curr = curr.next
        }
        return arr.join(' ')
    }
    printfront(){
        let arr = []
        let curr = this.head
        while(curr){
            arr.push(curr.val)
            curr = curr.next
        }
        return arr.join(' ')
    }
    printReverse(){
        let arr = new Array()
        let curr = this.tail
        while(curr){
            arr.push(curr.val)
            curr = curr.prev
        }
        return arr.join(' ')
    }
    pop(){
        if(this.length == 0) return "undefined"
        let popedNode = this.tail
        if(this.length == 1){
            this.head = null
            this.head = null
        }else{
            this.tail = popedNode.prev
            this.tail.next = null
            popedNode.prev = null
        }
        return this.print()
    }
    unshift(val){
        let newNode = new Node(val)
        if(this.head == 1){
            this.head = newNode
            this.tail = this.head
        }else{
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this.print()
    }
    shift(){
        if(this.length == 0) return "undefined"
        let oldHead = this.head
        if(this.length == 1){
            this.head = null
            this.tail = null
        }else{
            this.head = oldHead.next
            this.head.prev = null
            oldHead.next = null
        }
        this.length--
        return this.print()
    }
}

let str = "1 2 3 4 5 6 7 8 9"
let arr2 = str.split(' ').map(Number)
let length = arr2.length

function solution() {
let double = new DoublyLinkedList
for(let i = 0; i < length; i++){
    double.push(arr[i])
}
double.push(10)
// console.log(double.push(21))
// console.log(double.printReverse())
//++++++++++++++++++++++(1)+++++++++++++++++
// console.log(double.unshift(21))
// console.log(double.printReverse())
//++++++++++++++++++++++(2)+++++++++++++++++
// console.log(double.pop())
// console.log(double.printReverse())
//++++++++++++++++++++++(3)+++++++++++++++++
// console.log(double.shift())
// console.log(double.printReverse())
}
solution()

