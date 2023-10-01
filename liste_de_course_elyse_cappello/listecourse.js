let intro = document.getElementById("explication");
intro.textContent = "De quoi avez-vous besoin ?";

var liste = []; // tableau qui contiendra les données entrées

		function ajouter() {
			var valeur = document.getElementById("input").value; 
			liste.push(valeur);
			document.getElementById("input").value = "";
			majListe(); 
		}

		function reset() {
			liste = []; 
			majListe(); 
		}

		function supprimer(index) {
			liste.splice(index, 1); 
			majListe(); 
		}

		function majListe() {
			var ul = document.getElementById("liste"); 
			ul.innerHTML = ""; 
			for (var i = 0; i < liste.length; i++) { 
				var li = document.createElement("li"); 
				li.appendChild(document.createTextNode(liste[i])); 
				var suppr = document.createElement("button"); 
				suppr.appendChild(document.createTextNode("-")); 
				(function(index){ 
					suppr.addEventListener("click", function(){ 
						supprimer(index); 
					});
				})(i);
				li.appendChild(suppr); 
				ul.appendChild(li); 
			}
		}