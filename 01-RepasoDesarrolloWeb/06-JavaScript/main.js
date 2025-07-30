//alerta
alert("!!Hola");

//variables 
let nombre = "Helmer";

//mostrar por consola
console.log("Hola " + nombre);

// constantes
const altura = 165;

//concatenación
let concatenacion = "Hola " + nombre + ", tu altura es " + altura + " metros.";
console.log(concatenacion);

//seleccionsar elementos del DOM
let datos = document.querySelector("#datos");
//mostrar en el DOM
datos.innerHTML = `<h2> ${concatenacion}</h2>`;

//condiciones
if(altura < 170){
    datos.innerHTML += `<p>Tu altura es menor a 170 cm.</p>`;
}else{
    datos.innerHTML += `<p>Tu altura es mayor o igual a 170 cm.</p>`;
}

//bucles 
for(let i = 0; i < 5; i++){
    datos.innerHTML += `<p>Este es el número ${i}</p>`;
}

// Arrays

let frutas = ["Manzana", "Banana", "Naranja", "Fresa"];

let divFrutas = document.querySelector("#frutas");

divFrutas.innerHTML= frutas[1];


// funcioness
const miInformacion = (nombre, altura) => {
    return `Hola ${nombre}, tu altura es ${altura} cm.`;
}

// mostrar la información en consola
console.log(miInformacion("Helmer Morales", 165));


// mostrar la información en el DOM
const imprimir = () =>{
    let datos = document.querySelector("#datos2");
    datos .innerHTML = miInformacion("Helmer Morales", 165);

}

imprimir();