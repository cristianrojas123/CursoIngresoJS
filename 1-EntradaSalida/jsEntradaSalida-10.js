/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
    var resultado;
    var calculo;
    var calculo2;
    
    
    importe = parseFloat(document.getElementById("importe").value);
    calculo = importe * 25 / 100;
    calculo2 = importe - calculo;
    parseFloat(document.getElementById("resultado").value = calculo2) = resultado;
}
