function mostrar()
{
    var precio;
    var porcentaje;
    var descuento;
    var descuento2;

    precio = parseInt(prompt("digite el precio del producto"));
    porcentaje = parseInt(prompt("digite el porcentaje de descuento"));
    descuento = precio * porcentaje / 100;
    descuento2 = precio - descuento;

    document.getElementById("elPrecioFinal").value = descuento2;

   



}
