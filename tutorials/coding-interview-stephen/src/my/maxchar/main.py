def max_char(string):
    map_char = {}
    max_num = 0
    max_num_char = ""

    for letter in string:
        map_char[letter] = map_char[letter] + 1 if letter in map_char else 1
        if map_char[letter] > max_num:
            max_num = map_char[letter]
            max_num_char = letter
        # if letter not in map_char:
        #     map_char[letter] = 1
        # else:
        #     map_char[letter] += 1

    # for letter in map_char:
    #     if map_char[letter] > max_num:
    #         max_num = map_char[letter]
    #         max_num_char = letter

    return max_num_char


print(max_char("apple 1231111"))
