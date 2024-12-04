import re

file = open("input.txt", "r")

mullArr = []
for i, line in enumerate(file.readlines()):
    print(line)

    fullMulls = re.findall(r"mul\([0-9]+,[0-9]+\)", line)
    mullArr += fullMulls

multiples = []
for el in mullArr:
    numbers = re.findall(r"[0-9]+", el)
    multiples.append(int(numbers[0]) * int(numbers[1]))

print(sum(multiples))