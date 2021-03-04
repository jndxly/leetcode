/*
输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果。
如果是则输出Yes,否则输出No。假设输入的数组的任意两个数字都互不相同。
 */

function VerifySquenceOfBST(sequence) {
  var len = sequence.length
  if (!len) {
    return false;
  }
  return adjustSequence(0, len - 1);
  function adjustSequence(start, end){
    if (start >= end) {
      return true;
    }
    //查找根节点
    var root = sequence[end];
    //判断左子树的边界，剩下的则是右子树的元素
    for(var i = start; i < end && sequence[i] < root; i++);
    var index = i;
    //根据定义，右子树都必须大于根节点，否则返回false
    for (i = i + 1; i < end; i++) {
      if (sequence[i] < root) {
        return false;
      }
    }
    return adjustSequence(start, index - 1) && (adjustSequence(index, end - 1));
  }
}