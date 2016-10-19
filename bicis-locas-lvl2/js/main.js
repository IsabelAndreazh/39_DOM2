function validateForm(){
	var nombre = document.getElementById("name").value;
	var apellido = document.getElementById("lastname").value;
	var email = document.getElementById("input-email").value;
	var contraseña = document.getElementById("input-password").value;
	var listaDeBicicletas = document.getElementById("Opciones").value;
	var continuar= true;


	var span=document.createElement("span");
	span.setAttribute("class","error");
	document.getElementsByClassName("error");
	var spans = document.getElementsByTagName("span");
	while(spans.length>0) {
		spans[0].parentElement.removeChild(spans[0]);
	}

	if (nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)){
	   	var span = document.createElement("span");
	   		span.innerHTML = "Ingrese nombre";
	   	var spanNombre = document.getElementsByClassName('name-container')[0];
	  		spanNombre.appendChild(span);
	    continuar = false; 
  	}else if(/[a-z]/.test(nombre[0])){
  		var spanMayuscula= document.createElement("span");
  			spanMayuscula.innerHTML = "Solo de acepta con la primera letra en mayuscula ";
  		var spanNombreMayuscula= document.getElementsByClassName("name-container")[0];
  			spanNombreMayuscula.appendChild(spanMayuscula);
  		continuar = false;
  	}else if(!/^[a-zA-Z]+$/.test(nombre[0])){
  		var spanNumero= document.createElement("span");
  			spanNumero.innerHTML = "Nombre no válido";
  		var spanNombreNumero= document.getElementsByClassName("name-container")[0];
  			spanNombreNumero.appendChild(spanNumero);
  		continuar = false;
  	}

  	if (apellido == null || apellido.length == 0 || /^\s+$/.test(apellido)){
	   	var span = document.createElement("span");
	   		span.innerHTML = "Ingrese apellido";
	   	var spanApellido = document.getElementsByClassName('lastname-container')[0];
	  		spanApellido.appendChild(span);
	    continuar = false; 
  	}else if(/[a-z]/.test(apellido[0])){
  		var spanMayuscula= document.createElement("span");
  			spanMayuscula.innerHTML = "Solo de acepta con la primera letra en mayuscula ";
  		var spanApellidoMayuscula= document.getElementsByClassName("lastname-container")[0];
  			spanApellidoMayuscula.appendChild(spanMayuscula);
  		continuar = false;
  	}else if(!/^[a-zA-Z]+$/.test(apellido[0])){
  		var spanNumero= document.createElement("span");
  			spanNumero.innerHTML = "Apellido no válido";
  		var spanApellidoNumero= document.getElementsByClassName("lastname-container")[0];
  			spanApellidoNumero.appendChild(spanNumero);
  		continuar = false;
  	}


  	if (email == null || email.length == 0 || /^\s+$/.test(email)){
	   	var span = document.createElement("span");
	   		span.innerHTML = "Ingrese un email";
	   	var spanEmail = document.getElementsByClassName('email-container')[0];
	  		spanEmail.appendChild(span);
	    continuar = false; 
  	}else if(!email.match(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)){
  		var spanValido= document.createElement("span");
  			spanValido.innerHTML = "email no valido";
  		var spanEmailValido= document.getElementsByClassName("email-container")[0];
  			spanEmailValido.appendChild(spanValido);
  		continuar = false;
  	}


  	if (contraseña == null || contraseña.length<6|| contraseña == "password" || contraseña== "123456" || contraseña== "098754" || /^\s+$/.test(contraseña)){
	   	var span = document.createElement("span");
	   		span.innerHTML = "Contraseña inválida";
	   	var spanContraseña = document.getElementsByClassName('form-group')[0];
	  		spanContraseña.appendChild(span);
	    continuar = false; 
  	}


  	if(listaDeBicicletas == null || listaDeBicicletas == "0"){
  		var span = document.createElement("span");
	   		span.innerHTML = "Selecciona alguna opcion";
	   	var spanOpcion = document.getElementsByClassName('form-group')[1];
	  		spanOpcion.appendChild(span);
	    continuar = false; 
  	}

  return continuar;
}


