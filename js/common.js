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
		case "footerContacto":
			window.scroll(0,findPosition(document.getElementById(content)));
			break;
		default:
			window.location.reload(true);
	}
}

function styleNavResponsive(){

	if(window.innerWidth<=700){ //Mobile
		
		for (var i =0; i < document.querySelectorAll(".material-icons").length; i++) {
        	document.querySelectorAll(".material-icons")[i].classList.add("c-white");

    	}
		for (var i =0; i < document.querySelectorAll(".input-group-addon").length; i++) {
        	document.querySelectorAll(".input-group-addon")[i].classList.add("bg-black");

    	}
	}
	if(window.innerWidth>700){ //Tablet
		
		for (var i =0; i < document.querySelectorAll(".material-icons").length; i++) {
        	document.querySelectorAll(".material-icons")[i].classList.remove("c-white");

    	}
		for (var i =0; i < document.querySelectorAll(".input-group-addon").length; i++) {
        	document.querySelectorAll(".input-group-addon")[i].classList.remove("bg-black");

    	}
	}
}

styleNavResponsive();
var mql = window.matchMedia("screen and (max-width: 700px)");
mql.addListener(styleNavResponsive);