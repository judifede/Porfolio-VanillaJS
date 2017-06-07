$(document).ready(function(){

});
/* Main */
function findPosition(obj) {
    var navPosition = 37;
	if(window.innerWidth>=1000){
		navPosition = 0;
	}
    var currentTopPosition = 0 - navPosition;
    if (obj.offsetParent) {
        do {
            currentTopPosition += obj.offsetTop;
        } while (obj = obj.offsetParent);
    return [currentTopPosition];
    }
}

function scrollToContent(content){

	switch(content){ 
		case "pageSobreMi":
			window.scroll(0,findPosition(document.getElementById(content)));
			break;
		case "pageProyectos":
			window.scroll(0,findPosition(document.getElementById(content)));
			break;
		case "footer":
			window.scroll(0,findPosition(document.getElementById(content)));
			break;
		default:
			window.location.reload(true);
	}
}

/* NavBar */
function styleNavResponsive(){

	if(window.innerWidth<=768){ //Mobile
		
		for (var i =0; i < document.querySelectorAll(".navbar-icons").length; i++) {
        	document.querySelectorAll(".navbar-icons")[i].classList.add("c-white");

    	}
		for (var i =0; i < document.querySelectorAll(".navbar-addon").length; i++) {
        	document.querySelectorAll(".navbar-addon")[i].classList.add("bg-black");

    	}
	}
	if(window.innerWidth>768){ //Tablet
		
		for (var i =0; i < document.querySelectorAll(".navbar-icons").length; i++) {
        	document.querySelectorAll(".navbar-icons")[i].classList.remove("c-white");

    	}
		for (var i =0; i < document.querySelectorAll(".navbar-addon").length; i++) {
        	document.querySelectorAll(".navbar-addon")[i].classList.remove("bg-black");

    	}
	}
}

styleNavResponsive();
var screen768 = window.matchMedia("screen and (max-width: 768px)");
screen768.addListener(styleNavResponsive);

/* Footer */
function copiarAlPortapapeles(id_elemento) {
	var aux = document.createElement("input");
	aux.setAttribute("value", document.getElementById(id_elemento).innerHTML);
	document.body.appendChild(aux);
	aux.select();
	document.execCommand("copy");
	document.body.removeChild(aux);
}

function launchToast() {
	var screen1500 = window.matchMedia("screen and (max-width: 1500px)");
	var toastCopied = document.getElementById('toastCopied');
	var iconoCopiarEmail = document.getElementById('iconoCopiarEmail');
	copiarAlPortapapeles('emailToCopy');
	toastCopied.style.display = "inline";
	iconoCopiarEmail.style.display = "none";
    setTimeout(function(){	
    	toastCopied.style.display = "none";
    	iconoCopiarEmail.style.display = "inline";
      }, 4000);
}

