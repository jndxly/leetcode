/*
输入一个链表，反转链表后，输出新链表的表头。
 */
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function ReverseList(pHead)
{
    // write code here
    if(pHead == null || pHead.next == null){
        return pHead;
    }
    let cur = pHead, pNext = pHead.next, pre = null;
    while(pNext){
        cur.next = pre;
        pre = cur;
        cur = pNext;
        pNext = pNext.next;
    }
    cur.next = pre;
    return cur;
}