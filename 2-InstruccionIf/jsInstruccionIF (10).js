function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numero;

	numero = parseInt((Math.random() * 10) + 1);

	if(numero >= 9){
		alert(numero + " ,excelente");
	}
	if(numero > 4 || (numero < 9)){
		alert(numero + " ,aprobo");
	}
	if(numero <= 4 || (numero > 1) ){
		alert(numero + " ,vamos, la proxima se puede");
	}
	


}//FIN DE LA FUNCIÓN