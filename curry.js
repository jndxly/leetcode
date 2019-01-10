
function add(){

  let _args = Array.prototype.slice(arguments);

  var _add = function(){
    let self = this;


    var _adder = function(){

      _args.push(...arguments);
      return _adder;


    }

    _adder.valueOf = function(){
      _args.reduce(function(a,b){
        return a+b;
      })
    }

    return _adder;

  }

  _add(_args)

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
