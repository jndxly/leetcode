/*
输入两个单调递增的链表，输出两个链表合成后的链表，当然我们需要合成后的链表满足单调不减规则。
 */
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function Merge(pHead1, pHead2)
{
    // write code here
    let head = null, node = null, tail;
    while(pHead1 && pHead2){
        if(pHead1.val > pHead2.val){
            node = pHead2;
            pHead2 = pHead2.next;
        }
        else{
            node = pHead1;
            pHead1 = pHead1.next;
        }
        if(!head){
            head = tail = node;
        }

        else{
            tail.next = node;
            tail = node;
        }
    }

    if(pHead1){
        if(tail){
            tail.next = pHead1;
        }
        else{
            head = pHead1;
        }

    }
    if(pHead2){
        if(tail){
            tail.next = pHead2;
        }
        else{
            head = pHead2;
        }
    }
    return head;
}