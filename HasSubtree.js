/*
输入两棵二叉树A，B，判断B是不是A的子结构。（ps：我们约定空树不是任意一个树的子结构）
 */
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function HasSubtree(pRoot1, pRoot2)
{
    // write code here
    if(!pRoot1 || !pRoot2){
        return false;
    }
    let subArr = middleOrder(pRoot2);
    let subRoot = subArr[0];
    let rootArr = findSubRoot(pRoot1, subRoot.val);
    for(let len = 0; len < rootArr.length; len++){
        if(checkSub(rootArr[len], pRoot2)){
            return true;
        }
    }
    return false;

}
function checkSub(root1, root2){
    if(root2 == null) return true;
    if(root1 == null) return false;
    if(root1.val == root2.val){
        return checkSub(root1.left, root2.left) && checkSub(root1.right, root2.right);
    }
    return false;
}
function middleOrder(root){
    let arr = [];
    let stack = [root], node;
    while(stack.length > 0){
        let temp = stack.pop();
        arr.push(temp.val);
        if(temp.right){
            stack.push(temp.right);
        }
        if(temp.left){
            stack.push(temp.left);
        }
    }
    return arr;

}
function findSubRoot(root, val){
    let subArr = [root], node;
    let arr = [];
    while(subArr.length > 0){
        let temp = subArr.pop();
        if(temp.val == val){
            arr.push(temp);
        }
        if(temp.right){
            arr.push(temp.right);
        }
        if(temp.left){
            arr.push(temp.left);
        }
    }
    return arr;
}