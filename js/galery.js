var autoPlay = false;
var slider;
var slides;
var slider_selectors;
var slideNum;
var currentSlide;
var timer;
var num_images;
var img_galery_src;
var big_img = false;

$(document).ready(function () {
    slider = $(".slider");
    slides = $(".slides");
    slider_selectors = $(".slider_selectors");

    // Apertura de Galería
    $('.btn-primary.type_button').click(function(){
        if($(this).attr('project')){
            managementGalery($(this).attr('project'));
            setup_slider();
            $('#container_galery').addClass('opened');
            $('.slider').addClass('opened');
        }

    });
    
    // Cierre de Galería
    $('#container_galery').click(function(){
        close_galery();
        empty_galery();		
    });
    $('.cross_slider').click(function(){
        close_galery();
        empty_galery();		
    });
    $(window).on('scroll', function () {
        close_galery();
        empty_galery();		
    });


    // Botones Galería 

    $(".prev").click(function() {
        resetTimer();
        prev();
    });
    
    $(".next").click(function() {
        resetTimer();
        next();
    });
    
    //Flechas del teclado izquierda y derecha
    $('body').keyup(function (event) {
    
        if (event.keyCode == 37) {
            // Anterior
            prev();
        } else if (event.keyCode == 39) {
            // Siguiente
            next();
        }
    
    }); 

    //Activa el auto play si lo tenemos activado con la variable inicial a true
    if (autoPlay)
        timer = setInterval(next, 9000);
    
});

function setup_slider(){
    currentSlide = 1;
    
    slideNum = slides.children().length;
    
    var first = slides.children().first().clone();
    var last = slides.children().last().clone();
    
    first.removeAttr('data-slide-num');
    last.removeAttr('data-slide-num');
    slides.children().first().before(last);
    slides.children().last().after(first);
    slides.css('margin-left', '-100%');


    // Botones inferiores
    // Para que funcione este evento es necesario que se hayan creado con managementGalery.
    // Porque no hay ninguno en el HTML.
    $(".selector").click(function() {
        resetTimer();
        goTo($(this).attr('data-slide'));
        
    });
}

function prev() {
    slides.animate({
        'margin-left':'+=100%'
    }, 600, function() {
        if (currentSlide == 1) {
            slides.css('margin-left', '-'+(slideNum*100)+'%');
            currentSlide = slideNum;
        } else {
            currentSlide--;
        }
        refreshCurrentSelector();
    });
    
}

function next() {
    slides.animate({
        'margin-left':'-=100%'
    }, 600, function() {
        if (currentSlide == slideNum) {
            slides.css('margin-left', '-100%');
            currentSlide = 1;
        } else {
            currentSlide++;
        }
        refreshCurrentSelector();
    });
    
}

function goTo(slide) {
    slides.animate({
        'margin-left':'-'+(slide*100)+'%'
    }, 1000, function() {
        currentSlide = slide;
        refreshCurrentSelector();
    });
}

function refreshCurrentSelector() {
    $(".selector.current-slide").removeClass("current-slide");
    $(".selector[data-slide="+currentSlide+"]").addClass("current-slide");
}

function resetTimer() {
    if (autoPlay){
        clearInterval(timer);
        timer = setInterval(next, 9000);
    }
}

function close_galery(){
    
    if($('#container_galery').hasClass('opened')){
        $('#container_galery').removeClass('opened');
        $('.slider').removeClass('opened');
    }
}

function empty_galery(){
    resetTimer();
    slides.empty();
    slider_selectors.empty();

}

function managementGalery(project){
   
    switch(project){
        case "cm3ramblas":
            num_images = 4;
            createImages(project);
            break;
        case "serietoday":
            num_images = 4;
            createImages(project);                
            break;
        case "abaco":
            num_images = 2;
            createImages(project);
            break;
        case "senderismo":
            num_images = 7;
            createImages(project);
            break;
        default:
            alert("Proyecto no encontrado");
            break;
    }

}

function createImages(project){
    
    if($('.slides').is(':empty')){  
        for (var i = 1; i < num_images+1; i++) {
            //Cada article
            var article = document.createElement("article");
            article.setAttribute("class", "slide");
            article.setAttribute("data-slide-num", i);
            
            //Img dentro de article
            var img = document.createElement("img");
            src_galery(project, i);
            var img_galery_alt = "img_galery" + i;
            img.setAttribute("src", img_galery_src);
            img.setAttribute("alt", img_galery_alt);

            // big_img -> Para imágenes con una resolución alta y darles un css diferente.
            //Está iniciada a false al principio de este archivo.
            if(big_img){
               img.setAttribute("class", "big_img");  
            }

            //Slider Selectors
            
            var span = document.createElement("span");
            span.setAttribute("class", "selector");
            if(i==1){
                span.setAttribute("class", "selector current-slide");               
            }
            span.setAttribute("data-slide", i);
            
            //Añadir al HTML
            slides.append(article);
            article.append(img);
            slider_selectors.append(span);
        }   
    }
}

function src_galery(project, i){

    // Cada case es un proyecto.
    // big_img -> Para imágenes con una resolución alta y darles un css diferente.
    // Está iniciada a false al principio de este archivo.
    switch(project){
        case 'cm3ramblas':
            img_galery_src= "img/galeria/CentroMédicoTresRamblas/CM3Ramblas" + i + ".png";
            break;
        case 'serietoday':
            img_galery_src= "img/galeria/SerieToday/SerieToday" + i + ".png";
            break;    
        case 'abaco':
            img_galery_src= "img/galeria/Abaco/Abaco" + i + ".png";
            big_img = true;
            break;
        case 'senderismo':
            img_galery_src= "img/galeria/SenderismoGC/Senderismo" + i + ".png";
            big_img = true;
            break;
        default:
            alert("Proyecto no encontrado");
            break;
    }
}

