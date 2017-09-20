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