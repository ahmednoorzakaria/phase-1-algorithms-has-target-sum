function hasTargetSum(array, target) {
  // Write your algorithm here
  let ans = [];
  for(let i=0;i<array.length;i++){
    for(let j=i+1;j<array.length;j++){
      if((array[i]+array[j])===target){
        return true;
      }
      
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  time complexity of the hasTargetSum function is O(n^2).
*/

/* 
  Add your pseudocode here
  create new array
  iterate over the array twice to check if the of two numbers === target
  if it equals return true
  else return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
