// Ejercicio 1

//Ejercicio 2

function hayFruta() {
    const frutaIngreso = document.getElementById('fruta').value;
    let frutas = ["manzana", "banana", "mandarina", "durazno", "pera", "uvas", "sandia", "melón", "frutilla", "kiwi"];
    
    let resultadoFrutas = frutas.filter(fruta => fruta === frutaIngreso.toLowerCase());

    const fruta = document.getElementById('fruta');

    if (resultadoFrutas.length > 0) { 
        fruta.innerHTML = "¡Sí! Tenemos " + frutaIngreso;
    } else {
        fruta.innerHTML = "No tenemos " + frutaIngreso;
    }
}
