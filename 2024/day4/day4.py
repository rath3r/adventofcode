
class day4:
    def __init__(self):
        
        self.input = []
        with open("input.txt", "r") as f:
            for line in f.readlines():
                lineArr = []
                for letter in line:
                    if not letter == "\n":
                        lineArr.append(letter)
                self.input.append(lineArr)
        self.noOfRows = len(self.input)
        self.noOfCols = len(self.input[0])
        self.word_goal = ['XMAS', 'SAMX']
        self.part1 = 0

        
    def xmasSearch(self):
        #print(self.input)
        self._row_search()
        self._col_search()
        self._diag_search()

    def _row_search(self):
        #print("row search")
        for row in self.input:
            for i in range(self.noOfCols - 3):
                self.part1 += ''.join(row[i:i+4]) in self.word_goal
    
    def _col_search(self):
        """Search for the word 'XMAS' in the columns of the word search."""
        for col in zip(*self.input):
            for i in range(self.noOfCols - 3):
                self.part1 += ''.join(col[i:i+4]) in self.word_goal

    def _diag_search(self):
        """Search for the word 'XMAS' in the diagonals of the word search."""
        for row in range(self.noOfRows - 3):
            for col in range(self.noOfCols - 3):
                diag_1 = ''.join([self.input[row][col],
                                  self.input[row+1][col+1],
                                  self.input[row+2][col+2],
                                  self.input[row+3][col+3]])
                diag_2 = ''.join([self.input[row+3][col],
                                  self.input[row+2][col+1],
                                  self.input[row+1][col+2],
                                  self.input[row][col+3]])
                self.part1 += diag_1 in self.word_goal
                self.part1 += diag_2 in self.word_goal

day4 = day4()
day4.xmasSearch()
print(day4.part1)
