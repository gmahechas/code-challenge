from math import floor


def pyramid(n):
    columns = (n*2)-1
    mid_point = floor(columns/2)

    for row in range(n):
        stair = ""
        for column in range(columns):
            if (mid_point - row) <= column and (mid_point + row) >= column:
                stair += "#"
            else:
                stair += "/"
        print(stair)


pyramid(4)
