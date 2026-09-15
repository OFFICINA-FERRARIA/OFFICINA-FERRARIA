// Pobierz przycisk:
let mybutton = document.getElementById("myBtn");

// Kiedy użytkownik przewinie 20px od góry, pokaż przycisk
// Ta funkcja jest powiązana z oknem przeglądarki
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  // Sprawdź pozycję przewinięcia
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    // Jeśli przewinięto wystarczająco, pokaż przycisk
    mybutton.style.display = "block";
  } else {
    // W przeciwnym razie ukryj przycisk
    mybutton.style.display = "none";
  }
}

// Kiedy użytkownik kliknie przycisk, przewiń na górę
// Ta funkcja jest wywoływana przez "onclick" w Twoim pliku HTML
function topFunction() {
  document.body.scrollTop = 0; // Dla przeglądarek Safari
  document.documentElement.scrollTop = 0; // Dla Chrome, Firefox, IE i Opera
}
