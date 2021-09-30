""" def reverse(str):
	return str[::-1] """

""" def reverse(str):
	result = ''
	for letter in str:
		result = letter + result
	return result; """

import functools
def reverse(str):
	listStr = list(str)
	return functools.reduce(lambda previous, current: current + previous, listStr)
print(reverse('apple'))
