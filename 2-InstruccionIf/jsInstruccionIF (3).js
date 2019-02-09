function mostrar()
{
//tomo la edad  
    var edad;
    
    edad = parseInt(document.getElementById("edad").value);

    if(edad >= 18) {
        alert("eres mayor de edad");
    }

    else if(edad < 18){
        alert("eres menor de edad");
    }

}//FIN DE LA FUNCIÓN