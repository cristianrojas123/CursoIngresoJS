function mostrar()
{
//tomo la edad  

	    var edad;
        var estado;

        edad = parseInt(document.getElementById("edad").value);
        estado = document.getElementById("estadoCivil").value;

        if (edad < 18 && (estado != "Soltero")){
            alert("eres muy pequeño para NO ser soltero");
        }
        if(edad >= 18 && (estado == "Soltero")){
            alert("es soltero y no es menor");
        
     }
        


}
//FIN DE LA FUNCIÓN