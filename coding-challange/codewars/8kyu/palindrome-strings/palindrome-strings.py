"""
palindrome-strings
codewars/8kyu/Palindrome Strings
Difficulty: 8kyu
URL: https://www.codewars.com/kata/57a5015d72292ddeb8000b31/
"""


def is_palindrome(string):
    return str(string) == str(string)[::-1]


def test_is_palindrome():
    assert is_palindrome("anna") == True
    assert is_palindrome("walter") == False
    assert is_palindrome(12321) == True
    assert is_palindrome(123456) == False
