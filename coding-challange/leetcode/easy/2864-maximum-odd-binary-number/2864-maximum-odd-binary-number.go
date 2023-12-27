/*
leetcode/easy/2864. Maximum Odd Binary Number
2864-maximum-odd-binary-number
uRL: https://leetcode.com/problems/maximum-odd-binary-number/description/
*/

package main

import (
	"fmt"
	"sort"
	"strings"
)

func reverse(strArr []string) []string {
	var result []string
	for i := len(strArr) - 1; i >= 0; i-- {
		result = append(result, strArr[i])
	}
	return result
}
func maximumOddBinaryNumber(s string) string {
	chunks := strings.Split(s, "")
	sort.Strings(chunks)
	chunks = reverse(chunks)

	return strings.Join(append(chunks[1:], chunks[0]), "")
}

func main() {
	s := "010"
	fmt.Println(maximumOddBinaryNumber(s))
	//Output: "001"

	s = "0101"
	fmt.Println(maximumOddBinaryNumber(s))
	//Output: "1001"
}
