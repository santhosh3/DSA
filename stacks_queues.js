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

class Node {
    constructor(value){
        this.value = value;
        this.next  = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null // return top value of the stack
        this.size = 0
        this.tail = null 
    }
    pushBack(){
        const newNode = new Node(data)
        newNode.next = this.head;
        this.head = node;
        if(this.size === 0){
            this.tail = newNode
        }
        this.size++
    }

    popBack(){
        if(!this.size){
            throw Error('stack is empty')
        }
        let curr = this.head
        this.head = this.head.next;
        this.size--;
        curr.next = null
        return curr.data
    }
}

class stack{

}

getSize(){
    return this.list.size
}

isEmpty(){
    return this.list.size === 0
}
}

const st = new stack();

st.push(10)
st.push(20)
st.push(30)
