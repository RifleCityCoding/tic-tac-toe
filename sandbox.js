const mainDiv = document.createElement('div');
mainDiv.id = 'firstCont';
mainDiv.classList.add('container', 'mx-auto', 'd-flex', 'h-100', 'justify-content-center', 'align-items-center');


const innerDiv = document.createElement('div');
innerDiv.classList.add('container', 'tic-tac-toe');

const rowDiv = document.createElement('div');
rowDiv.classList.add('row', 'm-0');
rowDiv.style.height = '420px';

let playerState = 1;
let winCondition = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [6, 4, 2]
]

function checkWinner() {
    for (const condition of winCondition) {
        const [a, b, c] = condition;
        const cells = document.querySelectorAll('.btn');
        if (cells[a].innerText && cells[a].innerText === cells[b].innerText && cells[a].innerText === cells[c].innerText) {
            return cells[a].innerText;
        }
    }}

    for (let i = 0; i < 9; i++) {
        const playButton = document.createElement('button');
        playButton.classList.add('btn', 'btn-block', 'h-100', 'w-100');
        playButton.style.backgroundColor = 'black';

        const colDiv = document.createElement('div');
        colDiv.id = i;
        colDiv.classList.add('col-3', 'p-0');
        colDiv.style.margin = '1px';

        colDiv.appendChild(playButton);
        rowDiv.appendChild(colDiv);

        let player1Text = document.createTextNode('X');
        let player1Span = document.createElement('span');
        player1Span.style.fontSize = "20px";
        player1Span.style.color = 'white';
        player1Span.appendChild(player1Text);

        let player2Text = document.createTextNode('O');
        let player2Span = document.createElement('span');
        player2Span.style.fontSize = "20px";
        player2Span.style.color = 'white';
        player2Span.appendChild(player2Text);


        playButton.addEventListener("click", () => {
            // playerState = playerState + 1;
            if (playerState === 0) {
                playButton.appendChild(player1Span)
                playerState = 1;
            }

            else if (playerState === 1) {
                playButton.appendChild(player2Span)
                playerState = 0;
            }
            const winner = checkWinner(1,2);
            if (winner) {
                alert(`Player ${winner} wins!`);

                // switch (playerState) {
                //     case 1:
                //         playButton.appendChild(player1Span)
                //         playerState = 1;
                //         if ()
                //         break;
                //     case 2:
                //         playButton.appendChild(player2Span)
                //         playerState = 0;
                //         break;
                // }

            }})
    }

    innerDiv.appendChild(rowDiv);

    mainDiv.appendChild(innerDiv);

    const resetRowDiv = document.createElement('div');
    resetRowDiv.classList.add('row', 'm-0');

    const resetButton = document.createElement('button')
    resetButton.classList.add('btn', 'btn-primary', 'rounded-pill', 'col-3')
    resetButton.style.marginLeft = '25%';
    resetButton.style.marginTop = '10px';
    resetRowDiv.appendChild(resetButton);
    innerDiv.appendChild(resetRowDiv);


    let resetBtnText = document.createTextNode("Start Over")
    resetButton.appendChild(resetBtnText);

    const rootElement = document.getElementById('main');
    rootElement.appendChild(mainDiv);

    resetButton.addEventListener("click", () => {
        playerState = 1;
    

        const playButtons = document.querySelectorAll('.btn');
        playButtons.forEach(button => {
            if (button !== resetButton) {
            button.innerHTML = '';
    }})
})


