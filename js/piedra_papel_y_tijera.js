
			var contador=0;
			var cuenta=1;
			var bucle;
			var numeroCPU;
			var G=0;
			var E=0;
			var P=0;
			
			function jugar(){
				bucle=setInterval(cambiaOpcion,250);
				botonJ.disabled=true;
				if(document.getElementById("Piedra").checked){
					document.getElementById("User").src="../../img/trabajosJS/piedraUser.png";
				}else if(document.getElementById("Papel").checked){
					document.getElementById("User").src="../../img/trabajosJS/papelUser.png";
				}else if(document.getElementById("Tijeras").checked){
					document.getElementById("User").src="../../img/trabajosJS/tijeras.png";
				}else{
					alert("Seleccione una opción para jugar.");
					botonJ.disabled=false;
					clearInterval(bucle);
				}
			}
				
			function cambiaOpcion() {
					
				if (cuenta==1){
					document.getElementById("CPU").src="../../img/trabajosJS/piedraCPU.png";
					
				}else if(cuenta==2){
							document.getElementById("CPU").src="../../img/trabajosJS/papelCPU.png";
					}else{
							document.getElementById("CPU").src="../../img/trabajosJS/tijeras.png";
							cuenta=0;
						}
				cuenta++;
				if(contador==7){
					contador=0;
					clearInterval(bucle);
					jugadaFinal();
					formula();
					botonJ.disabled=false;
				}else{
					contador++;
				}
			}
			
			function jugadaFinal(){
				numeroCPU=Math.floor(Math.random() * 3);
				if (numeroCPU==0){
					document.getElementById("CPU").src="../../img/trabajosJS/piedraCPU.png";
				}else if(numeroCPU==1){
					document.getElementById("CPU").src="../../img/trabajosJS/papelCPU.png";
				}else{
					document.getElementById("CPU").src="../../img/trabajosJS/tijeras.png";
				}	
			}
			
			function formula(){
				if( numeroCPU == 0 && document.getElementById("Tijeras").checked ||
					numeroCPU == 1 && document.getElementById("Piedra").checked ||
					numeroCPU == 2 && document.getElementById("Papel").checked)
				{
					document.getElementById("Resultado").innerHTML = "¡HAS PERDIDO!";
					P++;
					document.getElementById("P").innerHTML = "Perdidas:   " + P;
				}
				else if (numeroCPU == 0 && document.getElementById("Papel").checked ||
					numeroCPU == 1 && document.getElementById("Tijeras").checked ||
					numeroCPU == 2 && document.getElementById("Piedra").checked)
				{
			           document.getElementById("Resultado").innerHTML = "¡HAS GANADO!";
					   G++;
					   document.getElementById("G").innerHTML = "Ganadas:   " + G;
				}
				else{
					document.getElementById("Resultado").innerHTML = "¡HAS EMPATADO!";
					E++;
					document.getElementById("E").innerHTML = "Empatadas:   " + E;
				}
			}			