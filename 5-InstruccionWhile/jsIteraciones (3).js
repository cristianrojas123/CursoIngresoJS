function mostrar()
{

    var clave = prompt("ingrese el número clave.");
    var contador = 0;
    
    while(clave != "utn750" && (contador <= 2))
    {
        alert("CLAVE INVALIDA")
        clave = prompt("vuelva a ingresar la clave","****");
        
        break;

        
    }
    alert("CLAVE VALIDA");

}