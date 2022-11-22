/*
506-relative-ranks
leetcode/easy/506. Relative Ranks
URL: https://leetcode.com/problems/relative-ranks/

NOTE: Explanation
*/

package main

import (
	"fmt"
	"sort"
)

func indexOf(nums []int, target int) int {
	for i := 0; i < len(nums); i++ {
		if nums[i] == target {
			return i
		}
	}
	return -1
}

func findRelativeRanks(score []int) []string {
	copiedScore := append([]int{}, score...)
	sort.Ints(copiedScore)

	result := make([]string, len(score))

	for i := 0; i < len(score); i++ {
		index := indexOf(copiedScore, score[i])
		if index == len(score)-1 {
			result[i] = "Gold Medal"
		} else if index == len(score)-2 {
			result[i] = "Silver Medal"
		} else if index == len(score)-3 {
			result[i] = "Bronze Medal"
		} else {
			result[i] = fmt.Sprintf("%d", len(score)-index)
		}
	}

	return result
}

func main() {
	score := []int{5, 4, 3, 2, 1}
	fmt.Println(findRelativeRanks(score))
}
