# leetcode/easy/1543. Fix Product Name Format
# 1543-fix-product-name-format
# URL: https://leetcode.com/problems/fix-product-name-format/description/


# Input:
# Sales table:
# +---------+--------------+------------+
# | sale_id | product_name | sale_date  |
# +---------+--------------+------------+
# | 1       | LCPHONE      | 2000-01-16 |
# | 2       | LCPhone      | 2000-01-17 |
# | 3       | LcPhOnE      | 2000-02-18 |
# | 4       | LCKeyCHAiN   | 2000-02-19 |
# | 5       | LCKeyChain   | 2000-02-28 |
# | 6       | Matryoshka   | 2000-03-31 |
# +---------+--------------+------------+
# Output:
# +--------------+-----------+-------+
# | product_name | sale_date | total |
# +--------------+-----------+-------+
# | lckeychain   | 2000-02   | 2     |
# | lcphone      | 2000-01   | 2     |
# | lcphone      | 2000-02   | 1     |
# | matryoshka   | 2000-03   | 1     |
# +--------------+-----------+-------+

SELECT TRIM(lower(product_name))       AS product_name,
       DATE_FORMAT(sale_date, '%Y-%m') AS sale_date,
       COUNT(product_name)             AS total
FROM Sales
GROUP BY TRIM(lower(product_name)), DATE_FORMAT(sale_date, '%Y-%m')
ORDER BY TRIM(lower(product_name)) ASC, DATE_FORMAT(sale_date, '%Y-%m') ASC;
