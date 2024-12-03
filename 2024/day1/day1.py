file = open("input.txt", "r")
#print(file.read())
firstColumn = []
secondColumn = []
for line in file.readlines():
    lineArr = line.split()
    firstColumn.append(lineArr[0])
    secondColumn.append(lineArr[1])

firstColumn.sort()
secondColumn.sort()
differenceArr = []
for i, el in enumerate(firstColumn):
    differenceArr.append(abs(int(firstColumn[i]) - int(secondColumn[i])))

print(sum(differenceArr))

similarityArr = []
for i, a in enumerate(firstColumn):
    occurenceArr = []
    for j, b in enumerate(secondColumn):
        if a == b:
            occurenceArr.append(secondColumn[j])
    if(len(occurenceArr) > 0):
        similarityArr.append(int(occurenceArr[0]) * len(occurenceArr))

print(sum(similarityArr))
