$(document).ready(function(){

	console.log('script loaded');

	const wghtmax = 900;
	const wdthmax = 150;

	//standard sliders
	$('.axis-range').on('input', function(){

		let value = parseInt($(this).val()); //get slider input value
		// console.log(value);

		const slidertype = $(this).data('type'); //get slider axis

		// console.log("--"+slidertype, value );

		$('#bigletter').css("--"+slidertype, value);

	});

	//click buttons
	$('#regular').click(function(event) {
		// console.log('default clicked');
		$("#content").css({
			"--wdth": 100
		});	
	});

	$('#semiwide').click(function(event) {
		$("#content").css({
			"--wdth": 150
		});	
	});

	$('#wide').click(function(event) {
		$("#content").css({
			"--wdth": 200
		});	
	});


	$('#random').click(function(event) {
		let randomwidth = randomNumber(100,200);
		
		$("#content").css({
			"--wdth": randomwidth
		});	
	});

	$('.pic').click (function(){
		$("#mahjong").append("<div id='drag'><h2>K</h2></div>");
	});

	/*$('.pic').click (function appendText(){
		var txt=$("<h2></h2>").text(res);
		$("#drag").append(txt);
	});*/

});



// Function to generate random number 
function randomNumber(min, max) { 
    return Math.floor(Math.random() * (max - min) + min);
}

/*var str = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
function generateMixed(n) {
     var res = "";
     for(var i = 0; i < n ; i ++) {
         var id = Math.ceil(Math.random()*26);
         res += str[id];
     }
     return res;
}*/