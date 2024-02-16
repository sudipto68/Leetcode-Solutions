function sortList(nums){
  
  var len = nums.length;
  for(i = 0 ; i<len; i++){
    for(j = i+1; j<=len; j++){
      if(nums[i]>nums[j]){
        temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
      }
    }
  }
  return nums;
}

console.log(sortList([10,1,5,2,9,-1]));
//sort list items in accending order
