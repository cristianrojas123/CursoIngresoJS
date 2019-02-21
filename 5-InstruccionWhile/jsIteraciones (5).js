function mostrar()
{

    var sexo;
    
    
    sexo = prompt("ingrese f ó m .");

    while(sexo)
    {
        if(sexo == "f")
        {
            document.getElementById('Sexo').value = "femenino";
            break;
        }
        if(sexo == "m")
        {
            document.getElementById('Sexo').value = "masculino";
            break;
        }      
        
        break;

   
    }
  

}//FIN DE LA FUNCIÓN