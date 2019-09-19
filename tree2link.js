/**
 * 输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的双向链表。
 * 要求不能创建任何新的结点，只能调整树中结点指针的指向。
 */

function convert2Link(root){
    if(!root){
        return
    }
    let pre = null;
    let node = convert(root);
    while(node.left){
        node = node.left;
    }

    function convert(root){

        if(!root) return null;

        if(root.left){
            root = convert(node.left);
        }
        if(pre){
            pre.right = root;
        }
        root.left = pre;
        pre = root;
        if(root.right){
            root = convert(root.right);
        }
        return pre;
    }
    return node;


}

function inOrder(node, tmp){

  while(node != null){

    inOrder(node.left);
    tmp.push(node.val);
    inOrder(node.right)

  }

}

function convert(node){

  let tmp = [];
  inOrder(node, tmp);
  if(tmp.length > 0){

    tmp[0].left = null;tmp[tmp.length - 1].right = null;
    for(let len = 1; len < tmp.length; len++){

      tmp[len - 1].right = tmp[len];
      tmp[len].left = tmp[len - 1]

    }
    return tmp[0];
  }
  return null;


}