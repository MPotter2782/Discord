	var chara = [];
	var init = [];
	
	function tryThis(){
		chara.push(document.getElementById("Character").value);
		init.push(document.getElementById("Initiative").value);
		
		charaText = "<ul>";
		for (i = 0; i < chara.length; i++) {
			charaText += "<li>" + chara[i] + "</li>";
		}
		charaText += "</ul>";
		
		initText = "<ul>";
		
		for (i = 0; i < init.length; i++) {
			initText += "<li>" + init[i] + "</li>";
		}
		initText += "</ul>";
		document.getElementById("demo1").innerHTML = charaText;
		document.getElementById("demo2").innerHTML = initText;
	}

		var sec = 0;
		var round = 0;
		var min = 0;
	function trackTime(){
		sec += 6;
		round += 1;
		
		if(sec == 60){
			min += 1;
			sec = 0;
		}
		document.getElementById("lengthSec").innerHTML = min + " minutes and " + sec + " seconds";
		document.getElementById("lengthRound").innerHTML = round + " rounds";
	}