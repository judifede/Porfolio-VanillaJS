function findPosition(obj) {
    var navPosition = 37;
	if(screen.width>=1000){
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
