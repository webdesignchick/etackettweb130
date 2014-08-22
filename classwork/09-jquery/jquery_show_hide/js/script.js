$(document).ready(function(){
	$("#push-me").click(doStuff);
	$("#show-btn").click(showFlowers);
	$("#hide-btn").click(hideFlowers);
});

function doStuff(){
   $("#place-text").html("hello");
    //put "hello in #place-text"
}

function showFlowers()
{
   $("#flowers").show(1000);
    //show #flowers
}

function hideFlowers()
{
   $("#flowers").hide(1000);
  //hide #flowers
}






