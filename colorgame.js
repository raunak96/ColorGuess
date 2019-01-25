var size=6;
var squares=document.querySelectorAll(".square");
var disp=document.querySelector("#disp");
var h1=document.querySelector("h1");
var message=document.querySelector("#message");
var resetbutton=document.querySelector("#reset");
var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard");
var color=[];
var pickedcolor;

init();
	
function init()
{
	//easy mode
	easy.addEventListener("click",function(){
		easy.classList.add("selected");
		hard.classList.remove("selected");
		size=3;
		reset();
	});
	//hard mode
	hard.addEventListener("click",function(){
		hard.classList.add("selected");
		easy.classList.remove("selected");
		size=6;
		reset();
	});
	//reset button
	resetbutton.addEventListener("click",reset);

	//functionality of colored suared tiles
	for(var i=0;i<squares.length;i++)
	{
		 squares[i].addEventListener("click",function(){
			var selectedColor=this.style.background;
			if(pickedcolor==selectedColor)
			{
				changecol(pickedcolor);
				h1.style.background=pickedcolor;
				message.textContent="You Win!";
				resetbutton.textContent="Play Again?"
			}
			else
			{
				this.style.background="#232323";
				message.textContent="Try Again:(";
			}
		});
	}
	reset();
}

function reset()//rests page content
{
	resetbutton.textContent="New Colors";
	h1.style.background="steelblue";
	message.textContent="";
	color=(generateRandomColor(size));
	pickedcolor=color[rand(size)];
	disp.textContent=pickedcolor;
	for(var i=0;i<squares.length;i++)
	{
		if(color[i])
		{
			squares[i].style.display="block";//to make sure content is shown
			squares[i].style.background=color[i];
		}
		else
			squares[i].style.display="none"; //this does not show the content 
	}
}

function changecol(col)//change all squares to correct color if guessed correctly
{
	for(var i=0;i<squares.length;i++)
		squares[i].style.background=col;
}

function rand(num)//generate random index from colors array
{
	return Math.floor(Math.random()*size);
}

function generateRandomColor(siz)//generate size no of random colors returned as array stored in array color
{
	var arr=[];
	for(var i=0;i<siz;i++)
	{
		var r=Math.floor(Math.random()*256);
		var g=Math.floor(Math.random()*256);
		var b=Math.floor(Math.random()*256);
		arr.push("rgb("+ r+", "+ g +", "+b+")");
	}
	return arr;
}