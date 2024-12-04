

file = open("input.txt", "r")

def getSafeVal(lineArr):
    safeVal = "safe"
    elementsArr = []
    diffArr = []
    unsafeArr = []
    for i, el in enumerate(lineArr):
        if not (i+1 >= len(lineArr)):
            diff = int(lineArr[i]) - int(lineArr[i+1])
            diffArr.append(diff)
            if abs(diff) > 3:
                safeVal = "unsafe"
                unsafeArr.append("unsafe")
            if diff == 0:
                safeVal = "unsafe"
                unsafeArr.append("unsafe")
            # check if all are pos or not
            if diff < 0:
                elementsArr.append("neg")
            if diff > 0:
                elementsArr.append("pos")
    negVal = 0
    posVal = 0
    for el in elementsArr:
        if el == "neg":
            negVal += 1
        if el == "pos":
            posVal += 1
        if negVal > 0 and posVal > 0:
            safeVal = "unsafe"
 
    return safeVal

safeArr = []
for i, line in enumerate(file.readlines()):
    lineArr = line.split()
    safeVal = getSafeVal(lineArr)
    if safeVal == "unsafe":
        
        print(i)
        print(lineArr)
        print(safeVal)
        checkSafeVal = ""
        for i in range(len(lineArr)-1):
            tempArr = lineArr.copy()
            del tempArr[i]
            checkSafeVal = getSafeVal(tempArr)
            if checkSafeVal == "safe":
                safeVal = "safe"
                continue
        print(safeVal)
        print("---end---")
    safeArr.append(safeVal)

safeNum = 0
for el in safeArr:
    if el == "safe":
        safeNum += 1
print(safeNum)            