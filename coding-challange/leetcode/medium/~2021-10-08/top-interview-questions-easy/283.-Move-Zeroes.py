# TODO: https://leetcode.com/problems/move-zeroes/


class Solution(object):
    def moveZeroes(self, nums):
        nums[:] = list(filter((0).__ne__, nums)) + [0 for _ in range(nums.count(0))]

nums = [0, 1, 0, 3, 12]
Solution().moveZeroes(nums)
print(nums)

# Input: [0,1,0,3,12]
# Output: [1,3,12,0,0]
