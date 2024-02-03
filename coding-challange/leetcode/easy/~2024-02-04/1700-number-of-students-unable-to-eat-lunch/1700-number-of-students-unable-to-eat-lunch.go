/*
leetcode/easy/1700. Number of Students Unable to Eat Lunch
1700-number-of-students-unable-to-eat-lunch
uRL: https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/description/
*/

package main

import "fmt"

func countStudents(students []int, sandwiches []int) int {
	remainingCount := len(students)
	loopCount := 0

	for true {
		loopCount++

		if len(students) == 0 {
			break
		}

		if loopCount > remainingCount {
			break
		}

		if students[0] == sandwiches[0] {
			students = students[1:]
			sandwiches = sandwiches[1:]
			loopCount = 0
			remainingCount = len(students)
		} else {
			if len(students) == 1 {
				break
			}
			students = append(students[1:], students[0])
		}
	}

	return len(students)
}

func main() {
	students := []int{1, 1, 0, 0}
	sandwiches := []int{0, 1, 0, 1}
	//Output: 0
	fmt.Println(countStudents(students, sandwiches))

	students = []int{1, 1, 1, 0, 0, 1}
	sandwiches = []int{1, 0, 0, 0, 1, 1}
	//Output: 3
	fmt.Println(countStudents(students, sandwiches))
}
