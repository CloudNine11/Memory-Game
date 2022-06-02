
const cardsArray = [
    {
      name: 'apple',
      img: 'img/apple.png',
    },
    {
      name: 'banana',
      img: 'img/banana.png',
    },
    {
      name: 'cherry',
      img: 'img/cherry.png',
    },
    {
      name: 'pom',
      img: 'img/pom.png',
    },
    {
      name: 'grapes',
      img: 'img/grapes.png',
    },
    {
      name: 'kiwi',
      img: 'img/kiwi.png',
    },
    {
      name: 'lemon',
      img: 'img/lemon.png',
    },
    {
      name: 'stawberry',
      img: 'img/stawberry.png',
    },
    {
      name: 'mango',
      img: 'img/mango.png',
    },
    {
      name: 'pineapple',
      img: 'img/pineapple.png',
    },
    {
      name: 'sandwitch',
      img: 'img/sandwitch.png',
    },
    {
      name: 'watermelon',
      img: 'img/watermelon.png',
    },
  ]

  var gameGrid = cardsArray.concat(cardsArray).sort(function () {
    return 0.5 - Math.random();
  });
  
  var firstGuess = '';
  var secondGuess = '';
  var count = 0;
  var previousTarget = null;
  var delay = 900;
  
  var game = document.getElementById('game');
  var grid = document.createElement('section');
  grid.setAttribute('class', 'grid');
  game.appendChild(grid);
  
  gameGrid.forEach(function (item) {
    var name = item.name,
        img = item.img;
  
  
    var card = document.createElement('div');
    card.classList.add('card');
    card.dataset.name = name;
  
    var front = document.createElement('div');
    front.classList.add('front');
  
    var back = document.createElement('div');
    back.classList.add('back');
    back.style.backgroundImage = 'url(' + img + ')';
  
    grid.appendChild(card);
    card.appendChild(front);
    card.appendChild(back);
  });
  
  var match = function match() {
    var selected = document.querySelectorAll('.selected');
    selected.forEach(function (card) {
      card.classList.add('match');
    });
  };
  
  var resetGuesses = function resetGuesses() {
    firstGuess = '';
    secondGuess = '';
    count = 0;
    previousTarget = null;
  
    var selected = document.querySelectorAll('.selected');
    selected.forEach(function (card) {
      card.classList.remove('selected');
    });
  };
  
  grid.addEventListener('click', function (event) {
  
    var clicked = event.target;
  
    if (clicked.nodeName === 'SECTION' || clicked === previousTarget || clicked.parentNode.classList.contains('selected') || clicked.parentNode.classList.contains('match')) {
      return;
    }
  
    if (count < 2) {
      count++;
      if (count === 1) {
        firstGuess = clicked.parentNode.dataset.name;
        console.log(firstGuess);
        clicked.parentNode.classList.add('selected');
      } else {
        secondGuess = clicked.parentNode.dataset.name;
        console.log(secondGuess);
        clicked.parentNode.classList.add('selected');
      }
  
      if (firstGuess && secondGuess) {
        if (firstGuess === secondGuess) {
          setTimeout(match, delay);
        }
        setTimeout(resetGuesses, delay);
      }
      previousTarget = clicked;
    }
  });