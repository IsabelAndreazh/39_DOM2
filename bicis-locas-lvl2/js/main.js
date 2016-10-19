function validateForm(){
	var nombre = document.getElementById("name").value;
	var apellido = document.getElementById("lastname").value;
	var correoElectronico = document.getElementById("input-email").value;
	var contraseña = document.getElementById("input-password").value;
	var listaDeBicicletas = document.getElementById("Opciones").selectedIndex;
	var continuar= true;

	var spans = document.getElementsByTagName("span");
	for (var i = 0; i<spans.length; i++) {
		spans[i].parentNode.removeChild(spans[i]);
	}

	if (nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)) {
	   	var span = document.createElement("span");
	   		span.innerHTML = "Por favor digite un nombre válido";
	   	var spanNombre = document.getElementsByClassName('name-container')[0];
	  		spanNombre.appendChild(span);
	    continuar = false; 
  	}else if(/[a-z]/.test(nombre[0])){
  		var spanMayuscula= document.createElement("span");
  			spanMayuscula.innerHTML = "Solo de acepta la primera letra en mayuscula ";
  		var spanNombreMayuscula= document.getElementsByClassName("name-container")[0];
  			spanNombreMayuscula.appendChild(spanMayuscula);
  		continuar = false;
  	}






  return continuar;
}


