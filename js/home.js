function HRoll(diceCnt, diceSides)
{
	var random = 0;
	
	for (var i = 0; i < diceCnt; i++) { 
  	random += Math.floor(Math.random() * diceSides) + 1;
	}
	
	document.getElementById("rollresult").innerHTML = random;
	document.getElementById("dicetype").innerHTML = diceCnt + "d" + diceSides;
	
	var today = new Date();
	
	document.getElementById("timestamp").innerHTML = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
}