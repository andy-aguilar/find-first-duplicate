function findFirstDuplicate(arr) {
  let memo = {}
  for(let i = 0; i < arr.length; i++){
    if (memo[arr[i]]){
      return arr[i]
    } else {
      memo[arr[i]] = true
    }
  }
  return -1
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

//1. create an object
//2. iterate through the array adding keys for each array value
//3. if the key already exists, return the value
//4. after the loop if no return, return -1

// Please add your pseudocode to this file
// And a written explanation of your solution
