<script>
	//aprasome kintamuosius
	var random,lucky, ik;
	var gameover = false;
	var lucky = [];
	var luckybiliet = [];

	luckyt();

	function getnumber() {
		if (!gameover) {
			cleartable();
			random = Math.floor(Math.random() * 10) ;
			document.getElementById("currentnumber").innerHTML = random;
			document.getElementById(random).style.backgroundColor = "red";	
			lucky.push(random);
			document.getElementById("luckynumber").innerHTML = lucky;
		}
		checkgameover();
	}

	function cleartable()  {
		for (var i = 0 ; i <=9 ; i++) {
			document.getElementById(i).style.backgroundColor = "orange";		
		}
	}
			
	function checkgameover() {
			if(lucky.length<8) {//zaidimas tesiasi 
		}	
		else {
			alert("Game is over!");
			gameover = true;
			if(lucky === luckybiliet) {
				document.getElementById("luckynumber").style.backgroundColor = "green";
				document.getElementById("luckynumber").innerHTML = "SKAMBUTIS!!!! AUKSO PUODAS";
			}

			else {
				document.getElementById("luckynumber").style.backgroundColor = "red";
				document.getElementById("luckynumber").innerHTML = "nieko nelaimejai lol";
			}
		}
	}

	function luckyt() {
			for (  ; luckybiliet.length<=8 ;  ) {
				ik = Math.floor(Math.random() * 10);
				luckybiliet.push(ik);

			}
			document.getElementById("luckyticket").innerHTML = "Laimingas bilietas yra: " + luckybiliet;
	}	

	function newgame()   {
		if(gameover) {
			gameover = false; // KODEL SITO REIKIA? PASIAISKINTI SU DESTYTOJU
			lucky = [];
			luckybiliet = [];
			document.getElementById("luckynumber").innerHTML = [];
			document.getElementById("currentnumber").innerHTML = [];
			document.getElementById("luckynumber").style.backgroundColor = "orange";
			cleartable();
			luckyt();
			
		}
		else {
			alert("Game is not over yet!");	
		}
	}


</script>