//1.bind方法
function bind() {
    if (!Function.bind) {
        Function.prototype.bind = function () {
            var self = this;
            var context = Array.prototype.shift.call(arguments)
            var args = Array.prototype.slice.call(arguments, 1)
            return function () {
                args.concat(Array.prototype.slice.call(0));
                self.apply(context, args)
            }
        }
    }

}

//2.格式化数字
a.replace(/(?=(\B\d{3})+$)/g, ',')
//"100,000,000"
a.replace(/(?=(\B\d{3})$)/g, ',')
//"100000,000"
a.replace(/(?=(\B\d{3})*$)/g, ',')
//"100,000,000,"
a.replace(/(?=(\B\d{3})+)/g, ',')
//"1,0,0,0,0,0,000"
var reg = /(?=(\B\d{3})+$)/g
//undefined
a.replace(reg, ',')
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
function asyncComponent(Component) {

    class T extends React.Component {

        constructor(props) {
            this.state = {
                comp: undefined
            }
        }

        componentDidMount() {
            this.setState({
                comp: Component
            })
        }

        render() {
            const C = this.state.comp;
            return (
                {
                    C?<C ...props />: null
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

/**
 * 强缓存：强缓存不会发送请求到服务器。 expire：表示缓存的过期时间。 cache-control：max-age判断资源的最大生命周期
 * 协商缓存：1、last-modified(值为最后更新时间)、if-modified-since 通过比较两个时间，判断资源在两次请求期间是否修改
 *           2、e-tag，表示资源位的唯一标识符。 if-none-match 服务器通过比较if-none-match和当前资源的e-tag来判断
 */

/**
 * 浏览器运行机制：
 * 1、构建dom树，解析html文档
 * 2、构建渲染树，解析css文件
 * 3、布局渲染树。计算元素大小
 * 4、绘制渲染树
 */


/**
 * 重绘：当元素大小、位置或颜色等确定后，浏览器便把这些元素按照各自特性绘制一遍，重绘是指一个元素外观的
 *     改变所引起的浏览器行为
 * 重排（回流）：当渲染树一部分因为规模、尺寸、隐藏等改变而需要重新构建，这一过程就称之为回流。每个页面
 *     在第一次加载时，肯定会发生回流。
 * 两者关系：重排浏览器会使渲染树中受影响部分失效，并重新构建树，重建后，浏览器会对失效部分进行重绘。重排
 *     肯定导致重绘，但重绘不一定会重排
 * 优化：1）浏览器会维护一个队列，将所有重排重绘的操作放入这个队列，等队列缓存一部分，才fulush队列
 *       2）设置元素display:none，然后进行布局操作，设置完成后，再将元素显示
 *       3）不使用table布局
 */

function ajax(options) {
    var xhr;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        xhr = new ActiveXObject('Microsoft-xmlHttp')
    }
    var readyState = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                if (options.success && typeof options.success === 'function') {
                    options.success(xhr.response)
                }
            }
            else {
                options.fail && typeof options.fail && options.fail(xhr.response)
            }
        }
    }
    xhr.onreadystate = readyState;
    xhr.open(options.method, url);
    xhr.send(data)
}


/**
 * http和https
 * 以安全为目标的http通道，即在http下加入ssl层
 * https的主要作用是：1）建立一个信息安全通道，保证数据传输的安全性。2）确认网站的真实性。
 * 区别：1）https需要ca申请证书。2）http是明文，https是具有安全ssl加密传输3）端口不同前端80，后者443
 * 步骤：
 * 1，用户请求https连接
 * 2.服务端收到客户端请求后，将网站信息以及公钥传送给客户
 * 3.客户端使用公钥对对称密钥加密
 * 4.服务端用私钥解密会话密钥。
 */


/**
 * oauth2:Authorization code flow，用户授权流程基于重定向跳转。客户端必须能与user-agent交互并接受
 * user-agent路由发送的实际authorization code
 * 1.用户点击第三方账号登陆，请求参数有对应授权类型，客户端标识符，redirect-uri，state随机串
 * 2.授权服务器弹窗提示是否授权第三方应用使用你的账号
 * 3.授权服务器重定向到步骤1中的rediret-uri，并返回authorization code
 * 4.客户端将步骤2中的authorization code，redirect-uri，client-id，client-secret向服务器请求access token
 * 5.服务器验证步骤4，并返回access token
 * 6.客户端通过服务器提供的api，访问用户账户
 */

/**
 *react diff算法
 react组件在渲染之后组成了一个树形结构。在react绘制时，会在内存中对应每个组件建立一个节点，并最终形成一个和
 组件树结构一样的树，在组件发生变化后，react会形成影子树二号。然后对比1号和2号

 虚拟dom分层比较：两棵树只会对同一层次的节点进行比较，忽略dom节点跨层级移动。如果发生跨层级移动，react会
 直接销毁，并重新创建

 1.不同类型元素。react会直接拆掉整个旧的树，并用新的树替代。同时出发componentWillUnmount
 2.相同类型的元素。react仅仅更新属性
 3.相同类型的组件。组件实例保持不变，react更新下面组件的props，下面组件会调用componentWillReceiveProps和
 componentWillUpdate
 */

 /**
  * 替换元素：浏览器根据标签的元素与属性来判断显示的具体元素。<input> <textarea> <img> <select>
  * 非替换元素：html大多数时不可替换。他们将内容直接告诉浏览器，将其显示。
  * 对于替换元素，设置外边距会影响行高，可能会使行高增加或减少。
  * 对于非替换元素。设置margin-top、margin-bottom不影响行高，不会撑开元素。
  */

  /**
   * xmlHttpRequest的withCredential属性是一个boolean类型。它指示是否使用类似cookie、authorization headers
   * 或TLS客户端这类证书来创建一个跨站点访问控制。
   * 如果在发送来自其他域的xmlhttpRequest之前，未设置请求withCredential 为true，那么就不能为它自己的域
   * 设置cookie。而通过设置withCredential为true，获取第三方cookie，将依旧享受同源策略。
   */

   /**
    * js的垃圾回收
    * 1.标记清除。在运行的时候，给存储在内存中的所有变量加标记。去掉环境中的变量，以及被环境中的变量引用的
    * 标记，此时仍被标记的会被视为可以删除的变量。垃圾回收器完成内存清除工作，销毁那些带标记的值，并回收他们
    * 所占用的空间。
    * 2.引用计数。声明了一个变量，并将一个引用类型的值赋值给这个变量。这个引用类型的引用次数就是1.同一个值又被赋值给
    * 另一个变量，这个引用类型的引用次数+1.当包含这个引用类型的变量又被复制给另一个值，那么这个引用类型引用树-1.垃圾
    * 回收下一次运行时，就释放引用次数为0值所占用的内存。
    */

    