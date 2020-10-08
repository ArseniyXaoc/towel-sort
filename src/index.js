
// You should implement your task here.

module.exports = 
function towelSort(matrix) {
  let equal = 0;
  let outputs = [];
  if(matrix == undefined) return [];
  for (item of matrix) {
    equal++;
    if(equal%2 ==0) item.reverse();
    outputs = outputs.concat(item)    
  }
  console.log(outputs);
  return outputs;
}
