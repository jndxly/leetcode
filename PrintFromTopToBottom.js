/*
从上往下打印出二叉树的每个节点，同层节点从左至右打印。
 */
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function PrintFromTopToBottom(root)
{
  // write code here
  if(root == null) return [];
  let queue = [], result = [], temp = null;
  queue.push(root);
  while(queue.length > 0){
    temp = queue.shift();
    result.push(temp.val);
    if(temp.left){
      queue.push(temp.left);
    }
    if(temp.right){
      queue.push(temp.right);
    }

  }
  return result;

}