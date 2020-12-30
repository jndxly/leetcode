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
/**
 * valueOf 偏向运算，toString偏向显示
 * 1、在进行强转字符串类型时，将优先调用toString方法。强转为数字时，优先调用valueOf
 * 2、有运算符情况下，valueOf优先级高于toString
 */

 
 /**
  * 
  * @param {*} Component react component
  */
 function asyncComponent(Component){

    class T extends React.Component{

        constructor(props){
            this.state = {
                comp : undefined
            }
        }

        componentDidMount(){
            this.setState({
                comp:Component
            })
        }

        render(){
            const C = this.state.comp;
            return (
                {
                    C?<C ...props/>:null
                }
            )
        }

    }
    return T;
 }

 /**
  * CORS的基本思想是，使用自定义的http头部，允许浏览器和服务器相互了解，从而决定请求与响应成功与否
  * 同源策略：协议、端口、域名
  */

  /**
   * js堆栈
   * 1、基本类型：undefined、null、boolean、number、string
   *    这些类型在内存中分别占据固定大小的空间，他们的值保存在栈中，按照值来访问
   * 2、引用类型
   *    值大小不固定，栈内存中存放地址指向堆内存，按照引用访问，栈内存中存放的只是该对象的访问地址，
   *    在堆内存中为这个值分配空间。
   * 基本类型在当前执行环境结束时销毁，而引用类型不会随着执行环境结束而销毁，而只有当引用的变量不存在时，
   * 这个对象才会被垃圾回收。
   */