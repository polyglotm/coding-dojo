# """
# 1393-capital-gain-loss
# leetcode/medium/1393. Capital Gain/Loss
# Difficulty: easy
# URL: https://leetcode.com/problems/capital-gainloss/
# """

-- +---------------+---------+
-- | Column Name   | Type    |
-- +---------------+---------+
-- | stock_name    | varchar |
-- | operation     | enum    |
-- | operation_day | int     |
-- | price         | int     |
-- +---------------+---------+
-- Input:
-- Stocks table:
-- +---------------+-----------+---------------+--------+
-- | stock_name    | operation | operation_day | price  |
-- +---------------+-----------+---------------+--------+
-- | Leetcode      | Buy       | 1             | 1000   |
-- | Corona Masks  | Buy       | 2             | 10     |
-- | Leetcode      | Sell      | 5             | 9000   |
-- | Handbags      | Buy       | 17            | 30000  |
-- | Corona Masks  | Sell      | 3             | 1010   |
-- | Corona Masks  | Buy       | 4             | 1000   |
-- | Corona Masks  | Sell      | 5             | 500    |
-- | Corona Masks  | Buy       | 6             | 1000   |
-- | Handbags      | Sell      | 29            | 7000   |
-- | Corona Masks  | Sell      | 10            | 10000  |
-- +---------------+-----------+---------------+--------+
-- Output:
-- +---------------+-------------------+
-- | stock_name    | capital_gain_loss |
-- +---------------+-------------------+
-- | Corona Masks  | 9500              |
-- | Leetcode      | 8000              |
-- | Handbags      | -23000            |
-- +---------------+-------------------+

###############################################################################
# NOTE:
#  inner join solution is faster than BestPractice.
#  why?
###############################################################################


###############################################################################
# inner join solution
###############################################################################
SELECT a.stock_name,
       a.sell - b.buy AS capital_gain_loss
FROM (SELECT stock_name,
             SUM(price) AS sell
      FROM Stocks
      WHERE operation = 'Sell'
      GROUP BY stock_name) AS a
         INNER JOIN (SELECT stock_name,
                            SUM(price) AS buy
                     FROM Stocks
                     WHERE operation = 'Buy'
                     GROUP BY stock_name) AS b
                    ON a.stock_name = b.stock_name
GROUP BY a.stock_name;


###############################################################################
# temporary table soluiton
# leetcode does not support TEMPORARY TABLE
###############################################################################

DROP TEMPORARY TABLE IF EXISTS CapitalGainResult;
DROP PROCEDURE IF EXISTS capital_gain_loss;

CREATE TEMPORARY TABLE CapitalGainResult
(
    stock_name        varchar(255),
    capital_gain_loss int
);

CREATE PROCEDURE capital_gain_loss()
BEGIN
    DECLARE _stock_name varchar(255);
    DECLARE _operation varchar(255);
    DECLARE _operation_day int;
    DECLARE _price int;

    DECLARE stock_transaction_cur CURSOR FOR SELECT * FROM Stocks;
    DECLARE CONTINUE HANDLER FOR NOT FOUND SET @done = TRUE;


    for_loop:
    LOOP
        FETCH stock_transaction_cur INTO _stock_name, _operation, _operation_day, _price;

        IF @done THEN
            LEAVE for_loop;
        END IF;

        IF @operation = 'Sell' THEN
            SET @prev_price = (SELECT price
                               FROM Stocks
                               WHERE stock_name = _stock_name
                                 AND operation = 'Buy'
                                 AND operation_day < _operation_day
                               ORDER BY operation_day DESC
                               LIMIT 1);
            SET @capital_gain_loss = @price - @prev_price;

            SET @current_gain = (SELECT capital_gain_loss
                                 FROM CapitalGainResult
                                 WHERE stock_name = _stock_name);

            INSERT INTO CapitalGainResult (stock_name, capital_gain_loss)
            VALUES (_stock_name, @current_gain + @capital_gain_loss);
        END IF;
    END LOOP;
END;

SELECT *
FROM CapitalGainResult;



###############################################################################
# Best Practice
# https://leetcode.com/problems/capital-gainloss/discuss/552600/MySQL-Single-group-by-%2B-SUM-solution.

SELECT stock_name, SUM(
    CASE
        WHEN operation = 'Buy' THEN -price
        ELSE price
    END
) AS capital_gain_loss
FROM Stocks
GROUP BY stock_name
