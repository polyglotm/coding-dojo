# 2084-drop-type-1-orders-for-customers-with-type-0-orders
# leetcode/medium/2084. Drop Type 1 Orders for Customers With Type 0 Orders
# URL: https://leetcode.com/problems/drop-type-1-orders-for-customers-with-type-0-orders/
#
# Input:
# Orders table:
# +----------+-------------+------------+
# | order_id | customer_id | order_type |
# +----------+-------------+------------+
# | 1        | 1           | 0          |
# | 2        | 1           | 0          |
# | 11       | 2           | 0          |
# | 12       | 2           | 1          |
# | 21       | 3           | 1          |
# | 22       | 3           | 0          |
# | 31       | 4           | 1          |
# | 32       | 4           | 1          |
# +----------+-------------+------------+
# Output:
# +----------+-------------+------------+
# | order_id | customer_id | order_type |
# +----------+-------------+------------+
# | 31       | 4           | 1          |
# | 32       | 4           | 1          |
# | 1        | 1           | 0          |
# | 2        | 1           | 0          |
# | 11       | 2           | 0          |
# | 22       | 3           | 0          |
# +----------+-------------+------------+

SELECT *
FROM (SELECT *
      FROM Orders
      WHERE order_type = 0) AS A
UNION
SELECT *
FROM Orders
WHERE order_type = 1
  AND customer_id NOT IN (SELECT customer_id
                          FROM Orders
                          WHERE order_type = 0)
