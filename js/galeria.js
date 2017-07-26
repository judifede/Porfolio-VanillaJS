var num_images;


function checkPage(){
	var url = window.location.href;
	var urlSplitted = url.split('?');
	var actualPage = urlSplitted[1];
	return actualPage;
}


function createManagementImages(proyecto){

	//for (var i = num_images; i > 0; i--) {
	for (var i = 1; i < num_images+1; i++) {
			var section = document.createElement("section");
		section.classList.add('imgGaleria');
		var img = document.createElement("img");

		if (proyecto=="abaco") {
			img.style.height = "98%";
			var imgGaleria_src= "../img/galeria/Abaco/AbacoContacto" + i + ".png";
		}else if (proyecto=="senderismo") {
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

function managementImages(actualPage){
	
	var slider = document.getElementById('slider');

	slider.style.width = (num_images)*100 + "%";

	switch(actualPage){

		case "abaco":

			createManagementImages(actualPage);
			break;
		case "senderismo":
			createManagementImages(actualPage);
			break;
		default:

			alert("error");
	}


}

function managementGalery(){
	var actualPage = checkPage();

	switch(actualPage){

		case "abaco":
			num_images = 2;
			managementImages(actualPage);
			break;
		case "senderismo":
			num_images = 7;
			managementImages(actualPage);
			break;
		default:

			alert("error");
	}



}

managementGalery()



