// Almacenar el slider 
var slider = $('#slider');
alert()
// Almacenar botones
var siguiente = $('#btn-next');
var anterior = $('#btn-prev');

var auto_play = true;
var interval;
var current_slide=1;

var num_images;

function checkPage(){
	var url = window.location.href;
	var urlSplitted = url.split('?');
	var actualPage = urlSplitted[1];
	return actualPage;
}

function createImages(proyecto){

	for (var i = 1; i < num_images+1; i++) {
		//Article
		var article = document.createElement("article");
		article.classList.add('imgGaleria');
		article.classList.add('data-slide-num', i);
		//Img
		var img = document.createElement("img");
		if (proyecto=="proyecto=abaco") {
			var imgGaleria_src= "../img/galeria/Abaco/AbacoContacto" + i + ".png";
		}else if (proyecto=="proyecto=senderismo") {
			var imgGaleria_src= "../img/galeria/SenderismoGC/Senderismo" + i + ".png";
		}
		var imgGaleria_alt = "imgGaleria" + i;
		var imgGaleria_id= "imgGaleria" + i;
		img.setAttribute("src", imgGaleria_src);
		img.setAttribute("alt", imgGaleria_alt);
		//img.setAttribute("id", imgGaleria_id);
		//Slider-selectors
		var slider_selectors = document.getElementsByClassName('slider-selectors')[0];
		var span = document.createElement("span");
		span.classList.add('selector');
		span.setAttribute('data-slide', i);
		if(i==1){
			span.classList.add('current-slide');
		}
		//Añadir al HTML
		//slider.appendChild(article);
		article.appendChild(img);
		slider_selectors.appendChild(span);
	}
	
}

function managementGalery(){
	var actualPage = checkPage();
	var obj_nombreProyecto = document.getElementById("nombreProyectoActual");
	var boton_atras = document.getElementById('atras');

	switch(actualPage){
		case "proyecto=abaco":
			obj_nombreProyecto.innerHTML = "Abaco";
			num_images = 2;
			createImages(actualPage);
			break;
		case "proyecto=senderismo":
			obj_nombreProyecto.innerHTML = "SenderismoGC";
			num_images = 7;
			createImages(actualPage);
			break;
		default:
			alert("Proyecto no encontrado");
			boton_atras.click();
	}

	slider.style.width = (num_images)*100 + "%";
}

managementGalery();
// ---------------     Funcionamiento del slider     ---------------


$(document).ready(function () {
    
// Quiero que la última imagen se inserte antes de la primera imagen 
//$('#slider article:last').insertBefore('#slider article:first');
var first = slider.children().first().clone();
    var last = slider.children().last().clone();
    first.removeAttr('data-slide-num');
    last.removeAttr('data-slide-num');
    slider.children().first().before(last);
    slider.children().last().after(first);
slider.css('margin-left', '-100%');

    
// Mostrar la primera imagen con un margen de -100%
//slider.css('margin-left','-' + 100 + '%');

// Cuando le dé click al boton siguiente se moverá la img a la derecha
siguiente.on('click',function(){
    if (auto_play)
            resetInterval();
    moverDerecha();

});

// Cuando le dé click al boton anterior se moverá la img a la izquierda
anterior.on('click',function(){
    if (auto_play)
            resetInterval();
    moverIzquierda();

});
$(".selector").click(function() {
    if (auto_play)
        resetInterval();
    goTo($(this).attr('data-slide'));
});

if (auto_play)
    interval = setInterval(moverDerecha, 7000);

});

function moverDerecha () {
   
slider.animate({
        'margin-left':'-=100%'
    }, 600, function() {
        if (current_slide == num_images) {
            slider.css('margin-left', '-100%');
            current_slide = 1;
        } else {
            current_slide++;
        }
        refreshCurrentSelector();
    });

    /*slider.animate({marginLeft:'-'+ 100 + '%'},800, // 800 es el tiempo en que pasa cada img
        function(){
            if (current_slide == num_images) {
                slider.css('margin-left', '-100%');
                current_slide = 1;
            } else {
                current_slide++;
            }
        refreshCurrentSelector();
        // Quiero que la primera imagen se inserte despues de la última imagen
       // $('#slider article:first').insertAfter('#slider article:last');
        //slider.css('margin-left','-' + 100 + '%');// Vuelvo a ponerlo a -100% porque ahora estoy viendo la primera imagen
    });
*/
    

}

function moverIzquierda () {


slider.animate({
        'margin-left':'+=100%'
    }, 800, function() {
        if (current_slide == 1) {
            slider.css('margin-left', '-'+(num_images*100)+'%');
            current_slide = num_images;
        } else {
            current_slide--;
        }
        refreshCurrentSelector();
    });


    /*slider.animate({marginLeft:0},800,
        function(){
        if (current_slide == 1) {
            slider.css('margin-left', '-'+(num_images*100)+'%');
            current_slide = num_images;
        } else {
            current_slide--;
        }
        refreshCurrentSelector();
        // Quiero que la última imagen se inserte antes de la primera imagen 
        //$('#slider article:last').insertBefore('#slider article:first');
        //slider.css('margin-left','-' + 100 + '%');// Vuelvo a ponerlo a -100% porque ahora estoy viendo la primera imagen
    });
*/
    

}

function goTo(slide) {
    slider.animate({
        'margin-left':'-'+(slide*100)+'%'
    }, 1000, function() {
        current_slide = slide;
        refreshCurrentSelector();
    });
}

function refreshCurrentSelector() {
    $(".selector.current-slide").removeClass("current-slide");
    $(".selector[data-slide="+current_slide+"]").addClass("current-slide");
    alert(current_slide)
}

function resetInterval(){
    clearInterval(interval);
    interval = setInterval(moverDerecha, 7000);
}
function stopInterval(){
    clearInterval(interval);
}


