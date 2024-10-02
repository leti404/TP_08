// Ejercicio 1
function ObtenerEdad() {
    const Nombre = document.getElementById('Nombre').value;
    const edad = calcularEdad();
    resultadoEdad.innerHTML = "Hola " + Nombre + ", Tenes " + edad + " años";
}


//Ejercicio 2

function hayFruta() {
    const frutaIngreso = document.getElementById('frutaInput').value;
    let frutas = ["manzana", "banana", "mandarina", "durazno", "pera", "uvas", "sandia", "melón", "frutilla", "kiwi"];
    
    let resultadoFrutas = frutas.filter(fruta => fruta === frutaIngreso.toLowerCase());
    const resultadoElemento = document.getElementById('resultadoFruta');

    if (resultadoFrutas.length > 0) { 
        resultadoElemento.innerHTML = "¡Sí! Tenemos " + frutaIngreso;
    } 
    else {
        resultadoElemento.innerHTML = "No tenemos " + frutaIngreso;
    }
}

//Ejercicio 4
function YoObjeto(){
const ciudad = {
    Nombre: "Praga",
    FechaFun: 950-12-12,
    Poblacion: 1309000,
    Extension: 496
}
for(const propiedad in ciudad ){
    console.log(`${propiedad} : ${ciudad[propiedad]}`)
}
}

//Ejercicio 5
function dobleElementos(){
    const numeros = [1,23,46,7,90];
    const dobles = numeros.map(numero => numero * 2);
    console.log("Los numeros originales: "+ numeros + ". Los dobles: " +  dobles);
}
//Ejercicio 6
function TrianguloAsteriscos1(){
    const ast = "*"
    for(i = 1; i <= 5; i++)
    {
        console.log(ast.repeat(i))
    }
}
function TrianguloAsteriscos2(){
    let renglon = "----*----"
    for(i = 0; i <= 5; i++)
    {
        console.log(renglon);
        renglon = renglon.replace("-*","**");
        renglon = renglon.replace("*-", "**");
    }
}

//Ejercicio 7
function NombresA(){
    const nombres = document.getElementById('ListaNombres').value;
    const lista  = nombres.split(',');
    const palabrasA = lista.filter(nombre => nombre.trim().startsWith("a"));
    for(const palabras of palabrasA ){
        console.log(palabras.trim());
    }
}


