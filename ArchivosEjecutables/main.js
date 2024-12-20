// DECLARACIÓN DE VARIABLES:

let matrix = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '', '8'],
]

let board = document.querySelector('.board');

function ilustrarFichas()
{
    matrix.forEach(row => row.forEach(element=> {

        if (element == '')
        {
            board.innerHTML += `<div class='empty'>${element}</div>`
        }
        else
        {
            board.innerHTML += `<div class='token'>${element}</div>`
        }
    }))

        
}

function nextMovement(actualPosition, emptyPosition)
{
    if(actualPosition[0] - emptyPosition[0] == -1)
    {
        console.log('down');
    }
    else 
    if(actualPosition[0] - emptyPosition[0] == 1)
    {
            console.log('up');
    }
    else
    if(actualPosition[1] - emptyPosition[1] == -1)
    {
        console.log('right');
    }
    else
    if(actualPosition[1] - emptyPosition[1] == 1)
    {
        console.log('left');
    }
    else
    {
        console.log('NO MOVES!');
    }

}

function addEventListeners()
{
    let fichas = document.querySelectorAll('.token');
    fichas.forEach(token => token.addEventListener('click', () => {

        let actualPosition = searchPosition(token.innerText);
        console.log(actualPosition);

        let emptyPosition = searchPosition('');
        // console.log(emptyPosition); // POR DEFECTO SE HACE UN LLAMADO A UN ESPACIO VACÍO DEL TABLERO (2.2).

        let movement = nextMovement(actualPosition, emptyPosition);
    }))
}

function searchPosition(element)
{
    let rowIndex = 0;
    let columnIndex = 0;

    matrix.forEach((row, index) => {

        let elementoFila = row.findIndex(item =>
        item == element)

        if (elementoFila !== -1)
        {
            // console.log(elementoFila, index);
            // console.log(index, elementoFila);

            rowIndex = index;
            columnIndex = elementoFila;
        }
    })

    return [rowIndex, columnIndex];
}


ilustrarFichas();
addEventListeners();