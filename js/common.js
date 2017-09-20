$(document).ready(function(){

});
/* Common */

function findPosition(obj) {
    var navPosition = 37;
	if(window.innerWidth>=1024){
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
		case "proyecto-abaco":
			window.scroll(0,findPosition(document.getElementById(content)));
			break;
		case "footer":
			window.scroll(0,findPosition(document.getElementById(content)));
			break;
		default:
			window.location.reload(true);
	}
}


/* Flecha Scroll Subir*/

function flechaSubirScroll(){
	var currentScroll = window.pageYOffset || document.body.scrollTop;
	var flecha="";
	var obj_footer = document.getElementById('footer');
	var vh_pixels = viewportToPixels('100vh');
	var position_footer = findPosition(obj_footer) - vh_pixels;

	if(document.getElementById('flechaSubir')!=null){
	flecha=document.getElementById('flechaSubir');
		if(currentScroll==0){
			flecha.style.visibility="hidden";
		}else if (currentScroll>0){
			flecha.style.visibility="visible";
		}
		if (currentScroll>=position_footer) {
			flecha.setAttribute('src', 'img/icons/flecha-arriba-white.png');
		}else{
			flecha.setAttribute('src', 'img/icons/flecha-arriba-black.png');
		}
	}

}

function viewportToPixels(value) {/*value=100vh, por ejemplo*/
  var parts = value.match(/([0-9\.]+)(vh|vw)/)
  var q = Number(parts[1])
  var side = window[['innerHeight', 'innerWidth'][['vh', 'vw'].indexOf(parts[2])]]
  return side * (q/100)
}