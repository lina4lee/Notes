const bstMinMax = root => {
  // helper function for finding min value
  const min = node => {
    if (node.left)
      return min(node.left);
    return node.value;
  };

  // helper function for finding max value
  const max = node => {
    if (node.right)
      return max(node.right);
    return node.value;
  };

  // finding max - min
  return max(root) - min(root);
}