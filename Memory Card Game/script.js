const cards = document.querySelectorAll('.card');

let disableDeck = false;
let matched = 0;
let cardOne;
let cardTwo;
let cardImages = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];


function flipCard(e) { 
    let clickedCard = e.target;
    if (cardOne !== clickedCard && !disableDeck) {
        clickedCard.classList.add("flip");
            if(!cardOne) {
                return cardOne = clickedCard;
            }
        cardTwo = clickedCard;
        disableDeck = true;
        let cardOneSrc = cardOne.querySelector('img').src,
        cardTwoSrc = cardTwo.querySelector('img').src;
    
        matchCards(cardOneSrc, cardTwoSrc);
    }
}

function matchCards(img1, img2) {
    if(img1 === img2) {
        matched++
        console.log('Igeeen egyeznek!');
        console.log(matched);
        if(matched === 8) {
            setTimeout(() => {
                return shuffleCards();
            }, 1000);
        }
        cardOne.removeEventListener("click", flipCard);
        cardTwo.removeEventListener("click", flipCard);
        cardOne = cardTwo = "";
        return disableDeck = false;
    }
    setTimeout(() => {
        console.log('Nem egyeznek!');
        cardOne.classList.add("shake");
        cardTwo.classList.add("shake");
    }, 400);
    setTimeout(() => {
        cardOne.classList.remove("shake", "flip");
        cardTwo.classList.remove("shake", "flip");
        cardOne = cardTwo = "";
        disableDeck = false;
    }, 1200);
}

function shuffleCards() {
    matched = 0;
    disableDeck = false;
    cardOne = cardTwo = "";
    cardImages.sort(() => Math.random() > 0.5 ? 1 : -1);
    cards.forEach((card, i) => {
        card.classList.remove("flip");
        let imgTag = card.querySelector(".card-front img");
        imgTag.src = `icons/img-${cardImages[i]}.png`;
        console.log(`icons/img-${cardImages[i]}.png`)
        card.addEventListener('click', flipCard);
    });
}

shuffleCards();

cards.forEach((card) => {
    card.addEventListener('click', flipCard);
});