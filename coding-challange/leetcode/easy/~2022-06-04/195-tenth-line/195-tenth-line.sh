# 195-tenth-line
# leetcode/eash/195. Tenth Line
# URL: https://leetcode.com/problems/tenth-line/

awk 'NR==10' file.txt



# Best Practices
# https://leetcode.com/problems/tenth-line/discuss/55544/Share-four-different-solutions

# Solution 1
cnt=0
while read line && [ $cnt -le 10 ]; do
  let 'cnt = cnt + 1'
  if [ $cnt -eq 10 ]; then
    echo $line
    exit 0
  fi
done < file.txt

# Solution 2
awk 'FNR == 10 {print }'  file.txt
# OR
awk 'NR == 10' file.txt

# Solution 3
sed -n 10p file.txt

# Solution 4
tail -n+10 file.txt|head -1
