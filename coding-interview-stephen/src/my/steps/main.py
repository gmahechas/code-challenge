def steps(n):
    for row in range(n):
        stair = ""
        for column in range(n):
            if column <= row:
                stair += "#"
            else:
                stair += " "
        print(stair)


steps(3)
