//1.bind方法
function bind(){
    if(!Function.bind){
        Function.prototype.bind = function(){
            var self = this;
            var context = Array.prototype.shift.call(arguments)
            var args = Array.prototype.slice.call(arguments, 1)
            return function(){
                args.concat(Array.prototype.slice.call(0));
                self.apply(context,args)
            }
        }
    }

}

//2.格式化数字
a.replace(/(?=(\B\d{3})+$)/g,',')
//"100,000,000"
a.replace(/(?=(\B\d{3})$)/g,',')
//"100000,000"
a.replace(/(?=(\B\d{3})*$)/g,',')
//"100,000,000,"
a.replace(/(?=(\B\d{3})+)/g,',')
//"1,0,0,0,0,0,000"
var reg = /(?=(\B\d{3})+$)/g
//undefined
a.replace(reg,',')
//"100,000,000"


//3.valueOf方法返回值
//如果对象具有原始值，valueOf默认返回对象的原始值，比如Date对象。如果没有原始值，valueOf将返回对象本身