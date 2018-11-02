/*
给出一个链表，每 k 个节点一组进行翻转，并返回翻转后的链表。

k 是一个正整数，它的值小于或等于链表的长度。如果节点总数不是 k 的整数倍，那么将最后剩余节点保持原有顺序。

示例 :

给定这个链表：1->2->3->4->5

当 k = 2 时，应当返回: 2->1->4->3->5

当 k = 3 时，应当返回: 3->2->1->4->5

说明 :

你的算法只能使用常数的额外空间。
你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */


 function ListNode(val) {
     this.val = val;
     this.next = null;
 }
 let pre = null, head;
 for(let len = 0 ; len < 2; len++){

     let node = new ListNode(len + 1);
     if(pre == null){
         pre = node;
head = node;
     }
     else{
         pre.next = node;
         pre = node;
     }

 }

function print(node){
     while(node != null){
         console.log(node.val + " ")
         node = node.next;
     }
}



var reverseKGroup = function(head, k) {

    if(k <= 1) return head;

    let preNode = null, nextNode = null;
    let len = 0, node = head, tail = head;

    while(node != null){
        tail = getKNode(node, tail, k); //获取k个节点的head和tail


        if(tail != null){
            nextNode = tail.next;  //先保存下个节点
            reverseKNode(node, tail);

            if(preNode == null){
                preNode = node;
                head = tail;

            }
            else{


                preNode.next = tail;
                preNode = node;
            }

            node = nextNode;
        }
        else{
            if(preNode != null){
                preNode.next = node;

            }
            break;


        }

    }
    return head;







};

function reverseKNode(head, tail){

    tail.next = null;

    let pre = head, cur = head.next, next = cur.next;

    while(cur != null){

        cur.next = pre;
        pre = cur;
        cur = next;
        next = next != null ? next.next : null;
    }


    tail = head;
    head = pre;
    tail.next = null;


}

function getKNode(head, tail, k){

    let len = 1;
    let node = head;
    while(len < k  && node != null){
        len++;
        node = node.next;
    }
    tail = node; //如果不足k个，那么tail将为null

    return tail;


}

let newHead = reverseKGroup(head, 3)
print(newHead)