var isSymmetric = function(root) {
    // a tree with no children is symmetric.
    if (!root) return true;
    
    function checkSymmetry(leftTree, rightTree) {
      // if both subtrees are null, they are symetric.
      if (!leftTree && !rightTree) return true;
      
      // if both subtrees are not null, 
      // check their current values and the symmetry of their children
      if (leftTree && rightTree) {
        return (
          leftTree.val === rightTree.val &&
          checkSymmetry(leftTree.left, rightTree.right) &&
          checkSymmetry(leftTree.right, rightTree.left)
        );
      }
      
      // at this point, one of the sub trees is null 
      //which is not symmetric.
      return false;
    }
    
    return checkSymmetry(root.left, root.right);
  };