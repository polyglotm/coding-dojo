/*
645-set-mismatch
leetcode/easy/645. Set Mismatch
URL: https://leetcode.com/problems/set-mismatch/

NOTE: Explanation
*/

package main

import "fmt"

func findErrorNums(nums []int) []int {
	numMap := make(map[int]int)
	targetNum := 0

	for i := 0; i < len(nums); i++ {
		numMap[nums[i]]++

		if numMap[nums[i]] == 2 {
			targetNum = nums[i]
		}
	}

	for i := 0; i < len(nums); i++ {
		if _, ok := numMap[i+1]; !ok {
			return []int{targetNum, i + 1}
		}
	}

	return []int{}
}

func main() {
	nums := []int{1, 2, 2, 4}
	fmt.Println(findErrorNums(nums))
	//Output: [2,3]
	nums = []int{1, 1}
	fmt.Println(findErrorNums(nums))
	//Output: [1,2]
	nums = []int{2, 2}
	fmt.Println(findErrorNums(nums))
}

