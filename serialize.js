//二叉树的序列化和反序列化
//先序和层序
const q = []
function serialize(root){

    if(!root){
        q.push(null)
        return;
    }
    q.push(root.val)
    serialize(root.left);
    serialize(root.right)

}

function deSerialize(q){

    const val = q.shift()
    if(!val){
        return null
    }
    head = new Node(val)
    
    head.left = deSerialize(q)
    head.right = deSerialize(q)
    return head;

}

function serialize1(r){

    if(!r){
        q.push(r)
        result.push(r)
    }
    while(result.length){
        const node = result.shift();
        if(node.left){
            q.push(node.left)
            result.push(node.left)
        }
        else{
            q.push(null)
        }
        if(node.right){
            q.push(node.right)
            result.push(node.right)
        }
        else{
            q.push(null)
        }

    }

}
function deSerilaize(q){

    if(!q.length) return null
    const head = new Node(q.shift().val)
    const arr = [head]
    while(arr.length){
        const node = arr.shift()
        node.left = q.shift();
        if(node.left){
            arr.push(node.left)
        }
        node.right = q.shift();
        if(node.right){
            arr.push(node.right)
        }
        

    }
}