def vowels(string):
    count = 0
    for letter in string:
        if letter in 'aeiou':
            count += 1
    return count


print(vowels('Why do you ask?'))