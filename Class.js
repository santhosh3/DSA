/**
 * Object and class in Java Script
 * OBJECT : REAL WORLD ENTITY CONSISTS OF
 * IDENTITY : IT IS UNIQUE, IT USED TO ACCESS THE OBJECT
 * VARIABLES : TO STORE INFORMATION OF OBJECT.
 * FUNCTIONS : TO PROCESS THE INFORMATION
 */

// STACK : LAST IN FIRST OUT
/**
 * 1) iDENTITY : STACK
 * 2) VARIALES : INFO
 * 3) FUNCTIONS : METHOD LIKE PUSH(), POP()
 */
/**
 * CLASS : REPRESENATION OF OBJECT
 * => WE CAN CREATE OBJECTS USING CLASS
 * => BLUE PRINT OF OBJECT
 */
/**
 * CLASS AND CONSTRUCTOR IN JAVASCRIPT
 */
// class Program
// {
//     constructor()
//     {
//         console.log("Object created");
//     }
// }
// new Program()
//.........................................
// class Program
// {
//     constructor(x)
//     {
//         this.a = x;
//     }
//     display()
//     {
//         console.log(this.a)
//     }
// }
// d1 = new Program(10)
// d2 = new Program(20)

// d1.display()
// d2.display()
//.........................................

// class Program
// {
//     constructor(x)
//     {
//         this.a = x;
//     }
//     getA()                         
//     {
//         return this.a
//     }
// }
// d1 = new Program(10)
// d2 = new Program(20)

// console.log(d1.getA())        // d1.getA() => refers to the current Object
// console.log(d2.getA())        // d2.getA() will call the current object getA() this.a refers the value  
                                 // d1.getA() will call the current Object getA() this keyword refers d2 and a refers 20 
//.........................
// class Demo {
//     constructor()
//     {
//         this.a = 10
//     }
// }

// d1 = new Demo();
// d2 = new Demo();

// console.log(d1.a)
// console.log(d2.a)
//...........................

// class demo 
// {
//     constructor()
//     {
//         this.a = 10;
//     }
// }
// obj = new demo();
// console.log(obj.a)
//..........................

// class Stack 
// {
//     constructor()
//     {
//         this.items = [];
//         console.log("Stack is ready");
//     }
//    isEmpty()
//    {
//        if(this.items.length == 0)
//        {
//          return true;
//        }
//        else
//        {
//            return false
//        }
//    }
// }

// var stack = new Stack();
// console.log(stack.isEmpty())
//...........................................

// class Stack 
// {
//     constructor()
//     {
//         this.items = [];
//         console.log("Stack is ready");
//     }
//    isEmpty()
//    {
//        if(this.items.length == 0)
//        {
//          return true;
//        }
//        else
//        {
//            return false
//        }
//    }
//    pushElement(ele)
//    {
//        this.items.push(ele);
//        console.log("items pushed....")
//    }
// }

// var stack = new Stack();
// if(stack.isEmpty())
// {
//     console.log("stack is empty")
// }
// else
// {
//     console.log("stack has elements")
// }
// stack.pushElement(10)
// console.log("stack is empty:", stack.isEmpty())
//...................................................

// class stack 
// {
//     constructor()
//     {
//         Define array Oject named as stack
//     }
//     pushElement(Element)
//     {
//         logic to push an Element
//     }
//     popElement()
//     {
//         -> Test stack is empty or Not
//         -> If not, pop Element
//     }
//     peekElement()
//     {
//         return Top element but not removes
//     }
//     traverse()
//     {
//         -> check whether the stack is empty or not
//         -> display all the stack elements
//     }
// }

// perform all the stack operations by creating object for stack class
//......................................................................
// Stack : it follow Last In first Out

// class Stack 
// {
//     constructor()
//     {
//         this.items = [];
//         console.log("stack is ready")
//     }
//     isEmpty()
//     {
//         if(this.items.length == 0)
//         {
//             return true
//         }
//         else
//         {
//             return false
//         }
//     }
//     pushElement(ele)
//     {
//         this.items.push(ele);
//         console.log("Items pushed...")
//     }
//     display()
//     {
//         if(stack.isEmpty())
//           console.log("stack is empty")
//         else
//         {
//             console.log("stacks elements are:");
//             for(var i = this.items.length - 1; i >= 0; i--)
//             {
//                 console.log(this.items[i])
//             }
//         }
//     }
//     popElement()
//     {
//         if(stack.isEmpty())
//         {
//             console.log("stack is empty")
//         }
//         else
//         {
//             console.log("Deleted :", this.items.pop());
//         }
//     }
//     peakElement()
//     {
//         if(stack.isEmpty())
//         {
//             console.log("stack is empty")
//         }
//         else
//         {
//             console.log("Peek :", this.items[this.items.length - 1])
//         }
//     }
   
// }

// var stack = new Stack();
// if(stack.isEmpty())
// {
//     console.log("stack is empty")
// }
// else
// {
//     console.log("stack has elements")
// }
// stack.pushElement(10)
// console.log("stack is empty:", stack.isEmpty())

// stack.pushElement(20)
// stack.pushElement(30)
// stack.pushElement(40)
// stack.pushElement(50)
// stack.pushElement(60)

// stack.display();

// stack.popElement();
// stack.popElement();

// stack.display();

// stack.peakElement();

// stack.display()


// var z = 10
// let z = 20

// console.log(z)

// let str = "PB 10 CV 2662";
// str = str.replaceAll(' ', '');
// console.log(str)

class LRUCatch {
    constructor(capacity){
        this.capacity = capacity
        this.map = new Map()
    }
    get(key){
        if(this.map.has(key)){
            let val = this.map.get(val)
            this.delete.map(key)
            this.map.set(key,val)
            return val
        }else{
            return -1
        }
    }
    put(key,val){
        if(this.get(key) === -1){
            if(this.capacity === this.map.size){
                for(let keyval of this.map){
                    this.map.delete(keyval[0])
                    break
                }
            }
        }
        this.map.set(key,val)
    }
}

