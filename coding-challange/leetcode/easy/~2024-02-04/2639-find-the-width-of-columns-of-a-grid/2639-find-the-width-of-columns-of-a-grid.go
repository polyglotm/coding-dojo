/*
leetcode/easy/2639. Find the Width of Columns of a Grid
2639-find-the-width-of-columns-of-a-grid
uRL: https://leetcode.com/problems/find-the-width-of-columns-of-a-grid/description/
*/

package main

import (
	"fmt"
	"strconv"
)

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func findColumnWidth(grid [][]int) []int {
	result := make([]int, len(grid[0]))

	for rowIndex := 0; rowIndex < len(grid); rowIndex++ {
		for columnIndex := 0; columnIndex < len(grid[rowIndex]); columnIndex++ {
			result[columnIndex] = max(
				result[columnIndex],
				len(strconv.Itoa(grid[rowIndex][columnIndex])),
			)
		}
	}

	return result
}

func main() {
	grid := [][]int{{1}, {22}, {333}}
	//Output: [3]
	fmt.Println(findColumnWidth(grid))

	grid = [][]int{{-15, 1, 3}, {15, 7, 12}, {5, 6, -2}}
	//Output: [3,1,2]
	fmt.Println(findColumnWidth(grid))
}
