function illustrationSetting(x)
{
	let illustrationBox = document.getElementsByClassName("illustration__illustration-box");
	let illustrationWomen = document.getElementsByClassName("illustration__illustration-woman-online");

	if (x.matches)
	{
		illustrationBox[0].style.visibility = "visible";
		illustrationBox[0].src = "./images/illustration-box-desktop.svg";
		illustrationBox[0].alt = "A box with @ logo upside";
		illustrationWomen[0].src = "./images/illustration-woman-online-desktop.svg";
		illustrationWomen[0].alt = "illustration of a womean on a computeur";
	}
	else
	{
		illustrationBox[0].style.visibility = "hidden";
		illustrationWomen[0].src = "./images/illustration-woman-online-mobile.svg";
		illustrationWomen[0].alt = "illustration of a woman on a computeur";
	}
}

var x = window.matchMedia("(min-width : 800px)");
illustrationSetting(x);
x.addListener(illustrationSetting);