/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}


function largeNumAdd(l1, l2){
    var l = null,tmp = null,tail = null,pre = 0;

    while(l1 && l2){
        var node = new ListNode();
        var val = l1.val + l2.val + pre;
        if(val >= 10){
            node.val = val % 10;
            pre = 1;
        }
        else{
            node.val = val;
            pre = 0;
        }
        if(l == null){
            l = tail = node;
        }
        else{
            tail.next = node;
            tail = node;
        }
        l1 = l1.next;
        l2 = l2.next;
    }
    if(l1){
        tmp = l1;
    }
    if(l2){
        tmp = l2;
    }
    while(tmp){
        var node = new ListNode();
        var val = tmp.val + pre;
        if(val >= 10){
            node.val = val % 10;
            pre = 1;
        }
        else{
            node.val = val;
            pre = 0;
        }
        tail.next = node;
        tail = node;
        tmp = tmp.next;

    }

    if(pre != 0){
        var node = new ListNode();
        node.val = pre
        tail.next = node
    }
    return l;
}

function print(l){
    var arr = [];
    while(l){
        var val = l.val;
        arr.push(val);
        l = l.next;
    }
    return arr;
}

var addTwoNumbers = function(l1, l2) {

    var l = largeNumAdd(l1, l2);
    return print(l);
};

