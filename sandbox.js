const mainDiv = document.createElement('div');
mainDiv.id = 'firstCont';
mainDiv.classList.add('container', 'mx-auto', 'd-flex', 'h-100', 'justify-content-center', 'align-items-center', 'd-flex', 'flex-column', 'align-items-center');


const innerDiv = document.createElement('div');
innerDiv.classList.add('container', 'tic-tac-toe');

let ticTacTitle = document.createTextNode("Tic-Tac-Toe");
const header = document.createElement('h1');
header.classList.add('display-1', 'text-center');
header.id = 'tictactoe';
innerDiv.appendChild(header);
header.appendChild(ticTacTitle);



const rowDiv = document.createElement('div');
rowDiv.classList.add('row', 'm-0', 'justify-content-center');
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

        // let player1Text = document.createTextNode('X');
        let player1Span = document.createElement('span');
        player1Span.style.fontSize = "30px";
        player1Span.style.color = 'white';
        // player1Span.appendChild(player1Text);

        const player1Image = document.createElement('img');
        player1Image.src = '/images/bucee.jpg'
        player1Image.style.width = '60px';
        player1Image.style.height = '60px';
        player1Span.appendChild(player1Image);

        const player1Image = document.createElement('img');
        player2Image.src = '/images/ainc-logo-text-triangle-layer-red.png';
        player2Image.style.width = '60px';
        player2Image.style.height = '60px';
        player2Span.appendChild(player2Image)

        // let player2Text = document.createTextNode('O');
        let player2Span = document.createElement('span');
        player2Span.style.fontSize = "30px";
        player2Span.style.color = 'white';
        // player2Span.appendChild(player2Text);


        playButton.addEventListener("click", () => {
            // playerState = playerState + 1;
            if (playerState === 0) {
                playButton.appendChild(player1Span.cloneNode(true))
                playerState = 1;
            }

            else if (playerState === 1) {
                playButton.appendChild(player2Span.cloneNode(true))
                playerState = 0;
            }
            const winner = checkWinner();
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
    resetRowDiv.classList.add('row', 'm-0', 'justify-content-center');

    const resetButton = document.createElement('button')
    resetButton.classList.add('btn', 'btn-primary', 'rounded-pill', 'col-3')
    // resetButton.style.marginLeft = '25%';
    resetButton.style.marginTop = '10px';
    resetRowDiv.appendChild(resetButton);
    innerDiv.appendChild(resetRowDiv);


    let resetBtnText = document.createTextNode("Start Over")
    resetButton.appendChild(resetBtnText);

    const rootElement = document.getElementById('main');
    rootElement.appendChild(mainDiv);

    resetButton.addEventListener("click", () => {
        playerState = 0;
    

        const playButtons = document.querySelectorAll('.btn');
        playButtons.forEach(button => {
            if (button !== resetButton) {
            button.innerHTML = '';
    }})
})


