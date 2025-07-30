//definicion de una variables

let mivariable: string = "Helmer Morales";
let numero: number = 165;
let booleano: boolean = true;
let cualquierCosa: any = "Hola";

//Constantes 
const PI: number = 3.14;

console.log(mivariable);

//para transpilar a JavaScript
//tsc main.ts -w 

//arrays 
let personas: string[] = ["Helmer", "Elmo", "Lucho"];
let div_personas: HTMLElement | null = document.querySelector("#personas");

div_personas.innerHTML = "<ul>" +

    personas.map((persona) => {
        return `<li>${persona}</li>`;
    }).join("")

    + "</ul>";