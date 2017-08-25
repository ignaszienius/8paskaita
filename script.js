
	var random,plus,minus;



	function getrandom() {
			cleartable();
			random = Math.floor(Math.random() * 5) ;
			document.getElementById(random).style.backgroundColor = "red";	

	}

	function cleartable()  {
			for (var i = 0 ; i <=4 ; i++) {
				document.getElementById(i).style.backgroundColor = "grey";		
			}
		}

	function minus1() {
		if(random == 0) {

		}
		else {
			cleartable();
			minus = random - 1;
			document.getElementById(minus).style.backgroundColor = "red";
			random = minus;
		}
	}

	function plius1() {
		if(random == 4) {

		}

		else {
			cleartable();
			plus = random + 1;
			document.getElementById(plus).style.backgroundColor = "red";
			random = plus;
		}
	}