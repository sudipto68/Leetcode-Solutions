nums = [1, 2, 3, 4, 7]
target = 10
def twoSum(list, target):
  # brute force solution
  # for i in range(len(nums)):
  #   for j in range(i+1, len(nums)):
  #     if nums[i] + nums[j] == target:
  #       return [i, j]
  
  #optimize solution using hashmap
  hash_map = dict()
  for index, value in enumerate(list):
    rem = target - value
    if rem in hash_map:
      return [hash_map[rem], index]
    hash_map[value] = index

print(twoSum(nums, target))