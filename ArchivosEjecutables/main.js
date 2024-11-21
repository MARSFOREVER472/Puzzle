// DECLARACIÓN DE VARIABLES:

let matrix = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', ''],
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

function addEventListeners()
{
    let fichas = document.querySelectorAll('.token');
    fichas.forEach(token => token.addEventListener('click', () => {

        let actualPosition = searchPosition(token.innerText);
    }))
}

function searchPosition(element)
{
    matrix.forEach((row, index) => {

        let elementoFila = row.findIndex(item =>
        item == element)

        if (elementoFila !== -1)
        {
            // console.log(elementoFila, index);
            console.log(index, elementoFila);
        }
    })
}


ilustrarFichas();
addEventListeners();