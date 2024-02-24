$(document).ready(function () {
	// Img lazy loading
	function lazyLoading() {
		const lazyImages = document.querySelectorAll('img[loading="lazy"]');

		const lazyLoad = (image) => {
			image.src = image.dataset.src;
			image.removeAttribute('data-src');
		};

		const options = {
			root: null,
			rootMargin: '0px',
			threshold: 0.1,
		};

		const observer = new IntersectionObserver((entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					lazyLoad(entry.target);
					observer.unobserve(entry.target);
				}
			});
		}, options);

		lazyImages.forEach((image) => {
			observer.observe(image);
		});
	}

	/* Métodos Scroll*/
	$(window).on('scroll', function () {
		home_scroll_arrow();
	});

	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
		anchor.addEventListener('click', function (e) {
			e.preventDefault();

			document.querySelector(this.getAttribute('href')).scrollIntoView({
				behavior: 'smooth'
			});
		});
	});

	document.getElementById("select_ordenar_experiencias").addEventListener("change", function () {
		ordenarDivsExperiencias();
	});

	document.getElementById("select_ordenar_proyectos").addEventListener("change", function () {
		ordenarDivsProyectos();
	});

	var textos = [];
	var textos_listas = [];

	$('.container_ver_mas p').each(function (index) {
		//Guardamos todo el contenido
		$(this).attr('data-index', index);
		var texto = $(this).html().trim().replace(/,/g, 'a1b2c3');
		textos.push(texto);
		var palabras = texto.split(' ');
		palabras.forEach(function (elemento, indice) {
			palabras[indice] = elemento.replace(/a1b2c3/g, ',');
		});


		$(this).siblings('.resultado').append(index);
		var nuevoContenido = '<p>' + palabras.slice(0, 10).join(' ').replace(/a1b2c3/g, ',') + ' ...</p>';
		$(this).html(nuevoContenido);

		$(this).append('<span class="see_more" ' + 'data-index="' + index + '">Leer más »</span>');
		$('.see_more').click(function () {
			var thisIndex = $(this).data('index');
			$('.container_ver_mas p[data-index="' + thisIndex + '"]').html(textos[thisIndex].replace(/a1b2c3/g, ','));
		});

	});

	$('.container_ver_mas_listas').each(function (listas) {
		//Guardamos todo el contenido
		$(this).attr('data-listas', listas);
		var texto = $(this).html().trim().replace(/,/g, 'a1b2c3');
		textos_listas.push(texto);
		var palabras = texto.split(' ');
		palabras.forEach(function (elemento, indice) {
			palabras[indice] = elemento.replace(/a1b2c3/g, ',');
		});


		$(this).siblings('.resultado').append(listas);
		var nuevoContenido = '<p>' + palabras.slice(0, 10).join(' ').replace(/a1b2c3/g, ',') + ' ...</p>';
		$(this).html(nuevoContenido);

		$(this).append('<span class="see_more_listas" ' + 'data-listas="' + listas + '">Leer más »</span>');
		$('.see_more_listas').click(function () {
			var thislista = $(this).data('listas');
			$('.container_ver_mas_listas[data-listas="' + thislista + '"]').html(textos_listas[thislista].replace(/a1b2c3/g, ','));
		});

	});

	function home_scroll_arrow() {
		var current_scroll = window.pageYOffset || document.body.scrollTop;
		var flecha = "";

		if (document.getElementById('home_arrow') != null) {
			flecha = document.getElementById('home_arrow');
			if (current_scroll == 0) {
				flecha.style.visibility = "hidden";
			} else if (current_scroll > 0) {
				flecha.style.visibility = "visible";
			}
		}

	}

	function ordenarDivsExperiencias() {
		var selectElement = document.getElementById("select_ordenar_experiencias");
		var selectedValue = selectElement.value;

		var divContainer = document.querySelector("#page_experiencias article .container");
		var divs = Array.from(divContainer.getElementsByClassName("container_experiencia"));

		divs.sort(function (a, b) {
			var fechaInicioA = new Date(a.getAttribute("data-fecha-inicio"));
			var fechaFinA = new Date(a.getAttribute("data-fecha-fin"));
			var duracionA = fechaFinA - fechaInicioA;

			var fechaInicioB = new Date(b.getAttribute("data-fecha-inicio"));
			var fechaFinB = new Date(b.getAttribute("data-fecha-fin"));
			var duracionB = fechaFinB - fechaInicioB;

			if (selectedValue === "fecha_ascendente") {
				return fechaFinA - fechaFinB;
			} else if (selectedValue === "fecha_descendente") {
				return fechaFinB - fechaFinA;
			} else if (selectedValue === "duracion_ascendente") {
				return duracionA - duracionB;
			} else if (selectedValue === "duracion_descendente") {
				return duracionB - duracionA;
			}
		});

		divs.forEach(function (div) {
			divContainer.appendChild(div);
		});
	}

	function ordenarDivsProyectos() {
		var selectElement = document.getElementById("select_ordenar_proyectos");
		var selectedValue = selectElement.value;

		var divContainer = document.querySelector("#page_proyectos article .container");
		var divs = Array.from(divContainer.getElementsByClassName("container_proyecto"));

		divs.sort(function (a, b) {
			var fechaFinA = new Date(a.getAttribute("data-fecha-fin"));

			var fechaFinB = new Date(b.getAttribute("data-fecha-fin"));

			if (selectedValue === "fecha_ascendente") {
				return fechaFinA - fechaFinB;
			} else if (selectedValue === "fecha_descendente") {
				return fechaFinB - fechaFinA;
			}
		});

		divs.forEach(function (div) {
			divContainer.appendChild(div);
		});
	}
});