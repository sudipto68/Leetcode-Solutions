//Brute force solution
function twoSum(nums, target) {
  var l = nums.length;
  for (i = 0; i < l - 1; i++) {
    for (j = i + 1; j <= l; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}

//optimize solution using hashmap/object

 hashmap = {}
    for(let i =0; i<list.length; i++){
        n = list[i]
        rem = target - n;
        
        if(hashmap[rem] !== undefined){
            return [hashmap[rem], i]
        }
        else {
            hashmap[n] = i
        }
    }

console.log(twoSum([3, 7, 2, 2], 9));
