# **Mine Sweeper**

My goal is to create a mine sweeper game, based on the classic Windows game. I will go with the Expert size board so the game is more fun.

![](http://vignette3.wikia.nocookie.net/egamia/images/7/73/Minesweeper.png/revision/latest?cb=20070319024712)

Players can take turn and in case both are able to clear all mines, the winner will be decided based on whoever does in in less time.
If both players explode a mine, they both lose, regardless of who got further.

## Controls

Left click opens a square and reveals either some blank spaces, a number or a mine.
Right click adds a flag to a square in which the player thinks there is a mine. There will be a logic to show at the end of the game if any flags were placed in wrong squares as well.

## User Stories

Problems to be solved:

- Generating random bombs in the board.
- Generating the numbers, which indicate bomb proximity.
- Hidding these values from the player.
- When an empty square is clicked, there is a ripple effect that opens all surrounding empty squares. I foresee this to be the biggest challenge.
- Resetting the board for Player 2.
- Flagging a square and then be able to return it to it's original "number" in case you decide to remove the flag.
- Calculating who won at the end.




# mineSweeper
