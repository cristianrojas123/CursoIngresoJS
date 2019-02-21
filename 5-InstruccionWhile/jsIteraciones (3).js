function mostrar()
{

    var clave = prompt("ingrese el número clave.");
    
    while(clave != "utn750")
    {
        alert("CLAVE INVALIDA")
        clave = prompt("vuelva a ingresar la clave","****");
    
    }
    alert("CLAVE VALIDA");

}