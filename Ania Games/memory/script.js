const cardArray = [
    {
        name: 'tony',
        img: 'images/tony.jpeg',
    },
    {
        name: 'chris',
        img: 'images/chris.jpeg',
    },
    {
        name: 'junior',
        img: 'images/junior.jpeg',
    },
    {
        name: 'livia',
        img: 'images/livia.jpeg',
    },
    {
        name: 'paulie',
        img: 'images/paulie',
    },
    {
        name: 'silvio',
        img: 'images/silvio.jpeg'
    },
    {
        name: 'tony',
        img: 'images/tony.jpeg',
    },
    {
        name: 'chris',
        img: 'images/chris.jpeg',
    },
    {
        name: 'junior',
        img: 'images/junior.jpeg',
    },
    {
        name: 'livia',
        img: 'images/livia.jpeg',
    },
    {
        name: 'paulie',
        img: 'images/paulie',
    },
    {
        name: 'silvio',
        img: 'images/silvio.jpeg'
    },
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')

function createBoard() {
    for(let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'images/sopranos.jpeg')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
}
createBoard()

function flipCard(){
    const cardId = this.getAttribute('data-id')
    console.log(cardArray[cardId].name)
}


