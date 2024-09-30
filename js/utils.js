 function calcularEdad(){
    const fechaNacimiento = document.getElementById('fechaNac').value;
    const nacimiento  = fechaNacimiento.split('-');
    const Hoy = new Date();
    let edad = Hoy.getFullYear() - nacimiento[0];
    const mes = nacimiento[1];
    if(mes > (Hoy.getMonth + 1)){
        edad = edad--;
    }
    else if( mes === (Hoy.getMonth() + 1)){
        if(nacimiento[2] > Hoy.getDay()){
            edad = edad--;
        }
    }
    return edad;
}
