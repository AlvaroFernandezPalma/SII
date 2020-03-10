function validar(){
	var nombre = document.formulario.nombre.value;
	//alert("prueba "+ nombre);
	var apellidos = document.formulario.apellidos.value;
	var correo = document.formulario.email.value;
	var pw = document.formulario.pass.value;
	var pw2 = document.formulario.rpass.value;
	if(nombre=="")
	{
		alert("Te falta el nombre!!");
		return false;
	}
	else if(apellidos=="")
	{
		alert("Te faltan tus apellidos!!");
		return false;
	}
	else if (correo.indexOf('@', 0) == -1 || correo.indexOf('.', 0) == -1) 
	{
		if (correo.indexOf('@', 0) != -1)
		{
		    var aux = correo.substr(correo.indexOf('@', 0), (correo.length) - (correo.indexOf('@', 0)));
		    if (aux.indexOf('.', 0) == -1)
		    {
			alert("Introducide un punto tras tu arroba");
			return false;
		    }
		}
		alert("El correo electrónico introducido no es correcto.");
		return false;
	}
    else if(pw.length < 8)
    {
    	if(pw=="")
    	{
    		alert("La contraseña no puede estar vacía");
    		return false;
    	}
    	else
    	{
    		alert("La contraseña debe tener una longitud mínima de 8 caracteres");
    		document.formulario.pass.value=""; //vaciamos el contenido de la variable contraseña
    		return false;
    	}
    }
    else if(pw2!=pw)
    {
    	alert("Debe repetir correctamente la contraseña");
    	document.formulario.rpass.value="";//vaciamos el contenido de la variable contraseña repetida
    	return false;
    }
    else{return true;}
}
