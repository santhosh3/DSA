// class Node{
//     constructor(data,left,right){
//         this.data=data;
//         this.left=null;
//         this.right = null;
//     }
// }
// class BST{
//     constructor(){
//         this.root = null;
//     }
//     insertRecursively(root,data){
//         if(!root){
//             const node = new Node(data);
//             return node;
//         }
//         if(root.data<data){
//             root.right= this.insertRecursively(root.right,data);
//         }else{
//             root.left= this.insertRecursively(root.left,data);
//         }
//         return root;
//     }
//     insert(data){
//         this.root=this.insertRecursively(this.root,data);
//     }
//     // inorder traversal of a binary search tree gives sorted array
//     inorder(root){
//         if(root){
//             this.inorder(root.left);
//             console.log(root.data);
//             this.inorder(root.right);
//         }
//     }
//     search(root,data){
//         if(!root){
//             // end of the tree return null 
//             return null;
//         }
//         if(root.data>data){
//            return  this.search(root.left,data);
//         }else if(root.data<data){
//             return  this.search(root.right,data);
//         }
//         // find that element
//         return root;
//     }
//     findMax(root){
//         if(!root){
//             return null;
//         }
//         if(root.right===null){
//             return root;
//         }
//         return this.findMax(root.right);
//     }
//     findMin(root){
//         if(!root){
//             return null;
//         }
//         if(root.left===null){
//             return root;
//         }

//         return this.findMax(root.left);
//     }
//     findMaxInTree(root){
//         if(!root){
//             return -Infinity;
//         }
//         return Math.max(this.findMaxInTree(root.right),this.findMaxInTree(root.left),root.data);
//     }
//     findMinInTree(root){
//         if(!root){
//             return Infinity;
//         }
//         return Math.min(this.findMinInTree(root.right),this.findMinInTree(root.left),root.data);
//     }
//     delete(root,data){
//         if(!root){
//             return null;
//         }
//         if(root.data>data){
//            root.left= this.delete(root.left,data);
//          }else if(root.data<data){
//             root.right= this.delete(root.right,data);
//          }
//          else{
//             // we find the node we want to delete;
//             // if leaf node
//             if(root.left===null && root.right===null){
//                 return null;
//             }
//             else if(root.left && root.right){
//                 let maxNode = this.findMax(root.left);
//                 root.data = maxNode.data;
//                 root.left = this.delete(root.left,root.data);
//             }
//             else{
//                 let curr = root;
//                 if(root.left===null){
//                     root=root.right;
//                 }
//                 if(root.right===null){
//                     root=root.left;
//                 }
//                 curr.left=null;
//                 curr.right=null;
//             }
//          }
//         //  return root of the subtree
//          return root;
//     }
//     //time complexity of this is O(n^2)
//     isBst(root){
//         if(!root){
//             return true;
//         }
//         if(root.left !=null && this.findMaxInTree(root.left)>root.data){
//             return false;
//         }
//         if(root.right !=null && this.findMinInTree(root.right)<root.data){
//             return false;
//         }
//         return this.isBst(root.left) && this.isBst(root.right);
//     }
//     isBSTOptimal(root,minVal,maxVal){

//         if(!root){
//             return true;
//         }

//         if(root.data<minVal){
//             return false;
//         }
//         if(root.data>maxVal){
//             return false;
//         }

//         return this.isBSTOptimal(root.left,minVal,root.data) && this.isBSTOptimal(root.right,root.data,maxVal);

//     }
// }


// const bst = new BST();
// const arr =  '6 4 10 3 1 5 7 12 9 8'.split(' ').map(val=>+val);  

// console.log(arr);
// for( let val of arr)
//     bst.insert(val);


//     bst.root.left.left.data= 50;
//     // bst.inorder(bst.root);


// // console.log(bst.search(bst.root,1));
// // bst.delete(bst.root,9);
// // bst.inorder(bst.root);

// console.log(bst.isBSTOptimal(bst.root,-Infinity,Infinity));
// // console.log(bst.search(bst.root,1));
// console.log(bst.findMax(5))

/**
Input: n = 20
Output: 4
There are following 4 ways to reach 20
(10, 10)
(5, 5, 10)
(5, 5, 5, 5)
(3, 3, 3, 3, 3, 5)
 */

// function count(n)
// {
//     let table = new Array(n + 1), i;   //[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

//     for(let j = 0; j < n + 1; j++)     
//     table[j] = 0;

//     table[0] = 1;

//     for (i = 3; i <= n; i++)
//     table[i] += table[i - 3];
//     console.log(table)
     
//     for (i = 5; i <= n; i++)
//     table[i] += table[i - 5];
//     console.log(table)
     
//     for (i = 10; i <= n; i++)
//     table[i] += table[i - 10];
//     console.log(table)
 
//     return table[n];
// }
 
// console.log(count(20))
 

// function buildTree(inOrder, postOrder){
//     return helper(inOrder, postOrder, 0, inOrder.length - 1, postOrder.length - 1)
// };                   

// let helper = function(inOrder,postOrder,inStart,inEnd,postIndex){
//     let arr = []
//     if(inStart > inEnd || postIndex < 0) return null;
//     let index = 0
//     let root = postOrder[postIndex];     
//     for(let i = inStart; i <= inEnd; i++){               
//         if(inOrder[i] == root){                  
//            index = i
//            break;
//         }
//         arr.push(root)
//     }         
//        return helper(inOrder,postOrder,index+1,inEnd,postIndex-1);
//        return  helper(inOrder,postOrder,inStart,index-1,postIndex-1-(inEnd-index));
// }

// let inOrder = [1,2,0,5,3,9]
// let postOrder = [1,0,2,9,3,5]
// console.log(buildTree(inOrder,postOrder)) 
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// output is [5,2,3,1,0,9]

// function sort(a){
//     let i = 0
//     let j = a.length - 1
//     while(i < j){
//         if(a[i] == 1 && a[j] == 0){
//            [a[i], a[j]] = [a[j], a[i]]
//            i++;
//            j--
//         }
//         else if(a[i] == 0 && a[j] == 1){
//             i++
//             j--
//         }
//         else if(a[i] == 1 && a[j] == 1){
//             j--
//         }
//         else if(a[i] == 0 && a[j] == 0){
//             i++
//         }
//     }
//     return a
// }
// console.log(sort([0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0]))
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let str = "[]{}[]{}"

// function isValid(str){
//     let map = {
//         "[" : "]",
//         "(" : ")",
//         "{" : "}"
//     }
//     let stack = []
//     for(let i = 0; i < str.length; i++){
//         if(map[str[i]]){
//             stack.push(str[i])
//         }else{
//             if(str[i] != map[stack.pop()]){
//                 return false
//             }
//         }
//     }
//     return true
// }
// console.log(isValid(str))

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let str = "()))"
// function balanceBrk(str){
//     let openBrace = 0
//     let closeBrace = 0
//   //  if(str.length % 2 == 1) return -1
//     for(let i = 0; i < str.length; i++){
//         if(str[i] == "(") openBrace++
//         else (openBrace == 0) ? closeBrace++ : openBrace--
//     }
//     //return Math.ceil(openBrace/2) + Math.ceil(closeBrace/2)
//     return openBrace + closeBrace
// }
// console.log(balanceBrk(str))
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function lastk(head){
//     let slow = this.head
//     let fast = this.head
//     for(let i = 0; i < K; i++){
//         fast = fast.next
//     }
//     while(fast != null){
//         slow = slow.next
//         fast = fast.next
//     }
//     slow.data
// }

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function middleElement(head){
//     let slow = head
//     let fast = head
//     while(fast && fast.next){
//         slow = slow.next
//         fast = fast.next.next
//     }
//     return slow.data
// }

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


class Node{
    constructor(val){
        this.val = val
        this.right = null
        this.left = null
    }
}

class BinaryTree{
    constructor(){
        this.root = null
    }
    makeTree(postOrder, inOrder){
        while(postOrder.length){
            let val = postOrder.pop()
            let newNode = new Node(val)
            if(!this.root) this.root = newNode
            else{
                let curr = this.root
                while(true){
                    if(inOrder.indexOf(curr.val))
                }
            }
        }
    }
}

postOrder = [4, 5, 2, 6, 7, 3, 1]
inOrder = [4, 2, 5, 1, 6, 3, 7]