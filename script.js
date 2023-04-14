let cardsArray = [
    {
        'name': 'monkey',
        'img': './images/mokey.png',
    },
    {
        'name': 'elephant',
        'img': './images/elephant.png',
    },
    {
        'name': 'gitaffe',
        'img': './images/giraffe.png',
    },

    {
        'name': 'pig',
        'img': '/images/pig.png',
    },
    {
        'name': 'panda',
        'img': '/images/panda.png',
    },
    {
        'name': 'lion',
        'img': '/images/lion.png',
    }
];

const parentDiv = document.querySelector('#card-section');
const gamecards = cardsArray.concat(cardsArray)
for (let i = 0; i < gamecards.length; i++) {
    const childDiv = document.createElement('div')
    childDiv.classList.add('card')
    childDiv.dataset.name = gamecards[i].name;
    childDiv.style.backgroundImage = `url(${gamecards[i].img})`;
    parentDiv.appendChild(childDiv)
}