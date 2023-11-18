# leetcode/medium/1285. Find the Start and End Number of Continuous Ranges
# 1285-find-the-start-and-end-number-of-continuous-ranges
# URL: https://leetcode.com/problems/find-the-start-and-end-number-of-continuous-ranges/description/

WITH RowAndLogIdDifference AS (SELECT log_id,
                                      log_id - ROW_NUMBER() OVER (ORDER BY log_id) AS row_id_difference
                               FROM Logs),
     GroupedLogs AS (SELECT MIN(log_id) AS start_id,
                            MAX(log_id) AS end_id
                     FROM RowAndLogIdDifference
                     GROUP BY row_id_difference)
SELECT start_id,
       end_id
FROM GroupedLogs
ORDER BY start_id;
