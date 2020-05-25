document.ontouchmove = function(e){ e.preventDefault(); }
var currentDiceSides = 20;

//function to roll and update the UI
function HRoll()
{
	var diceCnt = document.getElementById("diceCntSlider").value;
	var random = Roll(diceCnt, currentDiceSides);
	
	document.getElementById("rollresult").innerHTML = random;
	document.getElementById("dicetype").innerHTML = diceCnt + "d" + currentDiceSides;
	
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

function OnSlide() 
{
	var val = document.getElementById("diceCntSlider").value;
	document.getElementById("sliderlabel").innerHTML = val;
}

function OnDiceClick(diceSides) 
{
	currentDiceSides = diceSides;

	var oldDice = document.getElementsByClassName("selectedDice")[0];
	
	oldDice.classList.remove("selectedDice");

	var selDice = document.getElementById("d" + diceSides + "icon");
	
	selDice.classList.add("selectedDice");
	
	
	HRoll();
}