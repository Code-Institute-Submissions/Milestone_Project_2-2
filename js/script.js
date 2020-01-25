$(document).ready(function() {
    
 	$("button").on("click", function() {
 		$("mediterranien").removeId('map');
		$("carribean").removeId('map');
		$("europe").removeId('map');
		$("mediterranien").addId("data");
		
	  	});
	$("button").on("click", function() {
		$("mediterranien").removeId('map');
		$("carribean").removeId('map');
		$("europe").removeId('map');
		$("carribean").addId("data");
	});
	$("button").on("click", function() {
		$("mediterranien").removeId('map');
		$("carribean").removeId('map');
		$("europe").removeId('map');
		$("europe").addId("data");
	});
	$("button").click("color","red");
}); 

$("button").mouseover(function() {
 		$("mediterranien").removeId('data');
		$("carribean").removeId('data');
		$("europe").removeId('data');
		$("mediterranien").addId("map");
		
	  	});
	$("button").mouseleave(function() {
		$("mediterranien").removeId('data');
		$("carribean").removeId('data');
		$("europe").removeId('data');
		$("carribean").addId("map");
	});
	$("button").mouseleave(function() {
		$("mediterranien").removeId('data');
		$("carribean").removeId('data');
		$("europe").removeId('data');
		$("europe").addId("map");
	});
$("button").mouseover("color","red");
