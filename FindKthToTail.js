/*
输入一个链表，输出该链表中倒数第k个结点。
 */
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindKthToTail(head, k)
{
    // write code here
    if(k <= 0 || head == null) return null;

    let node = head;
    while(--k){
        node  = node.next;
        if(node == null){
            return null;
        }
    }
    let kNode = head;
    while(node.next){
        node = node.next;
        kNode = kNode.next;
    }
    return kNode;

}