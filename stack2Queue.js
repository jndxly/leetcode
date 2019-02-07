/*
用两个栈来实现一个队列，完成队列的Push和Pop操作。 队列中的元素为int类型。
 */
let stack1 = [], stack2 = [];
function push(node)
{
    stack1.push(node);
}
function pop()
{
    // write code here
    let temp = stack1.pop();
    while(temp){
        stack2.push(temp);
        temp = stack1.pop();
    }
    let result = stack2.pop();
    temp = stack2.pop();
    while(temp){
        stack1.push(temp);
        temp = stack2.pop();
    }
    return result;
}