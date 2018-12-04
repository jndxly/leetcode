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

/*
3、单词翻转。输入一个英文句子，翻转句子中单词的顺序，但单词内字符的顺序不变，句子中单词以空格符隔开。
简单起见，标点符号和普通字母一样处理。例如，输入“I am a student.”，则输出“student. a am I”。
 */
function reverseWords(str){

  let start = 0;
  for(let len = 0; len < str.length; len++){

    if(str.charAt(len) != " "){

      continue;

    }
    else{
      reverse(str, start, len - 1);
      start = len;
    }

  }

  function reverse(str, start, end){
    let tmp ;
    while(start < end){
      tmp = str[end];
      str[end] = str[start];
      str[start] = tmp;
      start++;
      end--;
    }
  }

}

reverseWords("I am a students.")