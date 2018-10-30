/**给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。

 示例:

 给定 1->2->3->4, 你应该返回 2->1->4->3.
 说明:

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
 * @return {ListNode}
 */
var swapPairs = function(head) {

  let p = head, pre = null;

  if(p && p.next){
    head = p.next;
  }
  else{
    return head;
  }

  while(p && p.next){

    let tail = p.next.next;

    let first = p;
    let second = p.next;
    swap(first, second);

    if(pre){
      pre.next = second;
    }
    pre = first;

    p = tail;
  }
  return head;


};

function swap(first, second){
  let tail = second.next;
  second.next = first;
  first.next = tail;
}