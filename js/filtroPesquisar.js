function Pesquisar() {

    var inputx = document.querySelector("#inputSearch");
    var filter = inputx.value.toUpperCase();
    var cardContainer = document.getElementById('card-container');
    var cards = cardContainer.getElementsByClassName('card-geral');

    
    for (i = 0; i < cards.length; i++) {
      title = cards[i].querySelector('.card-title');
      console.log(title);
      if (title.innerText.toUpperCase().indexOf(filter) > -1) {
        cards[i].style.display = "";
      } else {
        cards[i].style.display = "none";
      }
    }
  }