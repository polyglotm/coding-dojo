-- leetcode/easy/1623. All Valid Triplets That Can Represent a Country
-- 1623-all-valid-triplets-that-can-represent-a-country
-- https://leetcode.com/problems/all-valid-triplets-that-can-represent-a-country/submissions/

--
-- Input:
-- SchoolA table:
-- +------------+--------------+
-- | student_id | student_name |
-- +------------+--------------+
-- | 1          | Alice        |
-- | 2          | Bob          |
-- +------------+--------------+
-- SchoolB table:
-- +------------+--------------+
-- | student_id | student_name |
-- +------------+--------------+
-- | 3          | Tom          |
-- +------------+--------------+
-- SchoolC table:
-- +------------+--------------+
-- | student_id | student_name |
-- +------------+--------------+
-- | 3          | Tom          |
-- | 2          | Jerry        |
-- | 10         | Alice        |
-- +------------+--------------+
-- Output:
-- +----------+----------+----------+
-- | member_A | member_B | member_C |
-- +----------+----------+----------+
-- | Alice    | Tom      | Jerry    |
-- | Bob      | Tom      | Alice    |
-- +----------+----------+----------+

-- MySQL works but PostgreSQL doesn't

WITH ABCJOIN AS (SELECT A.student_name AS member_A,
                        B.student_name AS member_B,
                        C.student_name AS member_C,
                        A.student_id   AS id_A,
                        B.student_id   AS id_B,
                        C.student_id   AS id_C
                 FROM SchoolA A
                          CROSS JOIN SchoolB B
                          CROSS JOIN SchoolC C)

SELECT ABCJOIN.member_A AS member_A,
       ABCJOIN.member_B AS member_B,
       ABCJOIN.member_C AS member_C

FROM ABCJOIN
WHERE id_A != id_C
  AND id_B != id_C
  AND id_A != id_B
  AND member_A != member_B
  AND member_A != member_C
  AND member_B != member_C


SELECT A.student_name AS member_A,
       B.student_name AS member_B,
       C.student_name AS member_C
FROM SchoolA A
         INNER JOIN SchoolB B ON A.student_id != B.student_id AND A.student_name != B.student_name
         INNER JOIN SchoolC C ON A.student_id != C.student_id AND B.student_id != C.student_id
    AND A.student_name != C.student_name AND B.student_name != C.student_name

