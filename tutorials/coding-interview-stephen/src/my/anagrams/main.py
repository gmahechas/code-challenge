import re


# def build_dic(string):
#     new_map = {}
#     for letter in re.sub(r"\W", "", string).lower():
#         new_map[letter] = new_map[letter] + 1 if letter in new_map else 1
#     return new_map
#
#
# def anagrams(string_one, string_two):
#     map_one = build_dic(string_one)
#     map_two = build_dic(string_two)
#
#     if len(map_one) != len(map_two):
#         return False
#     else:
#         for letter in map_one:
#             if map_one[letter] != map_two[letter]:
#                 return False
#         return True


def sort_str(string):
    return ''.join(sorted(re.sub(r"\W", "", string).lower()))


def anagrams(string_one, string_two):
    return sort_str(string_one) == sort_str(string_two)


print(anagrams('RAIL! SAFETY!', 'fairy tales'))
