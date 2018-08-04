"use strict";

// ejercicio 2

// var contador = 0;

// function timer(){
//     contador = contador +1;
//     var time = document.querySelector (".counter");
//     time.innerHTML = contador;
// }

// setInterval(timer, 2000);

// ejercicio 3

// var contador = 0;

// function timer (){
//     contador++;
//     var time = document.querySelector (".counter");
//     time.innerHTML = contador;
// if (contador === 12){
//     clearInterval(end);
// }
// }

// var end = setInterval(timer, 1000);

// ejercicio 4

// var contador = 0;
// function minute (){
//     contador=0;
//     contador++;
//     time.innerHTML = "Escrito hace "+ contador + " minuto";  
// }
//   setInterval (minute, 60000);

// function timer (){
//     contador++;
//     var time = document.querySelector (".counter");
//     time.innerHTML = "Escrito hace "+ contador + " segundo";
//     if (contador >= 2 && contador<=59){
//         time.innerHTML = "Escrito hace "+ contador + " segundos";  
//     } else if (contador > 59){
//         contador=0;
//         contador++;
//         time.innerHTML = "Escrito hace "+ contador + " minuto"; 
// clearInterval (parar);
//     }

// }
// var parar=setInterval (timer, 1000);

// ejercicio 5

// var counter=0;


// function incrementAndShowCounter(){
//  counter++;
//  var time = document.querySelector('.time');

// time.innerHTML = "su sesión ha expirado";


// }

// setTimeout(incrementAndShowCounter, 15000);

// ejercicio 6

var counter=0;

var parar= document.querySelector (".boton");
var conti = document.querySelector (".botoncontinuar");


function incrementAndShowCounter(){
     counter++;
     var time1 = document.querySelector('.time');
     time1.innerHTML = counter;

}

 var fin=setInterval(incrementAndShowCounter,1000);

// function stop (){
//     clearInterval (fin);
// }
// parar.addEventListener ("click", stop);

// function cont(){
//     incrementAndShowCounter();
// }
// conti.addEventListener ("click", cont);