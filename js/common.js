$(document).ready(function(){
	/* Métodos Scroll*/
	$(window).on('scroll', function () {
		home_scroll_arrow();
	});

	var textos = [];

	$('.text_see_more').each(function(index) { // Iteramos a través de cada elemento con la clase "texto-a-contar"
		$(this).attr('data-index', index);
		var texto = $(this).html().trim().replace(/,/g, 'a1b2c3'); // Obtenemos el contenido de texto del elemento actual y eliminamos espacios en blanco adicionales
		textos.push(texto);
		var palabras = texto.split(' '); // Dividimos el texto en un array de palabras
		palabras.forEach(function(elemento, indice) {
			palabras[indice] = elemento.replace(/a1b2c3/g, ',');
		});
		
		
		var numeroPalabras = palabras.length; // Contamos el número de palabras en el array
		//$(this).siblings('.resultado').append(numeroPalabras); // Agregamos el número de palabras al elemento hermano con la clase "resultado-contador"
		//$(this).siblings('.resultado').append(texto.slice(0, 20)); // Agregamos el número de palabras al elemento hermano con la clase "resultado-contador"
		$(this).siblings('.resultado').append(index); // Agregamos el número de palabras al elemento hermano con la clase "resultado-contador"
		var nuevoContenido = '<p>' + palabras.slice(0, 10).join(' ').replace(/a1b2c3/g, ',') + ' ...</p>';
		$(this).html(nuevoContenido); // Obtenemos el contenido de texto del elemento actual y eliminamos espacios en blanco adicionales

		$(this).append('<span class="seeMore" ' + 'data-index="' + index + '">Leer más »</span>');
		$('.seeMore').click(function() {
			// Deshacemos los cambios realizados y restauramos el contenido original del elemento
			var thisIndex = $(this).data('index');
			$('.text_see_more[data-index="' + thisIndex + '"]').html(textos[thisIndex].replace(/a1b2c3/g, ','));
		  });

	});

	function home_scroll_arrow(){
		var current_scroll = window.pageYOffset || document.body.scrollTop;
		var flecha="";
		
		if(document.getElementById('home_arrow')!=null){
			flecha=document.getElementById('home_arrow');
			if(current_scroll==0){
				flecha.style.visibility="hidden";
			}else if (current_scroll>0){
				flecha.style.visibility="visible";
			}
		}
		
	}
});