//A tree is called binary tree if each node pointing to maximum to nodes (zeros,one,two)
//left sub tree and right sub tree
//INSERSION .. DELECTION .. SEARCHING .. TRAVERSING
//HEIGHT OF THE TREE AND NO. OF NODES IN TREE

// BINARY SEARCH TREE CONSIST OF LEFT CHILD IS SMALLER THAN PARENT AND RIGHT CHILD IS HIGHER THAN PARENT

// HOW BINARY SEARCH TREE WORKS
// EVERY PARENT NODE HAS AT MOST 2 CHILDREN
// EVRY NODE TO THE LEFT OF THE PARENT IS ALWAYS LESS THAN THE PARENT
// EVRY NODE TO THE RIGHT OF A PARENT NODE IS ALWAYS GREATER THAN THE PARENT

//SKELITON OF BSTS
/**
 *  class BinarySearchTree {
 *      constructor(){
 *          this.root = null
 * }
 * }
 * 
 *  class Node {
 *      constructor(value){
 *          this.value = value
 *          this.left = left ? left : null
 *          this.right = right ? right : null
 * }
 * }
 */


// class Node{
//     constructor(data,left,right){
//         this.data = data
//         this.left = null
//         this.right = null
//     }
// }

// class BinaryTree {
//     constructor(){
//         this.root = null;
//         this.size = 0
//     }
//     insert(data){
//         const node = new Node(data);
//         if(!this.roo)
//     }
// }

// class Node {
//     constructor(value){
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }

// class BinarySearchTree {
//     constructor(){
//         this.root = null
//     }
// }

// let tree = new BinarySearchTree()
// tree.root = new Node(10)
// tree.root.right = new Node(15)
// tree.root.left = new Node(7)
// tree.root.left.right = new Node(9)

// INSERT A NODE IN BST
// STEPS => ITERATIVELY OR RECURSIVELY
// CREATE A NEW NODE
// STARTING AT A ROOT
// CHECK IF THERE IS A ROOT, IF NOT--> THE ROOT NOW BECOMES THAT NEW NODEL
// IF ROOT IS PRESENT CHECK IF THE VALUE OF THE NEW NODE IS GREATER THAN OR LESS THAN THE VALUE OF THE ROOT
// IF IT IS GREATER
//  ==> CHECK TO SEE IF THERE IS A NODE TO THE RIGHT
//     ==> IF THERE IS, MOVE TO THE NODE AND REPEATE THESE STEPS
//     ==> IF THERE IS NOT ADD THAT NODE AS THE RIGHT PROPERTY
// IF IT IS LESSER
//  ==> CHECK TO SEE IF THERE IS A NODE TO THE LEFT
//     ==> IF THERE IS, MOVE TO THE NODE AND REPEATE THESE STEPS
//     ==> IF THERE IS NOT ADD THAT NODE AS THE LEFT PROPERTY
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// FINDING A NODE IN A BST
// STARTING AT THE ROOT
// CHECK IF THERE IS A ROOT, IF NOT- WE'RE DONE SEARCHING
// IF THERE IS A ROOT CHECK IF THE VALUE OF THE NEWNODE IS THE VALUE ARE LOOKING FOR IF WE FOUND IT, WE'RE DONE
// IF NOT, CHECK TO SEE IF THE VALUE IS GREATER THAN OR LESSER THAN THE VALUE OF THE ROOT


class Node  {
        constructor(value){
            this.value = value
            this.left = null
            this.right = null
        }
    }

class BinarySearchTree {
    constructor(){
        this.root = null
    } 
    //+++++++++++++++++++++++++++++++ INSERT WITHOUT RECURSION ++++++++++++++++++++++++++++++++++++++++++
    insert(value){
        let newNode = new Node(value)
        if(this.root == null){
           this.root = newNode;
           return this;
        }
        let current = this.root
        while(true){
            if(value == current.value) return "undefined"
            if(value < current.value){
              if(current.left == null){
                 current.left = newNode
                 return this
              }
              current = current.left;
            }else{
                if(current.right == null){
                   current.right = newNode
                   return this
                }
                current = current.right;
            }
        }
    }
    //+++++++++++++++++++++++++++++ INSERT WITH RECURSION ++++++++++++++++++++++++++++++++++++++++++++
    insertRecursively(root,data){
        if(!root){
            const newNode = new Node(data);
            return newNode
        }
        if(root.data < data){
            root.right = this.insertRecursively(root.right, data);
        }else{
            root.left = this.insertRecursively(root.left,data);
        }
        return root
    }
    INSERT(data){
        this.root = this.insertRecursively(this.root, data)
    }
    //+++++++++++++++++++++++++++ FIND WEATHER VALUE PRESENT IN TREE ++++++++++++++++++++++++++++++++++++++++++
    find(value){
        if(this.root == null) return false;
        let current = this.root
        let found = false
        while(current && !found){
            if(value < current.value){
                current = current.left
            }else if(value > current.value){
                current = current.right
            }else{
                return true
            }
        }
        return false
    }
    //+++++++++++++++++++++++++++++++++ BFS(BREADTH FIRST SEARCH) FUNCTION WILL DO STORE ALL THE ELEMENTS OF TREE ++++++++++++++++++++++++++++++++++++++++++++
    BFS(){
        let node = this.root
        let data = []
        let queue = []
        queue.push(node);
    
        while(queue.length){
            node = queue.shift()
            data.push(node.value);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data
    }
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    DFSPreOrder(){
        let data = []
        function traverse(node){
            data.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right)
        }
        traverse(this.root)
        return data
    }
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    DFSPostOrder(){
        let data = []
        function traverse(node){
            if(node.left) traverse(node.left)
            if(node.right) traverse(node.right)
            data.push(node.value);
        }
        traverse(this.root)
        return data
    }
    POSTORDER(root){
        if(root != null){
            this.POSTORDER(root.left)
            this.POSTORDER(root.right)
            console.log(root.data);
        }
    }
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    DFSInOrder(){
        let data = []
        function traverse(node){
            if(node.left) traverse(node.left)
            data.push(node.value)
            if(node.right) traverse(node.right)
        }
        traverse(this.root)
        return data
    }
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    findMax(root){
        if(!root){
            return null;
        }
        if(root.right===null){
            return root;
        }
        return this.findMax(root.right);
    }
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
}

const tree = new BinarySearchTree
let str = "5 2 3 1 0 9"
let arr = str.split(' ').map(Number)
for(let i = 0; i < arr.length; i++){
    tree.insert(arr[i])
}
//console.log(tree.BFS())
//console.log(tree.DFSPreOrder())
//console.log(tree.DFSPostOrder())
//console.log(tree.DFSInOrder())
//console.log(tree.findMax(9))
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//there are two ways to traverse a tree
//=====> 1) BREADTH FIRST SEARCH   ===> BFS
//=====> 2) DEPTH FIRST SEARCH     ===> DFS

/**
 * BFS
 * CREATE A QUEUE (THIS CAN BE AN ARRAY) AND A VARIABLE TO STORE THE VALUES OF NODES VISITED
 * PLACE THE ROOT NODE IN THE QUEUE
 * LOOP AS LONG AS THERE IS ANYTHING IN THE QUEUE
 * => DEQUEUE A NODE FROM THE QUEUE AND PUSH THE VALUE OF THE NODE INTO THE VARIABLE THAT STORES THE NODES
 * => IF THERE IS A LEFT PROPERTY ON THE NODE DEQUEUED - ADD IT TO THE QUEUE
 * => IF THERE IS A RIGHT PROPERTY ON THE NODE DEQUEUED - ADD IT TO THE QUEUE
 * 
 */

/**
 * THEORY FOR GETTING TREE ORDER USING INORDER AND POSTORDER
 * ACTUAL TREE IS [3,9,20,15,7]
 * INORDER => [9,3,15,20,7]
 * POSTORDER => [9,15,7,20,3]
 */
// function buildTree(inOrder, postOrder){
//     return helper(inOrder, postOrder, 0, inOrder.length - 1, postOrder.length - 1)
// }; //                                           4                     4
//    //                                      0      4      4
// let helper = function(inOrder,postOrder,inStart,inEnd,postIndex){
//     if(inStart > inEnd || postIndex < 0) return null;
//     let index = 0
//     let root = new TreeNode (postOrder[postIndex]);     // POSTORDER[4] == 3
//     for(let i = inStart; i <= inEnd; i++){              // 
//         if(inOrder[i] == root.value){                   // [3] AND INDEX = 1
//            index = i
//            break;
//         }
//     }            //                       2       4     3
//     root.right = helper(inOrder,postOrder,index+1,inEnd,postIndex-1);
//     root.left = helper(inOrder,postOrder,inStart,index-1,postIndex-1-(inEnd-index));
//     return root //                        0       0       4-1-4+1 = 0
// }



class Node1 {
    constructor(data){
        this.data = data;
        this.left = null
        this.right = null
    }
}
class BinarySearchTree1{
    constructor(){
        this.root = null
    }
 // +++++++++++++++++++++++++++++ insert without using recursion ++++++++++++++++++++++++++++
    insert(value){
        let newNode = new Node(value)
        if(this.root == null){
           this.root = newNode;
           return this;
        }
        let current = this.root
        while(true){
            if(value == current.value) return "undefined"
            if(value < current.value){
              if(current.left == null){
                 current.left = newNode
                 return this
              }
              current = current.left;
            }else{
                if(current.right == null){
                   current.right = newNode
                   return this
                }
                current = current.right;
            }
        }
    }
// ++++++++++++++++++  insert using recurssion +++++++++++++++++++//
    INSERT(data){
        let node = new Node1(data)
        if(this.root == null){
            this.root = node
        }else{
            this.INSERTNODE(this.root, node)
        }
    }

    INSERTNODE(root, newNode){
        if(newNode.data < root.data){
            if(root.left == null){
                root.left = newNode
            }else{
                this.INSERTNODE(root.left,newNode)
            }
        }
        else if(newNode.data > root.data){
            if(root.right == null){
                root.right = newNode
            }else{
                this.INSERTNODE(root.right,newNode)
            }
        }
    }
    //+++++++++++++++++++++++++++++++++ BFS(BREADTH FIRST SEARCH) FUNCTION WILL DO STORE ALL THE ELEMENTS OF TREE ++++++++++++++++++++++++++++++++++++++++++++
       BFS(){
        let node = this.root
        let data = []
        let queue = []
        queue.push(node);
    
        while(queue.length){
            node = queue.shift()
            data.push(node.value);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data
    }
    //+++++++++++++++++++++++++ to address root node ++++++++++++++++++++++++++++++++++++++++++++++++
    GETROOTNODE(){
        return this.root
    }
    //+++++++++++++++++++++++++++++  PREORDER traversal +++++++++++++++++++++++++++++++++++++++++++++
    PREORDER(root){
        if(root != null){
            console.log(root.data);
            this.PREORDER(root.left)
            this.PREORDER(root.right)
        }
    }
    //++++++++++++++++++++++++++++++ INORDER traversal ++++++++++++++++++++++++++++++++++++++++++++
    INORDER(root){
        if(root != null){
            this.INORDER(root.left)
            console.log(root.data);
            this.INORDER(root.right)
        }
    }
    //++++++++++++++++++++++++++++++ POSTORDER traversal ++++++++++++++++++++++++++++++++++++++++++++
    POSTORDER(root){
        if(root != null){
            this.POSTORDER(root.left)
            this.POSTORDER(root.right)
            console.log(root.data);
        }
    }
    //+++++++++++++++++++++++++++++ find weather data is there or not ++++++++++++++++++++++++++++++++
    FIND(data){
        if(!root) return false;
        let current = root
        let found = false
        while(current && !found){
            if(data < current.data){
                current = current.left
            }else if(data > current.data){
                current = current.right
            }else{
                return true
            }
        }
        return false
    }
    //++++++++++++++++++++++++++++++ print the nodes of perticual data ++++++++++++++++++++++++++++++++
    SEARCH(root,data){
        if(!root){
            return null;
        }
        if(root.data > data){
            return  this.SEARCH(root.left,data);
        }else if(root.data < data){
            return  this.SEARCH(root.right,data);
        }
        if(this.FIND(data)) return root
        return null
    }
    //+++++++++++++++++++++++++++++++++ FIND MAX ELEMENT IN THE TREE WITH RECURSION +++++++++++++++++++++
    FINDMAX(root){
        if(!root){
            return null
        }
        if(root.right == null){
            return root.data
        }
        return this.FINDMAX(root.right)
    }
    //+++++++++++++++++++++++++++++++ FIND MAX ELEMENT IN THE TREE WITH RECURSION+++++++++++++++++++++
    FINDMAXINTREE(root){
        if(!root){
            return -Infinity;
        }
        return Math.max(this.FINDMAXINTREE(root.right),this.FINDMAXINTREE(root.left),root.data);
    }
    //+++++++++++++++++++++++++++++++++ FIND MIN ELEMENT IN THE TREE +++++++++++++++++++++++++++++++++++
    FINDMIN(root){
        if(root == null){
            return null;
        }
        if(root.left == null){
            return root.data
        }
        return this.FINDMIN(root.left);
    }
    //+++++++++++++++++++++++++++++++++ FIND MIN ELEMENT IN THE TREE WITH RECURSION ++++++++++++++++++++
    FINDMININTREE(root){
        if(!root){
            return Infinity;
        }
        return Math.min(this.findMinInTree(root.right),this.findMinInTree(root.left),root.data);
    }
    //++++++++++++++++++++++++++++++++ DELETE THE NODE IN THE TREE +++++++++++++++++++++++++++++++++++++
      // case - 1 ==> No child
      // leaf nodes are which does not having any child we can delete that type of nodes easily
      // case - 2 ==> One child
      // It is also easy to do
      // case - 3 ==> 2 Children
      // find min in right and copy the value in targeted node Delete duplicate from right sub-tree
      //      OR
      // find max in left and copy the value in targetted node delete duplicate from left sub-tree
      
      DELETE(root,data){
        if(root == null){
           return root
        }
        else if(data < root.data){
            root.left = this.DELETE(root.left,data)
        }
        else if(data > root.data){
            root.right = this.DELETE(root.right,data)
        }
        else{
            //case :- 1 (no child)
            if(root.left == null && root.right == null){
               return null
            }
           // else if()
        }
      }

   // +++++++++++++++++++++++++++++++++++++++++++ ISBST ++++++++++++++++++++++++++++++++++++++++++++++++
     ISBST(root){
        if(!root){
            return true;
        }
        if(root.left !=null && this.FINDMAXINTREE(root.left)>root.data){
            return false;
        }
        if(root.right !=null && this.FINDMININTREE(root.right)<root.data){
            return false;
        }
        return this.isBst(root.left) && this.isBst(root.right);
    }

    // ++++++++++++++++++++++++++++++++++++++++ DEPTH OF TREE +++++++++++++++++++++++++++++++++++++++++

    MAXDEPTH(node)
    {
        if (node == null)
            return 0;
        else{
             let lDepth = this.MAXDEPTH(node.left);
             let rDepth = this.MAXDEPTH(node.right);
         if (lDepth > rDepth)
           return (lDepth + 1);
         else
           return (rDepth + 1);
        }
    }
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 
}

let ins = [3,5]
let bst = new BinarySearchTree1();

for(let i = 0; i < ins.length; i++){
    bst.INSERT(ins[i])
}

let root = bst.GETROOTNODE()
// console.log("PREORDER")
// bst.PREORDER(root)
// console.log("POSTORDER")
// bst.POSTORDER(root)
// console.log("INORDER")
// bst.INORDER(root)
// console.log("FINDMAX")
// bst.FINDMAX(root)
// console.log(bst.SEARCH(root,93))
// console.log(bst.FIND(5))
 //  console.log(bst.FINDMAXINTREE(root))
 //   bst.FINDMAX(root)
  console.log(bst.MAXDEPTH(root))
  //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//814
  function searchBST(root,val){
    if(root == null) return null
    if(root.val == val){
        return root
    }else if(val < root.val){
        return searchBST(root.left, val)
    }else{
        return searchBST(root.right, val)
    }
  }

  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//1325

function removeLeafNodes(root,val){
    if(root == null) return null
    root.left = removeLeafNodes(root.left,val)
    root.right = removeLeafNodes(root.right,val)
    if(root.val == val && root.left == null && root.right == null){
        return null
    }
    return root
}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//226
//invert binary tree

function invertTree(root){
    if(root == null) return root
    let temp = new TreeNode()
    temp = root.right
    root.right = root.left
    root.left = temp
    root.left = invertTree(root.left);
    root.right = invertTree(root.right);
    return root
}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//104
//Max depth

function maxDepth(root){
    if(root === null) return 0
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//101 symetrical tree

function isSymmetric(root){
    return isSameTree(root,root)
}
function isSameTree(t1,t2){
    if(t1 === null && t2 === null) return true
    if(t1 === null || t2 === null) return false
    return t1.val === t2.val && isSameTree(t1.left, t2.right) && isSameTree(t1.right,t2.left)
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++