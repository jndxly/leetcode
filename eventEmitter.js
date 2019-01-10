function EventEmitter(){

  this._listeners = {};





  return EventEmitter;

}

EventEmitter.prototype.on = function(eventName, func){

  if(this._listeners[eventName] == undefined){
    this._listeners[eventName] = [];
  }
  this._listeners[eventName].push(func)

}

EventEmitter.prototype.off = function(eventName, func){

  let handlers = this._listeners[eventName];
  if(handlers && handlers.length > 0){

    for(let len = 0; len < handlers.length; len++){
      if(handlers[len] === func){
        handlers.splice(len, 1);
      }
    }

  }

}

EventEmitter.prototype.emit = function(eventName){

  let handers = this._listeners[eventName];
  if(handers && handers.length > 0){

    for(let len  = 0; len < handers.length; len++){
      handers[len].apply(null, arguments.slice(1))
    }

  }

}