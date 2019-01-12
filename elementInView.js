function getElementOffset(ele){

  var top = 0, left = 0;
  while(ele){

    top += ele.offsetTop;
    left += ele.offsetLeft;
    ele = ele.offsetParent;

  }



  return {
    left:left,
    top:top
  }

}

let obj = getElementOffset(ele);
if(obj.top + ele.clientHeight > window.pageYOffset
  && window.pageYOffset + window.innerHeight > obj.top
  && obj.left + ele.clientWidth > window.pageXOffset
  && window.pageXOffset + window.innerWidth > obj.left
){

}

let eleRect = ele.getBoundingClientRect();
if(eleRect.top <= window.innerHeight && eleRect.bottom >= 0 && eleRect.left <= window.innerWidth && eleRect.right >= 0)