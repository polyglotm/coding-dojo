# leetcode/easy/1327. List the Products Ordered in a Period
# 1327-list-the-products-ordered-in-a-period
# URL: https://leetcode.com/problems/list-the-products-ordered-in-a-period/description/

# Input:
# Products table:
# +-------------+-----------------------+------------------+
# | product_id  | product_name          | product_category |
# +-------------+-----------------------+------------------+
# | 1           | Leetcode Solutions    | Book             |
# | 2           | Jewels of Stringology | Book             |
# | 3           | HP                    | Laptop           |
# | 4           | Lenovo                | Laptop           |
# | 5           | Leetcode Kit          | T-shirt          |
# +-------------+-----------------------+------------------+
# Orders table:
# +--------------+--------------+----------+
# | product_id   | order_date   | unit     |
# +--------------+--------------+----------+
# | 1            | 2020-02-05   | 60       |
# | 1            | 2020-02-10   | 70       |
# | 2            | 2020-01-18   | 30       |
# | 2            | 2020-02-11   | 80       |
# | 3            | 2020-02-17   | 2        |
# | 3            | 2020-02-24   | 3        |
# | 4            | 2020-03-01   | 20       |
# | 4            | 2020-03-04   | 30       |
# | 4            | 2020-03-04   | 60       |
# | 5            | 2020-02-25   | 50       |
# | 5            | 2020-02-27   | 50       |
# | 5            | 2020-03-01   | 50       |
# +--------------+--------------+----------+
# Output:
# +--------------------+---------+
# | product_name       | unit    |
# +--------------------+---------+
# | Leetcode Solutions | 130     |
# | Leetcode Kit       | 100     |
# +--------------------+---------+

WITH merged_table AS (SELECT product_id,
                             product_name,
                             product_category,
                             order_date,
                             unit
                      FROM Products
                               JOIN Orders
                                    USING (product_id)),
     febrary_2020 AS (SELECT product_name,
                             SUM(unit) AS unit
                      FROM merged_table
                      WHERE order_date BETWEEN '2020-02-01' AND '2020-02-29'
                      GROUP BY product_name)

SELECT *
FROM febrary_2020
WHERE unit >= 100;
