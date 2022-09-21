def fizz_buzz(n):
    for number in range(0, n):
        number += 1
        if number % 3 == 0 and number % 5 == 0:
            print("fizzbuzz")
        elif number % 3 == 0:
            print("fizz")
        elif number % 5 == 0:
            print("buzz")
        else:
            print(number)


fizz_buzz(20)
