// vertices
// Array<{ name: xy; discovered: null }>
// edges [xy, xy]
function depthFirstSearch(rootNode, vertices, edges) {
  const stack = [rootNode];
  const visited = [rootNode];
  
  while (stack.length > 0) {
    const node = stack.pop();
    if (!node.discovered) {
      node.discovered = true;
      const adjacent = getAdjacent(node.name, vertices, edges);
      visited.push(...adjacent);
      stack.push(...adjacent);
    }
  }
  return visited;
}

function getAdjacent(node, vertices, edges) {
  const adjacent = [];
  edges.forEach(edge => {
    const firstIndex = edge.findIndex(name => name === node);
    if (firstIndex !== -1) {
      const secondIndex = firstIndex === 0 ? 1 : 0;
      const adjacentNode = vertices.find(vertex => vertex.name === edge[secondIndex]);
      if (!adjacentNode.discovered) {
        adjacent.push(adjacentNode);
      }
    }
  });

  return adjacent;
}