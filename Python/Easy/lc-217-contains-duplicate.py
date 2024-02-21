def containsDuplicate(nums):
    if len(nums) != len(set(nums)):
        return True
    else:
        return False

print(containsDuplicate([1,2,3,4]))