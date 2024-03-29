# leetcode/easy/2687. Bikes Last Time Used
# 2687-bikes-last-time-used
# URL: https://leetcode.com/problems/bikes-last-time-used/description/

# Input:
# Bikes table:
# +---------+-------------+---------------------+---------------------+
# | ride_id | bike_number | start_time          | end_time            |
# +---------+-------------+---------------------+---------------------+
# | 1       | W00576      | 2012-03-25 11:30:00 | 2012-03-25 12:40:00 |
# | 2       | W00300      | 2012-03-25 10:30:00 | 2012-03-25 10:50:00 |
# | 3       | W00455      | 2012-03-26 14:30:00 | 2012-03-26 17:40:00 |
# | 4       | W00455      | 2012-03-25 12:30:00 | 2012-03-25 13:40:00 |
# | 5       | W00576      | 2012-03-25 08:10:00 | 2012-03-25 09:10:00 |
# | 6       | W00576      | 2012-03-28 02:30:00 | 2012-03-28 02:50:00 |
# +---------+-------------+---------------------+---------------------+
#
# Output:
# +-------------+---------------------+
# | bike_number | end_time            |
# +-------------+---------------------+
# | W00576      | 2012-03-28 02:50:00 |
# | W00455      | 2012-03-26 17:40:00 |
# | W00300      | 2012-03-25 10:50:00 |
# +-------------+---------------------+

SELECT bike_number, MAX(end_time) AS end_time
FROM Bikes
GROUP BY bike_number
ORDER BY end_time ASC
