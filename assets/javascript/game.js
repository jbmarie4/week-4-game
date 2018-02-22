var randomNumber = (Math.floor(Math.random()*100));
var purple= (Math.floor(Math.random()*30)+ 1);
var green= (Math.floor(Math.random()*20)+ 1);
var blue= (Math.floor(Math.random()*50)+ 1);
var orange= (Math.floor(Math.random()*10)+ 1);
var totalScore="";
var wins="";
var losses="";


function randomNum (){
	totalScore=0;
	console.log(randomNumber);
	document.getElementById("computerNumber").innerHTML=randomNumber;
	document.getElementById("wins").innerHTML=wins;
	document.getElementById("losses").innerHTML=losses;

}

function purpleTotal (){
	console.log(totalScore + purple);
	console.log(purple);
	if(document.getElementById("btn1").onclick){
		totalScore= totalScore + purple;
		document.getElementById("calculated").innerHTML=(totalScore);
}
	
	if(totalScore>randomNumber){
		alert("You lose! \nScore = " + totalScore + ". ");
		losses++;
		totalScore=0;
		document.getElementById("losses").innerHTML=losses;
		document.getElementById("computerNumber").innerHTML=randomNumber;
		document.getElementById("calculated").innerHTML=0;
		purple=(Math.floor(Math.random()*50)+1);
}
	if(totalScore===randomNumber){
		alert("You win! \nScore = " + totalScore + ". ");
		wins++;
		totalScore=0;
		document.getElementById("calculated").innerHTML=0;
		document.getElementById("wins").innerHTML=wins;
		document.getElementById("computerNumber").innerHTML=randomNumber;
		purple=(Math.floor(Math.random()*50)+1);
	}
}


function greenTotal (){
	console.log(totalScore + green);
	console.log(green);
	if(document.getElementById("btn2").onclick){
		totalScore= totalScore + green;
		document.getElementById("calculated").innerHTML=(totalScore);
}
	if(totalScore>randomNumber){
		alert("You lose! \nScore = " + totalScore + ". ");
		losses++;
		totalScore=0;
		document.getElementById("losses").innerHTML=losses;
		document.getElementById("computerNumber").innerHTML=randomNumber;
		document.getElementById("calculated").innerHTML=0;
		green=(Math.floor(Math.random()*20)+1);
	}
	if(totalScore===randomNumber){
		alert("You win! \nScore = " + totalScore + ". ");
		wins++;
		totalScore=0;
		document.getElementById("calculated").innerHTML=0;
		document.getElementById("wins").innerHTML=wins;
		document.getElementById("computerNumber").innerHTML=randomNumber;
		green=(Math.floor(Math.random()*20)+1);
	}
}

function blueTotal (){
	console.log(totalScore + blue);
	console.log(blue);
	if(document.getElementById("btn3").onclick){
		totalScore= totalScore + blue;
		document.getElementById("calculated").innerHTML=(totalScore);
}
	if(totalScore>randomNumber){
		alert("You lose! \nScore = " + totalScore + ". ");
		losses++;
		totalScore=0;
		document.getElementById("losses").innerHTML=losses;
		document.getElementById("computerNumber").innerHTML=randomNumber;
		document.getElementById("calculated").innerHTML=0;
		blue=(Math.floor(Math.random()*30)+1);
	}
	if(totalScore===randomNumber){
		alert("You win! \nScore = " + totalScore + ". ");
		wins++;
		totalScore=0;
		document.getElementById("calculated").innerHTML=0;
		document.getElementById("wins").innerHTML=wins;
		document.getElementById("computerNumber").innerHTML=randomNumber;
		blue=(Math.floor(Math.random()*30)+1);		
	}
}

function orangeTotal (){
	console.log(totalScore + orange);
	console.log(orange);
	if(document.getElementById("btn4").onclick){
		totalScore= totalScore + orange;
		document.getElementById("calculated").innerHTML=(totalScore);
}
	if(totalScore>randomNumber){
		alert("You lose! \nScore = " + totalScore + ". ");
		losses++;
		totalScore=0;
		document.getElementById("losses").innerHTML=losses;
		document.getElementById("computerNumber").innerHTML=randomNumber;
		document.getElementById("calculated").innerHTML=0;
		orange=(Math.floor(Math.random()*40)+1);
		
	}
	if(totalScore===randomNumber){
		alert("You win! \nScore = " + totalScore + ". ");
		wins++;
		totalScore=0;
		document.getElementById("calculated").innerHTML=0;
		document.getElementById("wins").innerHTML=wins;		
		document.getElementById("computerNumber").innerHTML=randomNumber;
		orange=(Math.floor(Math.random()*40)+1);
	}
}

function restart(){
	location.reload();
	
}
	