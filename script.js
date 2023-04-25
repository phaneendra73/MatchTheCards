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
        'img': './images/pig.png',
    },
    {
        'name': 'panda',
        'img': './images/panda.png',
    },
    {
        'name': 'lion',
        'img': './images/lion.png',
    },
    {
        'name': 'dog',
        'img': './images/dog.png',

    },
    {
        'name': 'cat',
        'img': './images/cat.png',

    }
];




const parentDiv = document.querySelector('#card-section');
const gamecards = cardsArray.concat(cardsArray)

const random = (gamecards) => {
    for (i = 0; i < gamecards.length; i++) {
        let j = Math.floor(Math.random() * (i + 1))
        let temp = gamecards[i]
        gamecards[i] = gamecards[j]
        gamecards[j] = temp
    }
    return gamecards
}
const shuffledcards = random(gamecards);

let clickcount = 0;
let firstcard = "";
let secondcard = "";
const card_matches = () => {
    let card_selected = document.querySelectorAll('.card_selected');
    card_selected.forEach((curElem) => {
        curElem.classList.add('card_match');

    });
}
let counter = 0;
const youwin = () => {
    let card_selected = document.querySelectorAll('.card_match')
    console.log(card_selected)
    if (card_selected.length >= 24) {
        const result = document.getElementById("result");
        result.style.display = "block";
        const cards = document.getElementById("card-section");
        cards.style.display = "none";
    }
}
    let resetGame = () => {
        clickcount = 0;
        firstcard = "";
        secondcard = "";
        let card_selected = document.querySelectorAll('.card_selected');
        card_selected.forEach((curElem) => {
            curElem.classList.remove('card_selected')

        })
    }


    parentDiv.addEventListener('click', (event) => {
        let current_card = event.target;
        if (current_card.id === "card-section") { return false }
        clickcount++;

        if (clickcount < 3) {
            if (clickcount === 1) {
                firstcard = current_card.parentNode.dataset.name;
                console.log(firstcard)
                current_card.parentNode.classList.add('card_selected');


            }
            else {
                secondcard = current_card.parentNode.dataset.name;
                console.log(secondcard)
                current_card.parentNode.classList.add('card_selected');
            }

            if (firstcard !== "" && secondcard !== "") {
                if (firstcard === secondcard) {
                    setTimeout(() => {
                        card_matches()
                        resetGame()
                        youwin()

                    }, 1000);


                    current_card.id == 'card-section' ? null : current_card.classList.add('card_selected')
                }
                else {
                    setTimeout(() => {
                        resetGame()


                    }, 1000)
                }

            }
        }

    })

    for (let i = 0; i < shuffledcards.length; i++) {

        const childDiv = document.createElement('div')
        childDiv.classList.add('card')
        childDiv.dataset.name = shuffledcards[i].name;
        // childDiv.style.backgroundImage = `url(${shuffledcards[i].img})`;

        const front_div = document.createElement('div')
        front_div.classList.add('front-card')

        const back_div = document.createElement('div')
        back_div.classList.add('back-card')
        back_div.style.backgroundImage = `url(${shuffledcards[i].img})`;

        parentDiv.appendChild(childDiv)
        childDiv.appendChild(front_div)
        childDiv.appendChild(back_div)
    }