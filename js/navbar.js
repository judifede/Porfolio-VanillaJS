function estadoScroll(){
	flechaSubirScroll();
	NavBarScrollTablet();
}

function NavBarScrollTablet() {

	var obj_nav = document.getElementsByTagName('nav')[0];
	var input_group_p = "";

	if(window.innerWidth>768 && window.innerWidth<1024){ //Tablet
		var currentScroll = window.pageYOffset || document.body.scrollTop;
		var obj_pageSobreMi = document.getElementById('pageSobreMi');
		var position_pageSobreMi = findPosition(obj_pageSobreMi)-37;
		

		if (currentScroll>=position_pageSobreMi) {
			if (obj_nav.classList.contains('navbar-out')) {
				obj_nav.classList.add('navbar-fixed-top');
				obj_nav.classList.remove('navbar-out');
				input_group_p = document.querySelectorAll('.input-group p');
				for (var i =0; i < input_group_p.length; i++) {
		        	input_group_p[i].classList.remove('input-text-down');
					input_group_p[i].classList.add('input-text-up');
		    	}
				
			}
		}else{
			if (obj_nav.classList.contains('navbar-fixed-top')) {
				obj_nav.classList.add('navbar-out');
				obj_nav.classList.remove('navbar-fixed-top');
				for (var i =0; i < input_group_p.length; i++) {
		        	input_group_p[i].classList.add('input-text-down');
					input_group_p[i].classList.remove('input-text-up');
		    	}
			}

		}
	}else if (window.innerWidth>1024) { //Escritorio
		if (obj_nav.classList.contains('navbar-fixed-top')) {
				obj_nav.classList.add('navbar-out');
				obj_nav.classList.remove('navbar-fixed-top');
			}
	}
}

function styleNavResponsive(){

	var navbar_icons = document.querySelectorAll('.navbar-icons');
	var navbar_addon = document.querySelectorAll('.navbar-addon');
	var input_group_p = document.querySelectorAll('.input-group p');
	var obj_nav = document.getElementsByTagName('nav')[0];

	if(window.innerWidth<=768){ //Mobile

		if (obj_nav.classList.contains('navbar-out')) {
			obj_nav.classList.add('navbar-fixed-top');
			obj_nav.classList.remove('navbar-out');
		}
		for (var i =0; i < input_group_p.length; i++) {
        	input_group_p[i].classList.add('input-text-down');
			input_group_p[i].classList.remove('input-text-up');
    	}

		for (var i =0; i < navbar_icons.length; i++) { //Iconos NavBar
        	navbar_icons[i].classList.add('c-white');
    	}
		for (var i =0; i < navbar_addon.length; i++) { //Fondo Texto NavBar
        	navbar_addon[i].classList.add('bg-black');
    	}
	}else if(window.innerWidth>768 && window.innerWidth<1024){ //Tablet
		for (var i =0; i < navbar_icons.length; i++) { //Iconos NavBar
        	navbar_icons[i].classList.remove('c-white');
    	}
		for (var i =0; i < navbar_addon.length; i++) { //Fondo Texto NavBar
        	navbar_addon[i].classList.remove('bg-black');
    	}
	}else if(window.innerWidth>1024){ //Escritorio
		if (obj_nav.classList.contains('navbar-fixed-top')) {
			obj_nav.classList.add('navbar-out');
			obj_nav.classList.remove('navbar-fixed-top');
		}
	}
	NavBarScrollTablet();
}

styleNavResponsive();
var screen = window.matchMedia('screen and (min-width: 768px)');
screen.addListener(styleNavResponsive);
