'use strict'; 

function bubbleSort (array){
  for (let i = 0; i < array.length; i++){
    for (let j = 0; j <array.length; j++){
      if(!inOrder(array, j) ) swap(array, j);

    }
  }
  

  return array
}

function inOrder(array, index){ //pure function 
  if (index === array.length - 1 ) return true;
  return array[index] < array[index + 1];
}

function swap(array, index){ //side effects, modify array
  let oldLeftValue = array[index] //grab reference at array value at index 
  array[index] = array[index + 1]
  array[index + 1] = oldLeftValue;
}



