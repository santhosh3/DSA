// // what are graphs?
// // A graph data stucture consists of finite set of vertices or nodes or points together with a set of unordered
// // pairs of these vertices for an undirected graph or a set of ordered pairs for a directed graph
// // uses of graphs
// //  Social Networking
// //  Location / Mapping
// // Types of graphs Here Nodes are called vertices and edges are called connections
// // weighted/Unweighted => values assigned to distances between vertices
// // Directed/Undirected => directions assigned to distances between verticies
// // Representing a graph? 

// class Graph{
//     constructor(){
//         this.adjacencyList = {};
//     }
//     addVertex(vertex){
//         if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
//     }
//     addEdge(v1,v2){
//         this.adjacencyList[v1].push(v2);
//         this.adjacencyList[v2].push(v1);
//     }
//     removeEdge(vertex1,vertex2){
//         this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
//             v => v !== vertex2
//         );
//         this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
//             v => v !== vertex1
//         );
//     }
// }

// const graph = new Graph
// graph.addVertex("A");
// graph.addVertex("B");
// graph.addVertex("C");
// graph.addVertex("D");
// graph.addEdge("A","B");
// graph.addEdge("B","C");
// graph.addEdge("C","D");
// graph.addEdge("D","A");
// graph.removeEdge("D","A")
// console.log(graph) 

console.log(12)