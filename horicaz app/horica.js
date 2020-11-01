var vraag
let fris = 0
let bier = 0
let wijn = 0
let bb8 = 0	
let bb16 = 0



function vraag2(){
	vraag=prompt("wat wil je bestellen wijn kost $4.25, bier kost $2.85 of fris kost $1.95. type snack om bitterballen te bestellen als u klaar bent zeg dan stop.")
		if (vraag == "wijn"){
			var aantalwijn = prompt("hoeveel wijn wilt u bestellen?")
			wijn = aantalwijn * 4.25
			document.write(aantalwijn +" "+ "wijn-" + wijn + "euro" + "<br/>")
			vraag2();



		}
		else if (vraag == "bier"){
			var aantalbier = prompt("hoeveel bier wilt u bestellen?")
			bier = aantalbier * 2.85
			document.write(aantalbier +" "+ "bier-" + bier + "euro" + "<br/>")
			vraag2();



		}
		else if (vraag == "fris" ){
			var aantalfris = prompt("hoveel fris wilt u bestellen?")
			fris = aantalfris * 1.95
			document.write(aantalfris +" "+ "fris-" + fris + "euro" + "<br/>")
			vraag2();



		}
		
		else if (vraag == "snack"){
			var aantalbb = prompt("hoeveel bitterballen wil je 8 of 16")
				
			if (aantalbb == "8"){
				bb8 = aantalbb * 0.50
				document.write(aantalbb +" "+ "bitterballen-" + bb8 + "euro" + "<br/>")
					vraag2();

			}
			else if (aantalbb == "16"){
				 
			 	bb16 = aantalbb * 0.50
				document.write(aantalbb +" "+ "bitterballen-" + bb16 + "euro" + "<br/>")
				vraag2();

			}
			else{
				alert("dit is niet een hoeveelheid waar in wij bitterballen verkopen")
				vraag2();
			}
		}
		else if (vraag == "stop"){
					var totaal = wijn + bier + fris + bb8 + bb16
					document.write("totaal =" +" "+ totaal + "euro")
				}


		
		else{
			alert("U heeft een ongeldige invoer gedaan. Uw bestelling kan niet worden toegevoegd.")
			vraag2();
		}
	}		


vraag2();