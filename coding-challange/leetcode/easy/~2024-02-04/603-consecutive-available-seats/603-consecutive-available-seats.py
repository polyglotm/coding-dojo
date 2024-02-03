# leetcode/easy/603. Consecutive Available Seats
# 603-consecutive-available-seats
# URL: https://leetcode.com/problems/consecutive-available-seats/

import pandas as pd


def consecutive_available_seats(dataFrame: pd.DataFrame) -> pd.DataFrame:
    # Identify where the value changes
    dataFrame['change'] = dataFrame['free'].diff().ne(0).cumsum()
    print(dataFrame)
    #     seat_id  free  change
    # 0        1     1       1
    # 1        2     0       2
    # 2        3     1       3
    # 3        4     1       3
    # 4        5     1       3

    # Filter for free seats and group by consecutive free seats
    free_seats = dataFrame[dataFrame['free'] == 1].groupby('change')
    print(free_seats)

    # Get rows of groups with more than one member
    consecutive_free_seats = free_seats.filter(lambda x: len(x) > 1)
    print(consecutive_free_seats)
    #     seat_id  free  change
    # 2        3     1       3
    # 3        4     1       3
    # 4        5     1       3

    # Drop the 'change' column as it's no longer needed
    consecutive_free_seats = consecutive_free_seats.drop(columns=['change', 'free'])
    print(consecutive_free_seats)
    #     seat_id
    # 2        3
    # 3        4
    # 4        5
    consecutive_free_seats = consecutive_free_seats.sort_values(by=['seat_id'])

    return consecutive_free_seats
