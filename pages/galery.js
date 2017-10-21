var auto_play = true;
var slider;
var slides;
var slideNum;
var current_slide = 1;
var timer;
var num_images;

$(document).ready(function () {
	managementGalery();
	slider = $(".slider");
	slides = $(".slides");
	slideNum = slides.children().length;

	var first = slides.children().first().clone();
	var last = slides.children().last().clone();
	first.removeAttr('data-slide-num');
	last.removeAttr('data-slide-num');
	slides.children().first().before(last);
	slides.children().last().after(first);

	slides.css('margin-left', '-100%');

	$(".prev").click(function() {
		if (auto_play)
			resetTimer();
		prev();
	});
	$(".next").click(function() {
		if (auto_play)
			resetTimer();
		next();
	});
	$(".selector").click(function() {
		if (auto_play)
			resetTimer();
		goTo($(this).attr('data-slide'));
	});

	if (auto_play)
		timer = setInterval(next, 9000);
});

function prev() {
	slides.animate({
		'margin-left':'+=100%'
	}, 600, function() {
		if (current_slide == 1) {
			slides.css('margin-left', '-'+(slideNum*100)+'%');
			current_slide = slideNum;
		} else {
			current_slide--;
		}
		refreshCurrentSelector();
	});
}

function next() {
	slides.animate({
		'margin-left':'-=100%'
	}, 600, function() {
		if (current_slide == slideNum) {
			slides.css('margin-left', '-100%');
			current_slide = 1;
		} else {
			current_slide++;
		}
		refreshCurrentSelector();
	});
}

function goTo(slide) {
	slides.animate({
		'margin-left':'-'+(slide*100)+'%'
	}, 1000, function() {
		current_slide = slide;
		refreshCurrentSelector();
	});
}

function refreshCurrentSelector() {
	$(".selector.current-slide").removeClass("current-slide");
	$(".selector[data-slide="+current_slide+"]").addClass("current-slide");
}

function resetTimer() {
	clearInterval(timer);
	timer = setInterval(next, 9000);
}

function checkPage(){
	var url = window.location.href;
	var urlSplitted = url.split('?');
	var actualPage = urlSplitted[1];
	return actualPage;
}

function createImages(proyecto){

	for (var i = 1; i <= num_images; i++) {
		var article = document.createElement("article");
		article.classList.add('slide2');
		article.setAttribute("data-slide-num", "50");
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
		img.setAttribute("id", imgGaleria_id);

		slider.appendChild(section);
		section.appendChild(img);
	}
	
}

function managementGalery(){
	var actualPage = checkPage();
	var obj_nombreProyecto = document.getElementById("nombreProyectoActual");

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
			
	}

	/*var slider = document.getElementById('slider');
	slider.style.width = (num_images)*100 + "%";*/

}




