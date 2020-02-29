
exports.min = function min (array) {
  if(array === undefined) return 0;
  if(array.length == 0) return 0;  

 
  var minElement = array[0];
  for(let i = 0; i<array.length; i++){
    if(minElement>array[i]){
      minElement= array[i];
    }
  }
  return minElement;
}

exports.max = function max (array) {
  if(array===undefined)return 0;
  if(array.length ==0) return 0;

  var maxElement = array[0];
  for(let i = 0; i<array.length; i++){
    if(maxElement<array[i]){
      maxElement= array[i];
    }
  }
  return maxElement;
}

exports.avg = function avg (array) {
  if(array===undefined)return 0;
  if(array.length ==0) return 0;
  var sum = 0;
  for(let i = 0; i<array.length; i++){
    sum+=array[i];
  }
  return sum/array.length;
}
