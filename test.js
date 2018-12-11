
function checkSum(arr, flagArrs, sum, targeArrs){
    let cur = 0, targetArr = [];
    for(let len = 0; len < arr.length; len++){
        if(flagArrs[len] == 1){
            cur += arr[len];
            targetArr.push(arr[len])
        }
    }
    if(cur == sum){
        targeArrs.push(targetArr)
    }


}

function find(arr, n, m, sum){

    if(n < m){
        return [];
    }
    debugger;

    let flagArrs = [], targeArrs = [];

    for(let len = 0; len < n; len++){
        flagArrs[len] = len < m? 1:0;
    }
    checkSum(arr, flagArrs, sum, targeArrs)
    let isEnd = true;
    while(isEnd){

        let left = 0;

        for(let len = 0; len < n - 1; len++){

            if(flagArrs[ len ] == 1 && flagArrs[len + 1] == 0){
                for(let j = 0; j < len; j++){
                    flagArrs[j] = j < left ? 1 : 0;
                }

                flagArrs[len] = 0;
                flagArrs[len + 1] = 1;

                checkSum(arr, flagArrs, sum, targeArrs);

                if(flagArrs.indexOf(1) == arr.length - n){
                    isEnd == false;
                }
                break;

            }
            if(flagArrs[len] == 1) left++;

        }

    }
    return targeArrs;

}

let arr = find([-2, -1, 0, 1, 2],5, 3, 0);





function buildHeap(arr){
    let len = arr.length;
    for(let index = (Math.ceil(len / 2) - 1); index >= 0; index--){
        heapAdjust(arr, index, arr.length);
    }

}

function heapAdjust(arr, index, len){

    let childIndex = index * 2 + 1;



    let flag = true, tmp = arr[index];
    while(childIndex < len){

        if(arr[childIndex] < arr[childIndex + 1] && childIndex < len){
            childIndex = childIndex + 1;
        }

        if(tmp < arr[childIndex]){
            arr[index] = arr[childIndex];
            index = childIndex;
            childIndex = childIndex * 2 + 1;

        }
        else{

            break;
        }
        arr[index] = tmp;


    }

}

function heapSort(arr){

    buildHeap(arr);
    for(let len = arr.length - 1; len >=0; len--){

        let tmp = arr[0];
        arr[0] = arr[len];
        arr[len] = tmp;
        heapAdjust(arr, 0, len - 1)

    }

}

function getNext(subStr){
let next = [];
    next[0] = -1;
    let k = -1;
    for(let len = 1; len < subStr.length; len++){

        while( k!= -1 && subStr.charAt(len) != subStr.charAt(k)){
            k = next[k];
        }
        if(subStr.charAt(len) == subStr.charAt(k + 1)){
            next[len] = k+1;
            k++;
        }
        else{
            next[len] = k;
        }

    }
    return next;

}

function kmp(str, matchStr){

    let next = [];
    next = getNext(matchStr);
    let k = -1;

    for(let len = 0; len < str.length; len++){

        while(k != -1 && str.charAt(len) != matchStr.charAt(k + 1)){
            k = next[k]
        }
        if(str.charAt(len) == matchStr.charAt(k + 1)){

            k++;
        }
        else{
            k = next[k]
        }
        if(k == matchStr.length - 1){
            return len - matchStr.length + 1;
        }


    }

}

function Node(){
    this.val = null;
    this.left = null;
    this.right = null;
}

function preOrder(node){
    print(node.val);
    if(node.left){
        preOrder(node.left)
    }
    if(node.right){
        preOrder(node.right)
    }
}

function middleOrder(node){

    if(node.left){
        middleOrder(node.left)
    }
    print(node.val)
    if(node.right){
        middleOrder(node.right)
    }


}

function preOrder1(node){

    var arr = [];
    arr.push(node);

    while(arr.length > 0){

        var n = arr.pop();
        print(n.val);
        if(n.right){
            arr.push(n.right)
        }
        if(n.left){
            arr.push(n.left)
        }
    }

}

function middleOrder1(node){

    var arr = [];
    arr.push(node);
    var n = node;
    while(arr.length > 0){

        while(n.left){
            arr.push(n.left)
            n = n.left;
        }
        print(n);


        if(n.right){
            arr.push(n.right)
            n=n.right
        }

    }

}

function postOrder(node){

    var arr = [], res = [];
    arr.push(node)

    while(arr.length){

        var node = arr.pop();
        res.push(node)

        if(node.left){
            arr.push(node.left)
        }
        if(node.right){
            arr.push(node.right)
        }

    }
    res.reverse();

}


function findLongestString(str){

    let longestArr = [], curArr = [];

    for(let len = 0; len < str.length; len++){
        let c = str.charAt(len);
        if(curArr.indexOf(c) != -1){
            if(longestArr.length >= curArr){

            }
            else{
                longestArr = curArr;
            }
            curArr = [];
            curArr.push(c)
        }
        else{
            curArr.push(c);
        }
    }
    if(longestArr.length < curArr.length ){
        longestArr = curArr;
    }
    return longestArr.join("")

}

findLongestString("abcabcbb")


function combine(arr, index, pre, combineArr){
    if(index == arr.length - 1){
        for(let len = 0; len < arr[index].length; len++){
            combineArr.push(pre + arr[index][len])
        }
    }
    else{
        for(let len = 0; len < arr[index].length; len++){

            combine(arr, index + 1, arr[index][len], combineArr)
        }
    }
}

var maxArea = function(height){

    let maxArea = 0;
    let start = 0, end = height.length - 1;
    while(start < height){

        let h = Math.min(height[start], height[end]);
        let area = h * (end - start);
        if(area > maxArea){
            maxArea = area;
        }

        if(height[start] > height[end]){
            end --;
        }
        else{
            start++;
        }

    }
    return maxArea;

}


var removeKDigits =  function (str, k){
    if(str.length < k) return 0;

    let index = 0;

    for(let len = 0; len < str.length - 1 && index < k; len++){

        let first = parseInt(str.charAt(len));
        let second = parseInt(str.charAt(len + 1));
        if(first > second){
            index ++;
            len--;
            str = str.substring(0, len) + str.substring(len+1)

        }

    }

    return str;

}

function reverse(x){

    var maxVal = Math.pow(2,31) -1, minVal = -1 * Math.pow(2, 31), isPositive = x > 0;

    var num = 0;
    while(x){

        if(isPositive){
            let val = x % 10;
            if(maxVal / 10 < num) return 0;
            num = num * 10 + val;
        }
        else{
            let val = x % 10;
            if(minVal > num) return 0;
            num = num
        }

    }

}

function swapTwoParis(node){

    let pre = null, tail = null;

    if(node && node.next){

    }
    else{
        return node;
    }
    while(node && node.next){

        tail = node.next.next;
        swap(node, node.next);
        if(pre){
            pre.next = node.next;
            node.next = tail
        }
        else{
            node.next = tail;
        }
        pre = node;

    }


}

function swap(node1, node2){

    node2.next = node1.next;

}

function toTree(arr, newArr){

    for(let len = 0; len < arr.length; len++){
        let item = arr[len];
        if(item.parentId == 0){
            let obj = {
                item,
              level:0,
              children:[]
            }

            newArr.push(item);
            arr.splice(0, 1);
            len--
        }
    }

    function run(arr, newArr){

      for(let len = 0; len < arr.length; len++){

        let child = arr[len]

        for(let index = 0; index < newArr.length; index++){
          let parent = newArr[index];
          if(child.parentId = parent.gameId){

            let obj = {
              child,
              level:parent.level + 1,
              children:[]
            }

            parent.children.push(obj);
            arr.splice(0, 1);
            len--;
            break;
          }
          else if(newArr[index].children.length > 0){
              run(arr, newArr[index].children)
          }

        }

      }

    }



}


let pre = "", arr = [];

search("abc", pre,arr)
console.log(arr)

function search(str, pre){

  if(str.length == 1){
    arr.push(pre + str)
  }
  else{

    for(let len = 0; len < str.length; len++){

      search(str.substr(0, len) + str.substr(len + 1), pre + str.charAt(len))

    }

  }

}
