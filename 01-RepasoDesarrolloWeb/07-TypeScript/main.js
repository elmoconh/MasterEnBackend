//definicion de una variables
var mivariable = "Helmer Morales";
var numero = 165;
var booleano = true;
var cualquierCosa = "Hola";
//Constantes 
var PI = 3.14;
console.log(mivariable);
//para transpilar a JavaScript
//tsc main.ts -w 
//arrays 
var personas = ["Helmer", "Elmo", "Lucho"];
var div_personas = document.querySelector("#personas");
div_personas.innerHTML = "<ul>" +
    personas.map(function (persona) {
        return "<li>".concat(persona, "</li>");
    }).join("")
    + "</ul>";
