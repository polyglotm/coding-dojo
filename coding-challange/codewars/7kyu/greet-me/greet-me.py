"""
greet-me
codewars/7kyu/Greet Me
Difficulty: 7kyu
URL: https://www.codewars.com/kata/535474308bb336c9980006f2/
"""


def greet(name):
    return f'Hello {name.capitalize()}!'


def test_greet():
    assert greet('riley') == 'Hello Riley!'
    assert greet('molly') == "Hello Molly!"
    assert greet('BILLY') == "Hello Billy!"