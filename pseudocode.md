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
    (Update) - We should try a for loop? Research condition for loops
        - condition of condition? for loop looks interesting. How do I use that with arrays?
        - AHA! condition = the array! But how would i do that?
        - Further searching shows that I can use an array as a variable?? weird but lets try it
        - Are we going to determine the winCondition combinations with arrays?
        - If certain divs are aligned they will create a win condition..
            - (if [currentCombo] === [winCondition]) 
            - Switch statement?
            -If else statement?
    - Need a function for when a player clicks button, switches state to next player
    Switch case like mind reader?
    playerState = 0 and on click event that changes cases
    Used switch case, prof recommended if statement. maybe do an if else with if(playerState = ?)




END


```