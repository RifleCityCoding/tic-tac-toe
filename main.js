const mainDiv = document.createElement('div');
mainDiv.id = 'firstCont';
mainDiv.classList.add('container', 'mx-auto', 'd-flex', 'h-100', 'justify-content-center', 'align-items-center');


const innerDiv = document.createElement('div');
innerDiv.classList.add('container', 'tic-tac-toe');

const rowDiv = document.createElement('div');
rowDiv.classList.add('row', 'm-0');
rowDiv.style.height = '420px';


for (let i = 0; i < 9; i++) {
  const playButton = document.createElement('button');
  button.classList.add('btn', 'btn-block', 'h-100', 'w-100');
  button.style.backgroundColor = 'black';

  const colDiv = document.createElement('div');
  colDiv.id = i;
  colDiv.classList.add('col-3', 'p-0');
  colDiv.style.margin = '1px';

  colDiv.appendChild(playButton);
  rowDiv.appendChild(colDiv);
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