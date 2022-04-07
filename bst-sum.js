const bstSum = root => {
  // if there is a left node, recursively call bstSum passing in that value
  const leftVal = root.left ? bstSum(root.left) : 0;
  const rightVal = root.right ? bstSum(root.right) : 0;

  return root.value + leftVal + rightVal;
}