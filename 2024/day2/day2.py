

file = open("example.txt", "r")


for line in file.readlines():
    lineArr = line.split()
    for i, el in enumerate(lineArr):
        if not (i+1 >= len(lineArr)):
            diff = int(lineArr[i]) - int(lineArr[i+1])
            print(diff)
            if abs(diff) > 3:
                print("unsafe")
            if diff == 0:
                print("unsafe")
            
        
    print("-----")