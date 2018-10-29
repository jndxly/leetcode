/**
 * 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。

 示例：

 给定一个链表: 1->2->3->4->5, 和 n = 2.

 当删除了倒数第二个节点后，链表变为 1->2->3->5.
 说明：

 给定的 n 保证是有效的。
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {

  let first = head, num = 0,second = head, pre = null;


  while(first != null && num < n){
    first = first.next;

    num++;
  }

  // 第一个
  if(first == null && num == n){
    return head.next;
  }
  else{
    while(first != null ){
      first = first.next;
      pre = second;
      second = second.next;
    }
    if(first == null){
      pre.next = second.next;
      return head;
    }
  }


};