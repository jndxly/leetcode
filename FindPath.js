/*
输入一颗二叉树的跟节点和一个整数，打印出二叉树中结点值的和为输入整数的所有路径。
路径定义为从树的根结点开始往下一直到叶结点所经过的结点形成一条路径。(注意: 在返回值的list中，数组长度大的数组靠前)
 */
function FindPath(root, expectNumber)
{
  // write code here
  let list = [], result = [];
  dfs(root, 0);
  return list;
  function dfs(root, sum){
    if(root == null) return ;
    sum += root.val;
    result.push(root.val)
    if(sum == expectNumber && root.left == null && root.right == null){
      list.push(result.slice(0));
    }
    if(root.left){
      dfs(root.left, sum);
    }
    if(root.right){
      dfs(root.right, sum);
    }
    result.pop();
    return;
  }

}