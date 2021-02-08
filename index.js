// vertices
// Array<{ name: xy; discovered: null }>
// edges [xy, xy]

// take a node
// explore - look at adjacent unvisited nodes
// add to top of stack
function depthFirstSearch(rootNode, vertices, edges) {
  const stack = [rootNode]; // LIFO
  const visited = [];
  
  while (stack.length > 0) {
    const node = stack.pop();
    if (!node.discovered) {
      visited.push(node);
      stack.push(...getAdjacent(node, vertices, edges));
    }
  }
  return visited;
}

function getAdjacent(node, vertices, edges) {
  const adjacent = [];
  edges.forEach(edge => {
    const found = edge.findIndex(name => name === node.name);
    if (found !== -1) {
      const index = found === 0 ? 1 : 0;
      const node = vertices.find(vertex => vertex.name === edge[index]);
      adjacent.unshift(node);
    }
  });

  return adjacent;
}

// let s be stack
// s.push(v)
// while