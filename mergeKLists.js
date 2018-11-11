/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {

    let head = null;

    for(let len = 0; len < lists.length; len++){

        head = mergeTwoList(head, lists[len]);



    }
    return head;


};

function mergeTwoList(firstList, secondList){

    let first = firstList, second = secondList, head = newNode = pre = null;

    while(first != null && second != null){

        let firstVal = first.val;
        let secondVal = second.val;
        if(firstVal < secondVal){
            newNode = new ListNode();
            newNode.val = firstVal;
            first = first.next;
        }
        else{
            newNode = new ListNode();
            newNode.val = secondVal;
            second = second.next;
        }
        if(head == null){
            pre = head = newNode
        }
        else{
            pre.next = newNode;
            pre = newNode;
        }

    }

    while(first != null){
        let firstVal = first.val;
        newNode = new ListNode();
        newNode.val = firstVal;
        if(head == null){
            pre = head = newNode
        }
        else{
            pre.next = newNode;
            pre = newNode;
        }
        first = first.next;
    }

    while(second != null){
        let secondVal = second.val;
        newNode = new ListNode();
        newNode.val = secondVal;

        if(head == null){
            pre = head = newNode
        }
        else{
            pre.next = newNode;
            pre = newNode;
        }

        second = second.next;

    }
    return head;

}