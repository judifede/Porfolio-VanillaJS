$(document).ready(function(){
	/* Métodos Scroll*/
	$(window).on('scroll', function () {
		home_scroll_arrow();
	});

	var textos = [];

	$('.text_see_more').each(function(index) { 
		$(this).attr('data-index', index);
		var texto = $(this).html().trim().replace(/,/g, 'a1b2c3'); 
		textos.push(texto);
		var palabras = texto.split(' '); 
		palabras.forEach(function(elemento, indice) {
			palabras[indice] = elemento.replace(/a1b2c3/g, ',');
		});
		
		
		$(this).siblings('.resultado').append(index); 
		var nuevoContenido = '<p>' + palabras.slice(0, 10).join(' ').replace(/a1b2c3/g, ',') + ' ...</p>';
		$(this).html(nuevoContenido); 

		$(this).append('<span class="seeMore" ' + 'data-index="' + index + '">Leer más »</span>');
		$('.seeMore').click(function() {
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