// Almacenar el slider 
var slider = $('#slider');
// Almacenar botones
var siguiente = $('#btn-next');
var anterior = $('#btn-prev');
var interval;
// Quiero que la última imagen se inserte antes de la primera imagen 
$('#slider section:last').insertBefore('#slider section:first');

// Mostrar la primera imagen con un margen de -100%
slider.css('margin-left','-' + 100 + '%');

function moverDerecha () {
    slider.animate({marginLeft:'-'+ 200 + '%'},700, // 700 es el tiempo en que pasa cada img
        function(){
        // Quiero que la primera imagen se inserte despues de la ultima imagen
        $('#slider section:first').insertAfter('#slider section:last');
        slider.css('margin-left','-' + 100 + '%');// Vuelvo a ponerlo a -100% porque ahora la primera imagen que estoy viendo
    });

}

function moverIzquierda () {
    slider.animate({marginLeft:0},700,
        function(){
        // Quiero que la ultima imagen se inserte antes de la primera imagen 
        $('#slider section:last').insertBefore('#slider section:first');
        slider.css('margin-left','-' + 100 + '%');// Vuelvo a ponerlo a -100% porque ahora la primera imagen que estoy viendo
    });

}

// Cuando le dé click al boton siguiente se moverá la img a la derecha
siguiente.on('click',function(){
    moverDerecha();
});

// Cuando le dé click al boton anterior se moverá la img a la izquierda
anterior.on('click',function(){
    moverIzquierda();
});

function autoplay() {
    interval = setInterval(function(){
        moverDerecha();
    }, 4000);
}
function stop(){
    clearInterval(interval);
}
autoplay();
