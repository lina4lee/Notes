function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}


/*
​
Given the root of a binary search tree, determine the difference of the maximum
and minimum value.
​
Note that the function signature is NOT defined as a method on the
BinarySearchTree prototype. Instead, we provide the root as an argument to the
function.
​
Ex:
​
     4
   /   \
  2     7
 / \     \
1   3     9
         /
        8
​
returns 8, becuase 9 - 1 = 8
​
*/


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

/*
​
Extension: (not necessarily related in technique to above problem, but
nevertheless still a BST problem)
​
Given a binary search tree (BST), find the lowest common ancestor (LCA) of two
given nodes "p" and "q" in the BST. Return the LCA node itself.
​
Ex:
​
     4
   /   \
  2     7
 / \     \
1   3     9
         /
        8
​
The LCA of node 1 and node 3 is node 2.
The LCA of node 8 and node 9 is node 9.
The LCA of node 2 and node 8 is node 4.
​
*/

const lowestCommonAncestor = (root, p, q) => {
  if (p.value > q.value)
    return lowestCommonAncestor(root, q, p);

  if (q.value < root.value)
    return lowestCommonAncestor(root.left, p, q);
  else if (root.value < p.value)
    return lowestCommonAncestor(root.right, p, q);
  else
    return root;
};
