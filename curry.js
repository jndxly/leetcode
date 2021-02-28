
function add(){

  let _args = Array.prototype.slice(arguments);

  var _add = function(){
    let self = this;


    var _adder = function(){

      _args.push(...arguments);
      return _adder;


    }

    _adder.valueOf = function(){
     return  _args.reduce(function(a,b){
        return a+b;
      })
    }

    return _adder;

  }

  _add()

}

function curry(func){

  let _args = Array.prototype.slice(arguments, 1);

  var _func =  function(){

    if(argument.length == 0){
      return _args.reduce(function(a,b){
        return a+b;
      })
    }
    else{
      _args.push(...arguments);
      return _func;
    }

  }
  return _func;

}

/*
* js 类型转换
* 对象 ----》字符串------》数值 《--
* */

/*window.name
* 在该窗口载入的所有url都共享
* */


/*
前端优化：
1.减少http请求，合并文件。 2.csssprite。 3.开启压缩。 4.减少页面重绘。 5.开启预加载。 6。CDN加速 7.缓存
 */