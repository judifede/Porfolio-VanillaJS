var num_images;

function checkPage(){
	var url = window.location.href;
	var urlSplitted = url.split('?');
	var actualPage = urlSplitted[1];
	return actualPage;
}

function createImages(proyecto){

	for (var i = 1; i < num_images+1; i++) {
		var section = document.createElement("section");
		section.classList.add('imgGaleria');
		var img = document.createElement("img");

		if (proyecto=="proyecto=abaco") {
			img.style.height = "98%";
			var imgGaleria_src= "../img/galeria/Abaco/AbacoContacto" + i + ".png";
		}else if (proyecto=="proyecto=senderismo") {
			img.style.height = "93%";
			var imgGaleria_src= "../img/galeria/SenderismoGC/Senderismo" + i + ".png";
		}
		var imgGaleria_alt = "imgGaleria" + i;
		var imgGaleria_id= "imgGaleria" + i;

		img.setAttribute("src", imgGaleria_src);
		img.setAttribute("alt", imgGaleria_alt);
		img.setAttribute("id", imgGaleria_id);

		var p = document.createElement("p");
		p.innerHTML = "Pág. " + i;
		slider.appendChild(section);
		section.appendChild(img);
		section.appendChild(p);	
	}
	
}

function managementGalery(){
	var actualPage = checkPage();
	var obj_nombreProyecto = document.getElementById("nombreProyectoActual");
	var boton_atras = document.getElementById('atras');

	switch(actualPage){
		case "proyecto=abaco":
			obj_nombreProyecto.innerHTML = "Abaco";
			num_images = 2;
			createImages(actualPage);
			break;
		case "proyecto=senderismo":
			obj_nombreProyecto.innerHTML = "SenderismoGC";
			num_images = 7;
			createImages(actualPage);
			break;
		default:
			alert("Proyecto no encontrado");
			boton_atras.click();
	}

	var slider = document.getElementById('slider');
	slider.style.width = (num_images)*100 + "%";

}

managementGalery()



