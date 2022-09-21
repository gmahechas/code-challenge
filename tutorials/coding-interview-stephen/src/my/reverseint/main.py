import math


def reverse_int(n):
    sign = int(math.copysign(1, n))
    if sign < 0:
        n *= -1
    rever = int(str(n)[::-1])
    return sign * rever


print(reverse_int(981))
