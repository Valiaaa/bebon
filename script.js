// set up the letter set
var lss = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','.',',',':',';','-','_'];

function show_letter()
{
  let ls = lss[Math.floor(Math.random() * lss.length)];

  let ls_slot = $('#ls-slot');

  ls_slot.text(ls);
}

$(document).ready(function() {
  show_letter();

  $('button').on('click', function() {
    show_letter();
  });
});


// random css

function update_css(x, y, width)
{
  let nl = $('#drag');

  nl.css({
    left: x + 'px',
    top: y  + 'px',
	"--wdth": width
  });
}

$(document).ready(function() {

  $('button').click(function() {

	$("#drag").css({
		"display": "block"
	});	

    let width = randomNumber(100,200);

    let x = randomNumber(10,innerWidth-100);
    let y = randomNumber(10,innerHeight-100);

    update_css(x, y, width);
  });

})





function generateMixed(n) {
     var res = "";
     for(var i = 0; i < n ; i ++) {
         var id = Math.ceil(Math.random()*26);
         res += str[id];
     }
     return res;
}

$(document).ready(function(){

	const wdthmax = 200;

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

	/*$('.pic').click (function appendText(){
		var txt=$("<h2></h2>").text(res);
		$("#drag").append(txt);
	});*/

});



// Function to generate random number 
function randomNumber(min, max) { 
    return Math.floor(Math.random() * (max - min) + min);
}