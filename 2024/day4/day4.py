
file = open("example.txt", "r")

searchWord = "XMAS"
outputArr = []
inputArr = []

def setUpSearchInput():
    print("search Input")
    for i, line in enumerate(file.readlines()):
        #lineArr = list(line)
        #inputArr.append(lineArr)
        #print(line.split())
        #print(len(lineArr))
        lineArr = []
        outputLine = []
        for letter in line:
            if not letter == "\n":
                lineArr.append(letter)
                outputLine.append(".")
        inputArr.append(lineArr)
        outputArr.append(outputLine)

def lookAround(startI, startJ, search):
    print("look for " + search)
    if not startI - 1 < 0:
        print(startI)
        addToOutput(startI -1, startJ -1, inputArr[startI -1][startJ -1])
    print(startJ)
    return ""

def displayArr(arr):
    print("display Arr")
    print(len(arr))
    output = ""
    for line in arr:
        lineStr = ""
        for letter in line:
            lineStr += letter
        print(lineStr)

def addToOutput(i, j, letter):
    outputArr[i][j] = letter

def search():
    for i, line in enumerate(inputArr):
        for j, letter in enumerate(line):
            if(letter == "X"):
                addToOutput(i, j, letter)
                lookAround(i, j, "M")
                #for searchLetter in searchWord:
                #    lookAround(i, j, searchLetter)

setUpSearchInput()
search()

displayArr(outputArr)