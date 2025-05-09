import random
import time
import os

# df . the Cell class
class Cell:
    def __init__(self, x, y, is_alive=False):
        self.x = x
        self.y = y
        self.is_alive = is_alive

    def set_state(self, state):
        self.is_alive = state

    def get_state(self):
        return self.is_alive


# d. the Board class
class Board:
    def __init__(self, width, height):
        self.width = width
        self.height = height
        self.grid = [[Cell(x, y) for y in range(height)] for x in range(width)]
        
    # get neighbors of a cell
    def get_neighbours(self, cell):
        neighbours = []
        for x_offset in [-1, 0, 1]:
            for y_offset in [-1, 0, 1]:
                if x_offset == 0 and y_offset == 0:
                    continue
                x, y = cell.x + x_offset, cell.y + y_offset
                if 0 <= x < self.width and 0 <= y < self.height:
                    neighbours.append(self.grid[x][y])
        return neighbours

    # update the board
    def update(self):
        new_grid = [[Cell(x, y) for y in range(self.height)] for x in range(self.width)]
        for x in range(self.width):
            for y in range(self.height):
                cell = self.grid[x][y]
                neighbours = self.get_neighbours(cell)
                live_neighbours = sum(1 for neighbour in neighbours if neighbour.get_state())

                if cell.get_state():  # Alive cell
                    if live_neighbours < 2 or live_neighbours > 3:
                        new_grid[x][y].set_state(False)  # Dies by underpopulation or overpopulation
                    else:
                        new_grid[x][y].set_state(True)  # Lives on
                else:  # Dead cell
                    if live_neighbours == 3:
                        new_grid[x][y].set_state(True)  # Becomes alive (reproduction)
        self.grid = new_grid

    # method display the grid
    def display(self):
        os.system('cls' if os.name == 'nt' else 'clear')  # clear screen for fresh display
        for row in self.grid:
            print(' '.join(['O' if cell.get_state() else '.' for cell in row]))
        print("\n")


# define  Game class
class Game:
    def __init__(self, width=10, height=10, generations=50):
        self.board = Board(width, height)
        self.generations = generations

    # set  random initial state for the board
    def random_initial_state(self):
        for x in range(self.board.width):
            for y in range(self.board.height):
                if random.random() < 0.3:  # 30% chance for a cell to be alive
                    self.board.grid[x][y].set_state(True)

    # method  run the game
    def run(self):
        self.random_initial_state()
        for _ in range(self.generations):
            self.board.display()
            time.sleep(0.5)
            self.board.update()


# create  Game with a board size of 20x20 and 100 generations
game = Game(width=10, height=10, generations=100)
game.run()