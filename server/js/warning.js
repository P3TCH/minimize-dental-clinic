btn.onclick = function() {
	modal.style.display = "block";
	}

	span.onclick = function() {
	modal.style.display = "none";
	}

	window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
	}

	btn1.onclick = function() {
		modal.style.display = "none";
	}

	function showwarning(){

		if (real <= 20){
			title.innerHTML = "That's cold";
			p2.innerHTML = "The weather is cold, make sure you keep yourself warm. I care about you ♥";
		}
		else if (real > 30){
			title.innerHTML = "That's hot";
			p2.innerHTML = "The weather is hot. Make sure you put on some sunscreen ♥";
		}
		else{
			title.innerHTML = "Good weather";
			p2.innerHTML = "It's nice weather. Let's do an activity outside ♥";
		}
		p1.innerHTML = `Temporature result: ${real} celsius`;
		modal.style.display = "block";
	}
