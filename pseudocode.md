## TIC TAC TOE
#### UI
```
Visually what does TTT look like to the user?
Starting with the UI
- Some kind of graph layout with 9 clickable tiles
- A button for restarting the game
- Annoucement (box?) to let players know who won.
- (Stretch goal) strikethrough victory line
```

### HTML
```
-No HTML but still need the elements required for the JS

Need a container with 3 columns and 3 rows using bootstrap containers, columns, rows, and borders.
```


### JS

```
START


INIT
    -Load UI and elements with .onload?
    - Load the user button with an event listener
    - Load available arrays with useable information
    -Gamestate = 0; We need a state to function of off
        - Let state 0 be player 1 and state 1 be player 2

FUNCTIONS
 What do we need to work inside this to make it a playable game?
    - Clickable divs to apply X and O depending on active user
        - Event listener that applies users choice and switches state to new user each time
    - Need a winCondition
        - Are we going to determine the winCondition combinations with arrays?
        - If certain divs are aligned they will create a win condition..
            - (if [currentCombo] === [winCondition]) 
            - Switch statement?
            -If else statement?
            -



END


```