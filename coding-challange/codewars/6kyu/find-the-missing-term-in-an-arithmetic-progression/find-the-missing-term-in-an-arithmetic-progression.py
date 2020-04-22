# find-the-missing-term-in-an-arithmetic-progression
# https://www.codewars.com/kata/52de553ebb55d1fca3000371/

from unittest import TestCase


def find_missing(sequence):
    [a, b] = [sequence[1] - sequence[0], sequence[2] - sequence[1]]
    rule = a if abs(a) < abs(b) else b

    for i in range(len(sequence) - 1):
        if sequence[i] + rule != sequence[i + 1]:
            return sequence[i] + rule


TestCase().assertEqual(find_missing([1, 2, 3, 4, 6, 7, 8, 9]), 5)
TestCase().assertEqual(find_missing([1, 3, 4, 5, 6, 7, 8, 9]), 2)
