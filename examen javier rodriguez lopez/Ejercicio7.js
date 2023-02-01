//Constante para los DATOS relacionados con cookies
const DATOS = ["dni", "nombre", "apellido", "edad", "nac"];

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  function checkCookie() {
    var user = getCookie("username");
    if (user != "") {
      alert("Welcome again " + user);
    } else {
      user = prompt("Please enter your name:", "");
      if (user != "" && user != null) {
        setCookie("username", user, 365);
      }
    }
  }
  /************************
Validacione de los campos
*************************/

function validarDNI(){
    var elemento = document.getElementById("dni");
    if(!elemento.checkValidity()){
        if (elemento.validity.valueMissing){
            elemento.setCustomValidity("El campo DNI no puede estar vacío")
        }

        if (elemento.validity.patternMismatch){
            elemento.setCustomValidity("Debe introducir el patrón correcto");
        }
        elemento.value = "";
        return false;
    }
    return true;
}

function validarNombre(){
    var elemento = document.getElementById("nombre");
    if(!elemento.checkValidity()){
        if (elemento.validity.valueMissing){
            elemento.setCustomValidity("El campo Nombre no puede estar vacío")
        }

        if (elemento.validity.patternMismatch){
            elemento.setCustomValidity("Debe introducir el patrón correcto");
        }
        elemento.value = "";
        return false;
    }
    return true;
}

function validarNac(){
    
    var elemento = document.getElementById("nac");
    if(!elemento.checkValidity()){
        if (elemento.validity.valueMissing){
            elemento.setCustomValidity("El campo luhgar de nacimiento no puede estar vacío")
        }

        if (elemento.validity.patternMismatch){
            elemento.setCustomValidity("Debe introducir el patrón correcto");
        }
        elemento.value = "";
        return false;
    }
    return true;
}


function validarEdad(){
    var elemento = document.getElementById("correo");

    if(!elemento.checkValidity()){
        if (elemento.validity.valueMissing){
            elemento.setCustomValidity("El campo Edad no puede estar vacío")
        }

        if (elemento.validity.patternMismatch){
            elemento.setCustomValidity("Debe introducir el patrón correcto");
        }
        elemento.value = "";
        return false;
    }
    return true;
}

function validarApellido(){
   
    var elemento = document.getElementById("apellido");
    if(!elemento.checkValidity()){
        if (elemento.validity.valueMissing){
            elemento.setCustomValidity("El campo Pag Web no puede estar vacío")
        }

        if (elemento.validity.patternMismatch){
            elemento.setCustomValidity("Debe introducir el patrón correcto");
        }
        elemento.value = "";
        return false;
    }
    return true;
}

function validar(e){
    if(validarDNI() && validarNombre()&& validarNac() && validarApellido()
       && validarEdad()){
           // Todo es valido  creamos la cookie
           DATOS.forEach(elemento => {
            let dato = document.getElementById(elemento);
            setCookie(dato.name, dato.value, 1000000);
        });
         return true
    } else{
        e.preventDafault();
        return false;
    }
}


/***********************************
    Fin de ña Vidacione de los campos
**************************************/




function mostrarCookies(){
    DATOS.forEach(dato => {
        alert(`${dato} = ${getCookie(dato)}`);
    });
}


function iniciar(){

    document.getElementById("guardar").addEventListener('click', validar, false);
    

    document.getElementById("ver").addEventListener('click', mostrarCookies, false)
}

window.onload = iniciar;