
/*function iconoElegido(elegido){
	iconos=document.getElementsByClassName("iconos");
	for(var i=0;i<iconos.length;i++){
		iconos[i].style.display="none";
	}
	elegido.style.display="inline-block";
	document.getElementById("cajaElegida").style.display="block";
}*/

function armarSobreMi(){
	document.getElementById('panel1').style.animationPlayState='running';
	setTimeout(function() {document.getElementById('panel1').style.animationPlayState='paused'}, 1750);
}
function desarmarSobreMi(){
	document.getElementById('panel1').style.animationDirection='reverse';
	document.getElementById('panel1').style.animationPlayState='running';
	setTimeout(function() {document.getElementById('panel1').style.animationPlayState='paused'}, 1750)

}
function iconoCaso(){
	
}