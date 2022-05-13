var p1 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve('resolve')
    }, 1000);
})

var p2 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        reject('reject')
    }, 200);
})

Promise.race([p1, p2]).then(val=>{console.log(val)}, val=>{console.log(val)})

const address = [
    {
      addressId: 1,
      addressName: '北京市',
      subDistrict: [
        {
          addressId: 11,
          addressName: '海淀区',
          subDistrict: [
            {
              addressId: 111,
              addressName: '中关村',
            },
          ],
        },
        {
          addressId: 12,
          addressName: '朝阳区',
        },
      ],
    },
    {
      addressId: 2,
      addressName: '河北省',
    },
  ];
// function convert(arr){
//     if(!arr || !arr.length) return arr
//     for(let i = 0; i < arr.length; i++){
//         run(arr[i])
//     }
//     return arr
    
// }
// function run(item){
//     const keys = Object.keys(item)
//     for(let i = 0; i < keys.length; i++){
//         const key = keys[i]
//         const newKey = convertKey(key)
//         item[newKey] = item[key]
//         delete item[key]
//         if(item.sub_district){
//             convert(item.sub_district)
//         }
//     }
// }
// function convertKey(str){
//     let newStr = ''
//     for(let i = 0; i < str.length; i++){
//         if(str[i].toLowerCase() === str[i]){
//             newStr += str[i]
//         }
//         else{
//             newStr += '_' + str[i].toLowerCase()
//         }
//     }
//     return newStr
// }
const result = convert(address)
console.log(result)
// 对象将key转大写字母换成_小写
function convert(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      let obj = arr[i];
      let newObj = {};
      for (const key in obj) {
        const newKey = key.replace(/([A-Z])/g, '_$1').toLowerCase();
        if (Array.isArray(obj[key])) {
          newObj[newKey] = convert(obj[key]);
        } else {
          newObj[newKey] = obj[key];
        }
      }
      newArr.push(newObj);
    }
    return newArr;
  }
