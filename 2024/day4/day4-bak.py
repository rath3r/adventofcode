
file = open("example.txt", "r")

searchWord = ["X", "M", "A", "S"]
outputArr = []
inputArr = []
noOfXmas = 0

def setUpSearchInput():
    print("search Input")
    noOfXmas = 0
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

# . . . 8 1 2 (j-1),(i-1) (j),(i-1) (j+1),(i-1) 
# . X . 7 X 3 (j-1),(i)       x     (j+1),(i)
# . . . 6 5 4 (j-1),(i+1) (j),(i+1) (j+1),(i+1)
def lookAround(startI, startJ, firstLetter):
    #print("look for " + search)
    #print("length: " + str(len(inputArr)))
    #print("i: " + str(startI))
    #print("j: " + str(startJ))
    noOfXmas = 0
    directions = [
        [0,-1],
        [1,-1],
        [1,0],
        [1,1],
        [0,1],
        [-1,1],
        [-1,0],
        [-1,-1]
    ]
    if firstLetter == searchWord[0]:
        print("lets go")
        addToOutput(startI, startJ, firstLetter)
        for i in directions:
            nextLetter = inputArr[startI + directions[0][0]][startJ + directions[0][1]]
            print(nextLetter)
    
    for i in range(0, 8):
        #print(directions[i])
        #print(firstLetter)
        '''
        if i == 1:
            if ((startI - 1) < 0):
                break
            else:
                if inputArr[startI - 1][startJ] == "M":
                    addToOutput(startI - 1, startJ, inputArr[startI - 1][startJ])
                if inputArr[startI - 2][startJ] == "A":
                    addToOutput(startI - 2, startJ, inputArr[startI - 2][startJ])
                if inputArr[startI - 3][startJ] == "S":
                    addToOutput(startI - 3, startJ, inputArr[startI - 3][startJ])
                    print("got an Xmas")
        '''
    #print(startJ)
    return ""

def displayArr(arr):
    #print("display Arr")
    #print(len(arr))
    output = ""
    for line in arr:
        lineStr = ""
        for letter in line:
            lineStr += letter
        print(lineStr)
    print("No Of Xmas: " + str(noOfXmas))

def addToOutput(i, j, letter):
    outputArr[i][j] = letter

def search():
    for i, line in enumerate(inputArr):
        for j, letter in enumerate(line):
            lookAround(i, j, letter)

setUpSearchInput()
search()

displayArr(outputArr)