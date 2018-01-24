$(document).ready(function(){

	//Udemy

	$('.link_udemy').click(function(){
		var course = $(this).attr('course');
		open_course(course);
	});

	$('#container_certificates').click(function(){
		close_course();		
	});

	function open_course(course){
		if(course!=null){
			$('#container_certificates').addClass('opened');
			switch(course){
				case 'WebDesignHTMLCSS':
					$('.container_udemy_course .img_course_udemy1').addClass('opened');
				
				break;
				case 'Bootstrap4':
					$('.container_udemy_course .img_course_udemy2').addClass('opened');
				
				break;
				
				default:
				
				break;
			}
		}
	}	

	//La imagen se cerrará al hacer scroll y al pulsar fuera de la imagen
	function close_course(){

		if($('#container_certificates').hasClass('opened')){
			$('#container_certificates').removeClass('opened');
			$('.container_udemy_course img').removeClass('opened');

		}
	}
				
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
	
	/* Métodos Scroll*/
	$(window).on('scroll', function () {
		home_scroll_arrow();
		content_scroll();
		close_course();
	});

	$(window).on('load', function () {
		content_scroll();
	});

	function home_scroll_arrow(){
		var current_scroll = window.pageYOffset || document.body.scrollTop;
		var flecha="";
		var obj_footer = document.getElementById('footer');
		var position_footer = findPosition(obj_footer) - viewportToPixels('100vh');
		
		if(document.getElementById('home_arrow')!=null){
			flecha=document.getElementById('home_arrow');
			if(current_scroll==0){
				flecha.style.visibility="hidden";
			}else if (current_scroll>0){
				flecha.style.visibility="visible";
			}
			if (current_scroll>=position_footer) {
				flecha.setAttribute('src', 'img/icons/flecha-arriba-white.png');
			}else{
				flecha.setAttribute('src', 'img/icons/flecha-arriba-black.png');
			}
		}
		
	}

	function content_scroll(){
		var current_scroll = window.pageYOffset || document.body.scrollTop;

		//Home

		var texto_portrait_photo = $('#home #portrait_photo');
		var texto_text_header = $('#home .text_header');

		if(current_scroll>=-1){
			texto_portrait_photo.addClass('loaded');
			texto_text_header.addClass('loaded');
		}


		//Sobre Mi

		//Textos Sobre Mi
		var texto_education = $('#container_education p, #container_education h1, #container_education h2, #container_education h3');
		var texto_experience = $('#container_experience p, #container_experience h1, #container_experience h2, #container_experience h3');
		var texto_competences = $('#container_competences p, #container_competences h1, #container_competences h2, #container_competences h3');

		//Posiciones en scroll Sobre Mi //El viewportToPixels es para que la posición cuente nada más aparezca
		var position_education = findPosition(document.getElementById('container_education'))
		- viewportToPixels('90vh');

		var position_experience = findPosition(document.getElementById('container_experience'))
		- viewportToPixels('90vh');

		var position_competences = findPosition(document.getElementById('container_competences'))
		- viewportToPixels('90vh');

		//Detecta posición del objeto en scroll Sobre Mi
		
		if(current_scroll>=position_education){
			texto_education.addClass('loaded');
		}
		if(current_scroll>=position_experience){
			texto_experience.addClass('loaded');
		}
		if(current_scroll>=position_competences){
			texto_competences.addClass('loaded');
		}

		//Proyectos

		//Textos Proyectos
		var texto_cm3ramblas = $('#project_cm3ramblas p, #project_cm3ramblas h1, #project_cm3ramblas h2, #project_cm3ramblas h3, #project_cm3ramblas a, #project_cm3ramblas img, #project_cm3ramblas span');
		var texto_serietoday = $('#project_serietoday p, #project_serietoday h1, #project_serietoday h2, #project_serietoday h3, #project_serietoday a, #project_serietoday img, #project_serietoday span');
		var texto_hibernate = $('#project_hibernate p, #project_hibernate h1, #project_hibernate h2, #project_hibernate h3, #project_hibernate a, #project_hibernate img, #project_hibernate span');
		var texto_abaco = $('#project_abaco p, #project_abaco h1, #project_abaco h2, #project_abaco h3, #project_abaco a, #project_abaco img, #project_abaco span');
		var texto_senderismo = $('#project_senderismo p, #project_senderismo h1, #project_senderismo h2, #project_senderismo h3, #project_senderismo a, #project_senderismo img, #project_senderismo span');
		var texto_diw = $('#project_diw p, #project_diw h1, #project_diw h2, #project_diw h3, #project_diw a, #project_diw img, #project_diw span');
		var texto_trabajosjs = $('#project_trabajosjs p, #project_trabajosjs h1, #project_trabajosjs h2, #project_trabajosjs h3, #project_trabajosjs a, #project_trabajosjs img, #project_trabajosjs span');
		
		//Posiciones en scroll Proyectos //El viewportToPixels es para que la posición cuente nada más aparezca

		var position_cm3ramblas = findPosition(document.getElementById('project_cm3ramblas'))
		- viewportToPixels('90vh');

		var position_serietoday = findPosition(document.getElementById('project_serietoday'))
		- viewportToPixels('90vh');

		var position_hibernate = findPosition(document.getElementById('project_hibernate'))
		- viewportToPixels('90vh');

		var position_abaco = findPosition(document.getElementById('project_abaco'))
		- viewportToPixels('90vh');

		var position_senderismo = findPosition(document.getElementById('project_senderismo'))
		- viewportToPixels('90vh');

		var position_diw = findPosition(document.getElementById('project_diw'))
		- viewportToPixels('90vh');

		var position_trabajosjs = findPosition(document.getElementById('project_trabajosjs'))
		- viewportToPixels('90vh');

		//Detecta posición del objeto en scroll Proyectos		
		
		if(current_scroll>=position_cm3ramblas){
			texto_cm3ramblas.addClass('loaded');
		}
		if(current_scroll>=position_serietoday){
			texto_serietoday.addClass('loaded');
		}
		if(current_scroll>=position_hibernate){
			texto_hibernate.addClass('loaded');
		}
		if(current_scroll>=position_abaco){
			texto_abaco.addClass('loaded');
		}
		if(current_scroll>=position_senderismo){
			texto_senderismo.addClass('loaded');
		}
		if(current_scroll>=position_diw){
			texto_diw.addClass('loaded');
		}
		if(current_scroll>=position_trabajosjs){
			texto_trabajosjs.addClass('loaded');
		}
	}
	
	function viewportToPixels(value) {/*value=100vh, por ejemplo*/
		var parts = value.match(/([0-9\.]+)(vh|vw)/)
		var q = Number(parts[1])
		var side = window[['innerHeight', 'innerWidth'][['vh', 'vw'].indexOf(parts[2])]]
		return side * (q/100)
	}
	
});