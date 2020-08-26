// FizzBuzz
// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

// VARIABILI FIZZ E BUZZ
var fizz = "Fizz";
var buzz = "Buzz";

// CONTATORE
var numero = 1;

while (numero <= 100) {
  if ((numero % 3 == 0) && (numero % 5 == 0)) {
    document.getElementById("lista-numeri").innerHTML += "<li>" + fizz + buzz + "<li>";
    console.log(fizz + buzz);
  }
  else if (numero % 5 == 0) {
    document.getElementById("lista-numeri").innerHTML += "<li>" + buzz + "<li>";
    console.log(buzz);
  }
  else if (numero % 3 == 0) {
  document.getElementById("lista-numeri").innerHTML += "<li>" + fizz + "<li>";
  console.log(fizz);
  }
  else{
    document.getElementById("lista-numeri").innerHTML += "<li>" + numero + "<li>";
    console.log(numero);
  }

  numero++;
}
