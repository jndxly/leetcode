/**
 * 黄维筱对所有人说： 11:59 AM
// 来简单实现一个响应式函数？  能对一个对象内的所有key添加响应式特征？ 要求最终的输出如下方代码所示
const reactive = (obj) => {

}
const data = {
		a: 1,
		b: 2,
		c: {
			c1: {
					af: 999
			},
			c2: 4
		}
}
reactive(data)
data.a = 5 // SET key=a val=5
data.b = 7 // SET key=b val=7
data.c.c2 = 4 //
data.c.c1.af = 121 //SET key=af val=121
 */

const reactive = (obj) => {

    const newObj = new Proxy(obj, {
        set(target, key, value, receiver){
            if(Reflect.has(target, key) && Reflect.get(target, key) === value){
               return
           }
           else {

               Reflect.set(target, key, value)
               console.log(`SET key=${key} val=${value}`)
           }
       },
       get(target, key, receiver){
           if(!Reflect.has(target, key)){
               Reflect.set(target, key, reactive({}))
            //    console.log(`SET key=${key} val=${value}`)
           }
           const value = Reflect.get(target, key)
           if(typeof value !== 'object'){
               return value
           }
           return reactive(value)
       }
        
    })
    return newObj
} 
const data = {
    a: 1,
    b: 2,
    c: {
        c1: {
                af: 999
        },
        c2: 4
    }
}
const newObj = reactive(data)
newObj.a = 5
newObj.b = 7 // SET key=b val=7
newObj.c.c2 = 4 //
newObj.c.c1.af = 121 //SET key=af val=121