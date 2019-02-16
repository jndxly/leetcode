/*
输入一棵二叉树，判断该二叉树是否是平衡二叉树。
 */
/*
平衡二叉搜索树（Self-balancing binary search tree）又被称为AVL树（有别于AVL算法），
且具有以下性质：它是一 棵空树或它的左右两个子树的高度差的绝对值不超过1，
并且左右两个子树都是一棵平衡二叉树。
*/
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function IsBalanced_Solution(pRoot)
{
  // write code here
  if(!pRoot) return true;
  let max = 0;
  getDepth(pRoot.left, 0);
  let left = max;
  max = 0;
  getDepth(pRoot.right, 0);
  let right = max;
  if(Math.abs(left - right) <= 1){
    return IsBalanced_Solution(pRoot.left) && IsBalanced_Solution(pRoot.right)
  }
  else{
    return false;
  }

  function getDepth(root, len){

    if(root){
      len ++;
      max = max > len ? max : len;
      if(root.left){
        getDepth(root.left, len);
      }
      if(root.right){
        getDepth(root.right, len)
      }
    }
    else{
      return;
    }

  }
}