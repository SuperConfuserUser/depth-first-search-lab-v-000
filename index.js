// vertices
// Array<{ name: xy; discovered: null }>
// edges [xy, xy]

// take a node
// explore - look at adjacent unvisited nodes
// add node/s to top of stack
// explore first and add any adjacent unvisted to top of
  function depthFirstSearch(rootNode, vertices, edges) {
    const stack = [rootNode]; // LIFO
    const visited = [];
    
    while (stack.length > 0) {
      const node = stack.pop();
      if (!node.discovered) {
        node.discovered = true;
        visited.push(node);
        getAdjacent(node.name, vertices, edges).forEach(node => {
          visited.push(node);
          stack.push(node);
        })
        // stack.push(...getAdjacent(node.name, vertices, edges));
      }
    }
    return visited;
  }

// function getAdjacent(node, vertices, edges) {
//   const adjacent = [];
//   edges.forEach(edge => {
//     const found = edge.findIndex(name => name === node);
//     if (found !== -1) {
//       const index = found === 0 ? 1 : 0;
//       const adjacentNode = vertices.find(vertex => vertex.name === edge[index]);
//       adjacent.unshift(adjacentNode);
//     }
//   });

//   return adjacent;
// }

// function depthFirstSearch(rootNode, vertices, edges){
// 		let stack = []
// 		stack.push(rootNode)
// 		let visited = [rootNode]

// 		while(stack.length != 0){
// 			// console.log(`first element in stack is ${stack[0].name}`)
// 			let v = stack.pop()
// 			if(!v.discovered){
// 				v.discovered = true

// 				findAdjacent(v.name, vertices, edges).forEach(function(node){
// 					visited.push(node)
// 					stack.push(node)
// 				})
// 			}
// 		}
// 		return visited;
// }

function getAdjacent(nodeName,  vertices, edges){
  return edges.filter(function(edge){
    return edge.includes(nodeName)
  }).map(function(edge){
    return edge.filter(function(node){
      return (node != nodeName)
    })[0]
  }).map(function(name){
    return findNode(name, vertices)
  }).filter(function(node){
		return !node.discovered
	})
}

function findNode(nodeName, vertices){
  return vertices.find(function(vertex){
    return vertex.name == nodeName
  })
}