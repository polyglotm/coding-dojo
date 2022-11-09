/*
2383-minimum-hours-of-training-to-win-a-competition
leetcode/medium/2383. Minimum Hours of Training to Win a Competition
URL: https://leetcode.com/problems/minimum-hours-of-training-to-win-a-competition/
*/

package main

import (
	"fmt"
	"math"
)

func sum(nums []int) int {
	sum := 0

	for _, num := range nums {
		sum += num
	}

	return sum
}

func minNumberOfHours(initialEnergy int, initialExperience int, energy []int, experience []int) int {
	energySum := sum(energy)
	experienceSum := initialExperience
	correlation := 0

	if (initialEnergy - energySum) <= 0 {
		correlation += int(math.Abs(float64(initialEnergy-energySum))) + 1
	}

	for _, val := range experience {
		if experienceSum <= val {
			correlation += val - experienceSum + 1
			experienceSum += val - experienceSum + 1
		}

		experienceSum += val
	}

	return correlation
}

func main() {
	initialEnergy := 5
	initialExperience := 3
	energy := []int{1, 4, 3, 2}
	experience := []int{2, 6, 3, 1}
	fmt.Println(minNumberOfHours(initialEnergy, initialExperience, energy, experience))
	//Output: 8

	initialEnergy = 2
	initialExperience = 4
	energy = []int{1}
	experience = []int{3}
	fmt.Println(minNumberOfHours(initialEnergy, initialExperience, energy, experience))
	// 0

	initialEnergy = 5
	initialExperience = 3
	energy = []int{1, 4}
	experience = []int{2, 5}
	fmt.Println(minNumberOfHours(initialEnergy, initialExperience, energy, experience))
	//2

	initialEnergy = 1
	initialExperience = 1
	energy = []int{1, 1, 1, 1}
	experience = []int{1, 1, 1, 50}
	fmt.Println(minNumberOfHours(initialEnergy, initialExperience, energy, experience))
	//51
}
