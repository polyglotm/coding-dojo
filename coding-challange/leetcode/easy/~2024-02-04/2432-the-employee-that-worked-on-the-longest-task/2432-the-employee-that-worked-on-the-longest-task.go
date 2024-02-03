/*
2432-the-employee-that-worked-on-the-longest-task
leetcode/easy/2432. The Employee That Worked on the Longest Task
URL: https://leetcode.com/problems/the-employee-that-worked-on-the-longest-task/
*/

package main

import "fmt"

func hardestWorker(n int, logs [][]int) int {
	prevEndTime := 0
	maxId := 0
	maxTime := 0

	for i := 0; i < len(logs); i++ {
		id := logs[i][0]
		time := logs[i][1]

		if time-prevEndTime > maxTime {
			maxTime = time - prevEndTime
			maxId = id
		} else if time-prevEndTime == maxTime {
			if id < maxId {
				maxId = id
			}
		}

		prevEndTime = time
	}

	return maxId
}

func main() {
	n := 10
	logs := [][]int{{0, 3}, {2, 5}, {0, 9}, {1, 15}}
	//Output: 1
	fmt.Println(hardestWorker(n, logs))

	n = 26
	logs = [][]int{{1, 1}, {3, 7}, {2, 12}, {7, 17}}
	fmt.Println(hardestWorker(n, logs))
	//Output: 3

	n = 2
	logs = [][]int{{0, 10}, {1, 20}}
	fmt.Println(hardestWorker(n, logs))
	//Output: 0
}
