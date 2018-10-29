/**
 * 将数据格式化成tree，然后按顺序输出,
 * parentId为0表示顶级
 * 否则表示其父亲的gameId
 *
 * {
  "data":[{
    "name":"顶级新闻",
    "gameId":1,
    "parentId":0
  },{
    "name":"新闻官网",
    "gameId":2,
    "parentId":1
  },{
    "name":"新闻",
    "gameId":5,
    "parentId":2
  },{
    "name":"游戏",
    "gameId":3,
    "parentId":0
  },{
    "name":"游戏官网",
    "gameId":4,
    "parentId":3
  }]
}
将输出为{
data:[{
"name":"顶级新闻",
"gameId":1,
"parentId":0
},{
"name":"新闻官网",
    "gameId":2,
    "parentId":1
},{
"name":"新闻",
    "gameId":5,
    "parentId":2
},{
"name":"游戏",
    "gameId":3,
    "parentId":0
},{
 "name":"游戏官网",
    "gameId":4,
    "parentId":3
}]


 * @param arr
 * @returns {Array}
 */
function toTreeData(arr){
    let resData = arr;
    let tree = [];
    let level = 0;
    for(let i = 0; i < resData.length; i++){
        if(resData[i].parentId == 0){
            let obj = {
                ...resData[i],
                level : 0,
                children : []
            };
            tree.push(obj);
            resData.splice(i, 1);
            i--;
        }
    }
    run(tree, level + 1);
    function run(chiArr, level){
        if(resData.length > 0){
            for(let i = 0; i < chiArr.length; i++){
                for(let j = 0; j < resData.length ; j++){
                    if(chiArr[i].gameId === resData[j].parentId){
                        let obj = {
                            ...resData[j],
                            level : level ,
                            children:[]
                        };
                        chiArr[i].children.push(obj);
                        resData.splice(j, 1);
                        j--;
                    }
                }

                if(chiArr[i].children.length > 0){
                    run(chiArr[i].children, level + 1);
                }
            }


        }
    }
    return tree;
}

function tree2Arr(tree, arr){
    for(let len = 0; len < tree.length; len++){
        let children = tree[len].children;
        delete tree[len].children;
        arr.push(tree[len]);
        if(children.length > 0){
            tree2Arr(children, arr);
        }
    }
}

function processClassifyResult(data){
    let arr = data && data.data;

    if(arr.length > 0){

        let tree = toTreeData(arr), newArr = [];
        tree2Arr(tree, newArr);
        return {
            data:newArr
        }
    }
    return data;
}