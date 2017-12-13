
			var contador=0;
			var cuenta=0;
			var bucle;
			var cara=0;
			var cruz=0;
				
				function lanzar(){
					bucle=setInterval(cambioMoneda, 300);
					boton.disabled=true;
					document.getElementById("movimiento").style.WebkitAnimationPlayState = "running";
					document.getElementById("mano").src="../../img/trabajosJS/pulgar.png";
				}
				function cambioMoneda() {
					cuenta=cuenta % 2;
					
					if (cuenta==1){
						document.getElementById("moneda").src="../../img/trabajosJS/euro-cara.png";
					}else{
						document.getElementById("moneda").src="../../img/trabajosJS/euro-cruz.png";
					}
					cuenta++;
					
					if(contador==6){
						contador=0;
						clearInterval(bucle);
						monedaFinal();
						boton.disabled=false;
					}else{
						contador++;
					}
				}
		
				function monedaFinal(){
					var numero=Math.floor(Math.random() * 2);
					
					if (numero==0){
						document.getElementById("moneda").src="../../img/trabajosJS/euro-cara.png";
						cara++;
						if(cara==1) document.getElementById("cara").innerHTML = "Ha salido cara " + cara + " vez.";
						else document.getElementById("cara").innerHTML = "Ha salido cara " + cara + " veces.";
					}else {
						document.getElementById("moneda").src="../../img/trabajosJS/euro-cruz.png";
						cruz++;
						if(cruz==1) document.getElementById("cruz").innerHTML = "Ha salido cruz " + cruz + " vez.";
						else document.getElementById("cruz").innerHTML = "Ha salido cruz " + cruz + " veces.";
					}
					document.getElementById("movimiento").style.WebkitAnimationPlayState = "paused";
					document.getElementById("mano").src="../../img/trabajosJS/puño.png";
					
					document.getElementById("results").style.visibility="visible";
				}
			