
def getFile(isExample):
    if(isExample):
        file = open("example.txt", "r")
    else:
        file = open("input.txt", "r")

    return file