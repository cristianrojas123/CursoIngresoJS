/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/
function sumar() 
{
    var n1;
    var n2;
    var resultado;

    n1 = parseInt(document.getElementById("numeroUno").value);
    n2 = parseInt(document.getElementById("numeroDos").value);

    resultado = n1 + n2;

    alert("el resultado de la suma es " + resultado);

}

function restar() 
{
    var n1;
    var n2;
    var resultado;

    n1 = parseInt(document.getElementById("numeroUno").value);
    n2 = parseInt(document.getElementById("numeroDos").value);

    resultado = n1 - n2;

    alert("el resultado de la resta es " + resultado);
}

function multiplicar() 
{
    var n1;
    var n2;
    var resultado;

    n1 = parseInt(document.getElementById("numeroUno").value);
    n2 = parseInt(document.getElementById("numeroDos").value);

    resultado = n1 * n2;

    alert("el resultado de la multiplicacion es " + resultado);
}

function dividir() 
{
    var n1;
    var n2;
    var resultado;

    n1 = parseInt(document.getElementById("numeroUno").value);
    n2 = parseInt(document.getElementById("numeroDos").value);

    resultado = n1 / n2;

    alert("el resultado de la division es " + resultado);
}

