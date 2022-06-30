def chunk(array, size):
    new_arr = []
    index = 0

    while index < len(array):
        new_arr.append(array[index:index+size])
        index += size

    return new_arr


print(chunk([1, 2, 3, 4, 5], 4))
