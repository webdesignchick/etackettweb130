$(document).ready(function(){
	$("#btn-winter").click(changeToWinter);
	$("#btn-summer").click(changeToSummer);
});

function changeToWinter()
{
  $("body").addClass(".winter").removeClass("summer");
  $("#headline").html("Winter");
  $("#instructions").html("Don't you cry!");
  $("#seasonal-img").attr("src","images/snowman.jpg");
 
	//change headline and instructions
	//change class of instructions
	//change image src

}

function changeToSummer()
{
  
  $("#headline").html("Summer");
  $("#instructions").html("Nice tan barbie girl!");
  $("#seasonal-img").attr("src","images/summer-barby.jpg");
$("body").addClass(".summer").removeClass("winter");
   
	//change headline and instructions
	//change class of instructions
	//change image src

}













