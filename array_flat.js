Array.prototype.flat = function(deep = 1) {
    if(typeof deep !== 'number') {
        throw new TypeError('深度参数必须为数字类型')
    }
    if(deep === 0) return this
    let arr1 = this
    return arr1.reduce((acc, val) => {
        console.log(deep)
        if(Array.isArray(val) && deep > 1) {
            console.log(acc)
            return acc.concat(val.flat(--deep))
        } else {
            return acc.concat(val)
        }
    }, []);// [1, 2, 3, 4]
}