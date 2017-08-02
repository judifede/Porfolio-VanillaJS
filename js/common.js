$(document).ready(function(){

});
/* Flecha Scroll Subir*/
function estadoScroll(){
	var currentScroll = window.pageYOffset || document.body.scrollTop;
	var flecha="";
	var obj_footer = document.getElementById("footer");
	var vh_pixels = viewportToPixels('100vh');
	var position_footer = findPosition(obj_footer) - vh_pixels;

	if(document.getElementById("flechaSubir")!=null){
	flecha=document.getElementById("flechaSubir");
		if(currentScroll==0){
			flecha.style.visibility="hidden";
		}else if (currentScroll>0){
			flecha.style.visibility="visible";
		}
		if (currentScroll>=position_footer) {
			flecha.setAttribute("src", "img/icons/flecha-arriba-white.png");
		}else{
			flecha.setAttribute("src", "img/icons/flecha-arriba-black.png");
		}
	}

}

function viewportToPixels(value) {
  var parts = value.match(/([0-9\.]+)(vh|vw)/)
  var q = Number(parts[1])
  var side = window[['innerHeight', 'innerWidth'][['vh', 'vw'].indexOf(parts[2])]]
  return side * (q/100)
}

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
			alert(findPosition(document.getElementById(content)));
			break;
		case "pageProyectos":
			window.scroll(0,findPosition(document.getElementById(content)));
			alert(findPosition(document.getElementById(content)));
			break;
		case "proyecto-abaco":
			window.scroll(0,findPosition(document.getElementById(content)));
			break;
		case "container-exp-fct":
			window.scroll(0,findPosition(document.getElementById(content)));
			break;
		case "footer":
			window.scroll(0,findPosition(document.getElementById(content)));
			alert(findPosition(document.getElementById(content)));
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
/*
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
	toastCopied.style.visibility = "visible";
	iconoCopiarEmail.style.display = "none";
	toastCopied.scrollIntoView(true);
    setTimeout(function(){	
    	toastCopied.style.visibility = "hidden";
    	iconoCopiarEmail.style.display = "inline";
      }, 4000);
}*/

