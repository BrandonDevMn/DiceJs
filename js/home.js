//function to roll and update the UI
function HRoll()
{
	var diceCnt = document.getElementById("diceCntSlider").value;
	var rollResult = Roll(diceCnt, currentDiceSides);
	
	var diceName = diceCnt + "d" + currentDiceSides;
	var rollTime = new Date().toLocaleTimeString();
	
	document.getElementById("dicetype").innerHTML = diceName;
	document.getElementById("timestamp").innerHTML = rollTime;
	document.getElementById("rolltotal").innerHTML = rollResult.total;
	
	var html = "";
	if(rollResult.rolls.length == 1)
	{
		html += "<div class='rollresultnodesingle'>" + rollResult.total + "</div>";
	}
	else 
	{
		for (var i = 0; i < rollResult.rolls.length; i++) { 
  		var roll = rollResult.rolls[i];
  		html += "<div class='rollresultnode'>" + roll + "</div>";
		}
	}
	
	document.getElementById("rollresult").innerHTML = html;
}

// function to sim rolling a dice
function Roll(diceCnt, diceSides)
{
	var result = {};
	result.rolls = [];
	result.total = 0;
	
	for (var i = 0; i < diceCnt; i++) { 
  	var roll = Math.floor(Math.random() * diceSides) + 1;
  	result.rolls.push(roll);
  	result.total += roll;
	}
	
	return result;
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

var UIModeSet = false;
function OnResize() {
	//select things to mod
	var viewrapper = document.getElementById("viewwrapper");
	var rolloutput = document.getElementById("rolloutput");
	var rollcontrols = document.getElementById("rollcontrols");

	// switch to pc layout
	var desktopUI = false;
	
	if(window.innerHeight < window.innerWidth)
	{
		desktopUI = true;
	}
	
	if(desktopUI === true)
	{
		if(UIModeSet === true)
		{
			viewrapper.classList.remove("viewrapper_phone");
			rolloutput.classList.remove("rolloutput_phone");
			rollcontrols.classList.remove("rollcontrols_phone");
		}
	
		viewrapper.classList.add("viewrapper_desktop");
		rolloutput.classList.add("rolloutput_desktop");
		rollcontrols.classList.add("rollcontrols_desktop");
	}
	// default: use phone layout
	else {
		if(UIModeSet === true)
		{
			viewrapper.classList.remove("viewrapper_desktop");
			rolloutput.classList.remove("rolloutput_desktop");
		rollcontrols.classList.remove("rollcontrols_desktop");
		}
		
		viewrapper.classList.add("viewrapper_phone");
		rolloutput.classList.add("rolloutput_phone");
		rollcontrols.classList.add("rollcontrols_phone");
	}
	
	UIModeSet = true;
}

// SET UP
window.addEventListener('load', function () {
	OnResize();
	HRoll();
})
window.addEventListener("resize", OnResize);
document.ontouchmove = function(e){ e.preventDefault(); }
var currentDiceSides = 20;