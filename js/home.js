document.ontouchmove = function(e){ e.preventDefault(); }

//function to roll and update the UI
function HRoll(diceCnt, diceSides)
{
	var random = Roll(diceCnt, diceSides);
	
	document.getElementById("rollresult").innerHTML = random;
	document.getElementById("dicetype").innerHTML = diceCnt + "d" + diceSides;
	
	var today = new Date();
	
	document.getElementById("timestamp").innerHTML = today;
}

// function to sim rolling a dice
function Roll(diceCnt, diceSides)
{
	var random = 0;
	
	for (var i = 0; i < diceCnt; i++) { 
  	random += Math.floor(Math.random() * diceSides) + 1;
	}
	
	return random;
}