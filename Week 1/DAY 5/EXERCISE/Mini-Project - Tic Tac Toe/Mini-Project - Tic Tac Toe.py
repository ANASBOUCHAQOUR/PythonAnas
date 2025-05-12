# Tic Tac Toe Game

def display_board(board):
    """Displays the Tic Tac Toe board."""
    print("\n")
    print(f" {board[0]} | {board[1]} | {board[2]} ")
    print("---+---+---")
    print(f" {board[3]} | {board[4]} | {board[5]} ")
    print("---+---+---")
    print(f" {board[6]} | {board[7]} | {board[8]} ")
    print("\n")


def player_input(player, board):
    """Asks the player to choose a position on the board."""
    while True:
        try:
            move = int(input(f"Player {player} (1-9): ")) - 1
            if move in range(9) and board[move] == ' ':
                board[move] = player
                break
            else:
                print("Invalid move. Try again.")
        except ValueError:
            print("Please enter a number from 1 to 9.")


def check_win(board, player):
    """Checks if the player has won."""
    win_positions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],  # Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8],  # Columns
        [0, 4, 8], [2, 4, 6]              # Diagonals
    ]
    for combo in win_positions:
        if all(board[i] == player for i in combo):
            return True
    return False


def play():
    """Main game function that runs the Tic Tac Toe game."""
    board = [' '] * 9
    current_player = 'X'

    for turn in range(9):
        display_board(board)
        player_input(current_player, board)

        if check_win(board, current_player):
            display_board(board)
            print(f"🎉 Player {current_player} wins!")
            return

        current_player = 'O' if current_player == 'X' else 'X'

    display_board(board)
    print("It's a draw!")


# Run the game
if __name__ == "__main__":
    play()