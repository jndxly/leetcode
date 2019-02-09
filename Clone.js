/*
输入一个复杂链表（每个节点中有节点值，以及两个指针，一个指向下一个节点，另一个特殊指针指向任意一个节点），
返回结果为复制后复杂链表的head。（注意，输出结果中请不要返回参数中的节点引用，否则判题程序会直接返回空）
 */
/*function RandomListNode(x){
    this.label = x;
    this.next = null;
    this.random = null;
}*/
//1、复制每个节点，如：复制节点A得到A1，将A1插入节点A后面
// 2、遍历链表，A1->random = A->random->next;
//3、将链表拆分成原链表和复制后的链表
function Clone(pHead)
{
  // write code here
  if(!pHead){
    return null;
  }
  let node = null, temp = pHead, temp1, pNext, pNext1, head;
  while(temp){
    pNext = temp.next;
    node = new RandomListNode(temp.label);
    temp.next = node;
    node.next = pNext;
    temp = pNext;
  }

  temp = pHead;
  while(temp){
    pNext = temp.next;
    if(temp.random){
      pNext.random = temp.random.next;
    }
    temp = pNext.next;
  }

  temp1 = head = pHead.next;

  temp = pHead;
  while(temp1.next){
    pNext = temp.next.next;
    pNext1 = temp1.next.next;
    temp.next = pNext;
    temp1.next = pNext1;

    temp = pNext;
    temp1 = pNext1;
  }
  return head;
}