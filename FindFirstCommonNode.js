/*
输入两个链表，找出它们的第一个公共结点。
 */
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindFirstCommonNode(pHead1, pHead2)
{

  if(!pHead1 || !pHead2) return null;

  let len1 = getLen(pHead1);
  let len2 = getLen(pHead2);
  let p1 = pHead1, p2 = pHead2, diff = len1 - len2;
  if(len1 < len2){
    p1 = pHead2;
    p2 = pHead1;
    diff = len2 - len1;
  }
  while(diff > 0){
    p1 = p1.next;
    diff--;
  }
  while(p1 !== p2){
    p1 = p1.next;
    p2 = p2.next;
  }
  return p1;

  function getLen(head){
    let len = 0;
    let cur = head;
    while(cur){
      len++;
      cur = cur.next;
    }
    return len;
  }
}