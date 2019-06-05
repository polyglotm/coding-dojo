## [Original contents links](https://www.codewars.com/kata/training-js-number-27-methods-of-arrayobject-filter/train/javascript)


Coding in function ```countGrade```. function accept 1 parameters ```scores```, it's a number array. Your task is to count the grade distribution of the scores, to return an object like this:
```javascript
{S:888, A:888, B:888, C:888, D:888, X:888}
```
Grading rules:
```
Grade S: Full marks(score=100)
Grade A: score<100 and score>=90
Grade B: score<90 and score>=80
Grade C: score<80 and score>=60
Grade D: score<60 and score>=0
Grade X: score=-1(The cheating guy gets a score like that)
```

Some example:
```
countGrade([50,60,70,80,90,100]) should return {S:1, A:1, B:1, C:2, D:1, X:0}
countGrade([65,75,,85,85,95,100,100]) should return {S:2, A:1, B:2, C:2, D:0, X:0}
countGrade([-1,-1,-1,-1,-1,-1]) should return {S:0, A:0, B:0, C:0, D:0, X:6}
```
