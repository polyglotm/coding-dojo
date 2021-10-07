"""
1476-subrectangle-queries 
leetcode/medium/1476. Subrectangle Queries
URL: https://leetcode.com/problems/subrectangle-queries/
"""

from typing import List


class SubrectangleQueries:

    def __init__(self, rectangle: List[List[int]]):
        self.rectangle = rectangle

    def updateSubrectangle(self, row1: int, col1: int, row2: int, col2: int, newValue: int) -> None:
        replace_range = col2 + 1 - col1

        for i in range(row1, row2 + 1):
            self.rectangle[i][col1:col2 + 1] = [newValue] * replace_range

    def getValue(self, row: int, col: int) -> int:
        return self.rectangle[row][col]


# Your SubrectangleQueries object will be instantiated and called as such:
# obj = SubrectangleQueries(rectangle)
# obj.updateSubrectangle(row1,col1,row2,col2,newValue)
# param_2 = obj.getValue(row,col)

def test():
    subrectangleQueries = SubrectangleQueries([[1, 2, 1], [4, 3, 4], [3, 2, 1], [1, 1, 1]])
    assert subrectangleQueries.getValue(0, 2) == 1

    subrectangleQueries.updateSubrectangle(0, 0, 3, 2, 5)
    assert subrectangleQueries.getValue(0, 2) == 5
    assert subrectangleQueries.getValue(3, 1) == 5

    subrectangleQueries.updateSubrectangle(3, 0, 3, 2, 10)
    assert subrectangleQueries.getValue(3, 1) == 10
    assert subrectangleQueries.getValue(0, 2) == 5
