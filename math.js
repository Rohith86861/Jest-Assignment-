function sum(val1,val2){
    var result = val1 + val2;
    return result;
  }
  
  function multiply(val1,val2){
    var result = val1 * val2;
    return result;
  }
  
  function division(val1,val2){
    var result = val1 / val2;
    return result;
  }
  
  function maxOf2(val1, val2){
    var max = 0;
    if(val1>val2){
      max = val1;
    }
    else{
      max = val2;
    }
  
    return max;
  }
  
  function maxOf3(val1, val2, val3){
    var max = 0;
    if(val1>val2 && val1>val3){
      max = val1;
    }
    else if(val3>val2 && val3>val1){
      max = val3;
    }
    else{
      max = max = val2;
    }
  
    return max;
  }
  
  function factorial(val){
    var res = 1;
    for(var i=2;i<=val;i++){
      res = res*i;
    }
    return res;
  }
  
  function evenOrOdd(val){
    var bRes = false;
    if(val%2 == 0){
      bRes = true;
    }
  
    return bRes;
  }
  
  function largestInArray(array){
    var max = 0;
    for(var i=0;i<array.length;i++){
      if(max<array[i]){
        max = array[i];
      }
    }
    return max;
  }
  
  function linearSearch(array, val){
    var bFlag = false;
    for(var i=0;i<array.length;i++){
      if(array[i] == val){
        bFlag = true;
      }
    }
  
    return bFlag;
  }
  
  module.exports = {sum:sum, multiply:multiply, division:division, maxOf2:maxOf2, maxOf3:maxOf3, factorial:factorial, evenOrOdd:evenOrOdd, largestInArray:largestInArray, linearSearch:linearSearch};