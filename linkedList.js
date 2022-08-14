
/**
 * BEFORE GOING TO THIS WE NEED TO KNOW THIS KEYWORD AND CONSTRUCTOR
 *  THIS KEYWORD REFERS TO CURRENT OBJECT
 */
// let laptop = {
//     cpu : 'i9',
//     ram : '16',
//     brand : 'HP',
//     greet : function() {
//         console.log('Hello world')
//     }
// }
//     laptop.greet()    // IF U WANT TO CALL ANY METHOD INSIDE THE OBJECT U NEED TO DO LIKE THIS


    // let laptop = {
    //     cpu : 'i9',
    //     ram : '16',
    //     brand : 'HP',
    //     greet : function() {
    //         console.log(laptop.brand)     // THIS IS ONE WAY TO CALL THE VARIALES BUT WE HAVE DIFFERENT LAPTOPS THEN IT WILL CREATE A PROLEUM 
    //                                     // TO ELEMENATE THIS WE CAN USE THIS KEYWORD THIS REFERS TO THE CURRENT OBJECT
    //     }
    // }
    //     laptop.greet() 

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // let laptop = {
    //     cpu : 'i9',
    //     ram : '16',
    //     brand : 'HP',
    //     greet : function() {
    //         console.log(this.brand)     // THIS KEYWORD REFERS TO THE CURRENT OBJECT HERE
    //     }
    // }
    //     laptop.greet() 
//*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// PROPER UNDERSTANING OF THIS KEYWORD

// let laptop1 = {
//     cpu : 'i7',
//     ram : 16,
//     brand : 'HP',
//     getConfig : () => {
//         console.log(this.cpu)
//     }
// }

// let laptop2 = {
//     cpu : 'i9',
//     ram : 16,
//     beand : 'Apple',
//     getConfig : () => {
//         console.log(this.cpu)
//     }                                                // IF WE WANT TO COMPARE 2 LAPTOPS THEN IT WILL WORK BUT NOT EFFICIENT
// }

// if(laptop1.cpu > laptop2.cpu) {
//     console.log(laptop1)
// }
// else {
//     console.log(laptop2)
// }
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let laptop1 = {
//     cpu : 'i7',
//     ram : 16,
//     brand : 'HP',
//     getConfig : () => {
//         console.log(this.cpu)
//     }
// }

// let laptop2 = {
//     cpu : 'i9',
//     ram : 16,
//     beand : 'Apple',
//     getConfig : () => {
//         console.log(this.cpu)
//     }                                                // IF WE WANT TO COMPARE 2 LAPTOPS THEN IT WILL WORK AND I AM WRITING YHESE THINGS IN
//                                                      // BY CREATING ONE METHOD(FUNCTION) AND CALLING THAT FUNCTION
// }

// getFastLaptop = (laptop1,laptop2) => {
// if(laptop1.cpu > laptop2.cpu) {
//     console.log(laptop1)
// }
// else {                                  //HERE WE ARE COMPARING 2 LAPTOPS HERE WE ARE USING 3RD PARTY FUNCTION
//     console.log(laptop2)
// }}

// getFastLaptop(laptop1, laptop2)
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// let laptop1 = {
//     cpu : 'i7',
//     ram : 19,
//     brand : 'HP',
//     compare : (other) => {
//         if(this.ram > other.ram)
//           {
//              console.log(this);
//           }
//         else
//           {
//              console.log(other);
//           }
//     },
//     getConfig : () => {
//         console.log(this.ram)
//     }
// }

// let laptop2 = {
//     cpu : 'i9',
//     ram : 16,
//     brand : 'Apple',
//     getConfig : () => {
//         console.log(this.ram)
//     }                                              
// }
// laptop1.compare(laptop2)
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// CONSTRUCTOR IS USED TO CREATE A NEW OBJECT EVERY TIME

/*
 function constructor (name, age) {
    this.name = name;
    this.age = age
 }

 let obj1 = new constructor('santhosh', 60)
 let obj2 = new constructor('Anasuya', 45)
 console.log(obj2)
*/

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/**
 * OBJECTIVES  => DEFINE WHAT IS SINGLY LINKED LIST IS
 *  => COMPARED AND CONTRAST LINKED LIST WITH ARRAYS
 *  => IMPLEMENTATION INSERSION, REMOVAL AND TRAVERSAL ON SINGLY LINKED LIST
 */

/**
 * WHAT IS LINKED LIST? => A DATA STRUCTURE THAT CONTAINS A HEAD, TAIL AND LENGTH
 *  ==> LINKED LIST CONSISTS OF NODES,AND EACH NODE HAS A VALUE AND A POINTER TO ANOTHER NODE OR NULL
 *      HEAD 4-->6-->8-->2(TAIL)-->NULL          // LENGTH IS 4  ONE NODE POINTS OUT ANOTHER NODE AND --> REPRESENT AS NEXT
 *  COMPARISION OF ARRAYS AND LISTS
 * -> INDEXES IN ORDER                                -> DO NOT HAVING INDEXES
 * -> INSERSION AND  DELETION CAN BE EXPENSIVE        -> CONNECTED VIA NODES WITH A NEXT POINTER
 * -> CAN QUICKELY BE ACCESSED AT A SPECIFIC INDEX    -> RANDOM ACCESS IS NOT ALLOWED
 */

//                                    https://visualgo.net/en/list
//                       https://cs.slides.com/colt_steele/singly-linked-lists#/15/0/5

// class Node {
//     constructor(val) {
//         this.val = val
//         this.next = null
//     }
// }
// var first = new Node('HI')
// first.next = new Node('there')
// first.next.next = new Node('how')
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// class Node{
//     constructor(val){
//         this.val = val;
//         this.next = null;
//     }
// }

// class SinglyLinkedList{
//     constructor(){
//         this.head = null;
//         this.tail = null;
//         this.length = 0;
//     }
//     push(val){
//         var newNode = new Node(val);
//         if(!this.head){
//             this.head = newNode;
//             this.tail = this.head;
//         } else {
//             this.tail.next = newNode;
//             this.tail = newNode;
//         }
//         this.length++;
//         return this;
//     }
// }
// var A = new SinglyLinkedList()
//*********************************************************/j

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    traverse() {
        var current = this.head;
        while(current) {
            console.log(current.val)
            current = current.next;
        }
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
        return current
    }
    shift() {
        if(this.head) return undefined;
        var currentHead = this.head;
        this.head = currentHead.next
        this.length--;
        if(this.length == 0) {
            this.tail = null;
        }
        return currentHead
    }
    unshift(val){
        var newNode = new Node(val);
        if(!head){
            this.head = newNode;
            this.tail = this.head
        }
        else {
            newNode.next = this.head;
            this.head = newNode
        }
        this.length++;
        return this
    }
    get(index){               // TO THE VALUE AT PERTICULAR INDEX
        if(index < 0 || index >= this.length) return null;
        var counter = 0
        var current = this.head;
        while(counter !== index){
            current = current.next;
            counter++
        }
        return current
    }
    Set(index, val){             // CHANGING THE VALUE OF A NODE BASED ON IT'S POSITION IN THE LINKED LIST AND THIS FUNCTION SHOULD ACCEPT INDEX AND VALUE
       var foundNode = this.get(index)
       if(foundNode) {
        foundNode.val = val
        return true
       }
       return false
    }   
    Insert(index, val){
        if(index < 0 || index >= this.length) return false
        if(index === this.length) return !!this.push(val)
        if(index === 0) return !!this.unshift(val)
        var newNode = new Node(val);
        var prev = this.get(index - 1) 
        var temp = prev.next;
        prev.next = newNode;
        newNode.next = temp
        this.length++;
        return true
    }            
    insert(index,val){
        if(index < 0 || index >= this.length) return false
        let newNode = new Node(val)
        if(index == 0){
            newNode.next = this.head
            this.head = newNode
        }
        if(index == this.length){
            this.tail.next = newNode
            this.tail = newNode
        }else{
            current = this.head
            let prev
            let counter = 0
            while(counter !== index){
                prev = current
                current = current.next
                counter++
            }
            newNode.next = current
            prev.next = newNode
        }
    }   
    remove(index) {
        if(index < 0 || index >= this.length) return false
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();
        var prevNode = this.get(index-1)
        var removed = prevNode.next;
        prevNode.next = removed.next;
        this.length--
        return removed;
    }    

    Remove(index){
        if(index < 0 || index >= this.length) return false
        if(index == 0){
            let currentHead = this.head
            this.head = currentHead.next
            this.length--
        }
        else if(index == this.length - 1){
            let current = this.head
            let newTail = current
            while(current.next){
                newTail = current
                current = current.next
            }
            this.tail = newTail
            this.tail.next = null;
            this.length--
        }else{
            let counter = 0, prev
            let current = this.head
            while(counter != index){
                prev = current
                current = current.next
                counter++
            }
            let removedNode = prev.next
            prev.next = removedNode.next
            this.length--
            return removedNode
        }
    }
    reverse(){
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        var next;
        var prev = null;
        for(var i = 0; i < this.length; i++){
          next = node.next;
          node.next = prev;
          prev = node;
          node = next;
        }
        return this;
      }
      Reverse(){
        let curr = this.head
        let prev = null
        while(curr){
            let holdNext = curr.next
            curr.next = prev
            prev = curr
            curr = holdNext
        }
        return prev
      }
      print(){
          var arr = [];
          var current = this.head
          while(current){
              arr.push(current.val)
              current = current.next
          }
          console.log(arr);
      }
  }
var A = new SinglyLinkedList()

//IT WILL GOING TO ADD NEW NODE TO THE LINKED LIST AT A SPECIFIC POSITION

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}


class  DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    } 
    pop(){
        if(!this.head) return undefined;
        var poppedNode = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }
    shift(){
        if(this.length === 0) return undefined;
        var oldHead = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }
    unshift(val){
        var newNode = new Node(val);
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index){
        if(index < 0 || index >= this.length) return null;
        var count, current;
        if(index <= this.length/2){
            count = 0;
            current = this.head;
            while(count !== index){
                current = current.next;
                count++;
            }
        } else {
            count = this.length - 1;
            current = this.tail;
            while(count !== index){
                current = current.prev;
                count--;
            }
        }
        return current;
    }
    set(index, val){
        var foundNode = this.get(index);
        if(foundNode != null){
            foundNode.val = val;
            return true;
        }
        return false;
    }
    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === 0) return !!this.unshift(val);
        if(index === this.length) return !!this.push(val);

        var newNode = new Node(val);
        var beforeNode = this.get(index-1);
        var afterNode = beforeNode.next;
        
        beforeNode.next = newNode, newNode.prev = beforeNode;
        newNode.next = afterNode, afterNode.prev = newNode;
        this.length++;
        return true;
    }
    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index == 0) return this.shift();
        if(index == this.length - 1) return this.pop()
        var removedNode = this.get(index)
        removedNode.prev.next = removedNode.next;
        removedNode.next.prev = removedNode.prev;
        removedNode.next = null
        removedNode.prev = null
        this.length--;
        return removedNode;
    }
}

var list = new DoublyLinkedList()
list.push("Harry")
list.push("Ron")
list.push("Hermione")


// 10 20 30 40 50 60
// slow = 20 fast = 30
// slow = 30 fast = 50
// slow = 40 fast = 30
// slow = 50 fast = 50


function REVERSE(head,k){       //[1,2,3,4,5] & k = 3   o/p => 3,4,5,1,2
    if(head == null){
        return null
    }
    var current = head
    var next = null            
    var prev = null
    var count = 0

    while(count < k && current != null){       //iteration 1==>           3,2,1
        next = current.next
        current.next = prev
        prev = current
        current = next
        count++;
    }
    if(next != null){
        head.next = REVERSE(next,k)
    }
}



function printLastkthEle(k){
    let slow = head
    let fast = head

    let count = 0
    while(count < k){
        fast = fast.next
        count++
    }
    while(fast != null){
        slow = slow.next
        fast = fast.next
    }
    return slow.data
}

function middleElement(head){
    let slow = head
    let fast = head
    while(fast && fast.next){
          slow = slow.next
          fast = fast.next.next
    }
    return slow.val
}

