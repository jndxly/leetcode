/*
1. new 的实现原理是什么？

创建一个空对象，构造函数中的 this 指向这个空对象。
这个新对象被执行 [[原型]] 连接。

执行构造函数方法，属性和方法被添加到 this 引用的对象中。

如果构造函数中没有返回其它对象，那么返回 this，即创建的这个的新对象，否则，返回构造函数中返回的对象。
 */
function _new(){
    let larget = {};
    let [constructor, ...args] = [...arguments];
    target.__proto__  = constructor.prototype;
    let result = constructor.apply(target, args);
    if(result && typeof result == 'object' || typeof result == 'function'){
        return result;
    }
    return target;
}
/*
2.深度拷贝
 */
function clone(item){
    let clone ;
    if(item == null || item ==undefined) return item;
    let type = Object.prototype.toString.call(item);
    if(type == '[object Date]'){
        return new Date(item.getTime());
    }
    if(type == '[object Array]'){
        let i = item.length ;
        clone = [];
        while(i --){
            clone[i] = this.clone(item[i])
        }
    }
    if(type == '[object Object]'){
        clone = {};
        for(let key  in item){
            clone[key] = this.clone(item[key]);
        }
    }
    return clone || item;
}
/*
如何让 (a == 1 && a == 2 && a == 3) 的值为 true？
对象的Symbol.toPrimitive属性。指向一个方法。该对象被转化为原始类型的值时，会调用这个办法，返回该对象对应的原始类型值。
Symbol.toPrimitive被调用时,会接受一个字符串参数，表示当前运算的模式，一个有三种模式。

Number:该场合需要转成数值
String:该场合需要转成字符串
Default:该场合可以转成数值，也可以转成字符串。
 */
let a = {
    [Symbol.toPrimitive]: (function(hint) {
        let i = 1;
        // 闭包的特性之一：i 不会被回收
        return function() {
            return i++;
        }
    })()
}

let obj = {
    data: [ 'hello', 'world' ],
    [Symbol.iterator]() {
        const self = this;
        let index = 0;
        return {
            next() {
                if (index < self.data.length) {
                    return {
                        value: self.data[index++],
                        done: false
                    };
                } else {
                    return { value: undefined, done: true };
                }
            }
        };
    }
};
