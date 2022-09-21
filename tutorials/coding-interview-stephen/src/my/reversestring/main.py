from functools import reduce


# def reverse(string):
#     return string[::-1]


# def reverse(string):
#     new_str = ""
#     for letter in string:
#         new_str = letter + new_str
#     return new_str


def reverse(string):
    return reduce(lambda acc, curr: curr + acc, string)


print(reverse("apple"))
