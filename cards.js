let input = document.getElementById('textarea'),
    create = document.getElementById('create'),
    house = document.getElementById('house'),
    cards = document.getElementsByClassName('cards'),
    delButtons = document.getElementsByClassName('delButton');


function getInput() {
  return input.value;
}

function makeCard(input) {
  house.innerHTML += `<div class="cards"><p>${input}</p><button class="delButton">Delete</button>`;
}

function deleteListener() {
  for (var i = 0; i < cards.length; i++) {
    var deleteEach = delButtons[i];
    deleteEach.addEventListener('click', function() {
      // console.log("this", this);
      this.closest('div').remove();
      // finds closest div element (cards class) & removes it from dom
    })
  }
}

create.addEventListener('click', function() {
  makeCard(getInput());
  deleteListener();
});







