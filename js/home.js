//function to roll and update the UI
function HRoll()
{
	var diceCnt = document.getElementById("diceCntSlider").value;
	var random = Roll(diceCnt, currentDiceSides);
	
	document.getElementById("rollresult").innerHTML = random;
	document.getElementById("dicetype").innerHTML = diceCnt + "d" + currentDiceSides;
	
	var d = new Date();
	
	document.getElementById("timestamp").innerHTML = d.toLocaleTimeString();
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

function OnResize() {
	//select things to mod
	var viewrapper = document.getElementById("viewwrapper");
	var rolloutput = document.getElementById("rolloutput");
	var rollcontrols = document.getElementById("rollcontrols");

	// switch to pc layout
	if(window.innerHeight < window.innerWidth)
	{
		if(rolloutput.classList.contains("rolloutput_phone") === true)
		{
			viewrapper.classList.remove("viewrapper_phone");
			viewrapper.classList.add("viewrapper_desktop");
		
			rolloutput.classList.add("rolloutput_desktop");
			rollcontrols.classList.add("rollcontrols_desktop");
		
			rolloutput.classList.remove("rolloutput_phone");
			rollcontrols.classList.remove("rollcontrols_phone");
		}
	}
	// default: use phone layout
	else 
	{	
		if(rolloutput.classList.contains("rolloutput_phone") === false)
		{
			viewrapper.classList.add("viewrapper_phone");
			viewrapper.classList.remove("viewrapper_desktop");
		
			rolloutput.classList.remove("rolloutput_desktop");
			rollcontrols.classList.remove("rollcontrols_desktop");
		
			rolloutput.classList.add("rolloutput_phone");
			rollcontrols.classList.add("rollcontrols_phone");
		}
	}
}

// SET UP
window.addEventListener('load', function () {
	OnResize();
	HRoll();
})
window.addEventListener("resize", OnResize);
document.ontouchmove = function(e){ e.preventDefault(); }
var currentDiceSides = 20;