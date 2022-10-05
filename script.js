// set up the letter set
var lss = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','.',',',':',';','-','_'];

function show_letter(){
	//gets a random letter
	//and creates div element with random styling
  let ls = lss[Math.floor(Math.random() * lss.length)];

  let width = randomNumber(100,200);
  let picWidth = $(".pic").width();
  let pos = $(".pic").position();
pos.top;  // top offset position
pos.left; // left offset position
  let x = randomNumber(pos.left+10 , pos.left+picWidth-100);
  let y = randomNumber(pos.top , pos.top+picWidth-100);

  //create element
  let ls_slot = $('<div class="block draggable"></div>');
  //add the random letter
  ls_slot.text(ls); 
  //add the css info
  ls_slot.css({
  	top: y +'px',
  	left: x + 'px',
  	"--wdth": width
  });

  console.log("y loving it??");
  
  //add onto container
  $('#mahjong').append(ls_slot);

  //make it draggable
  $('.draggable').draggable();

}

function generateMixed(n) {
     var res = "";
     for(var i = 0; i < n ; i ++) {
         var id = Math.ceil(Math.random()*26);
         res += str[id];
     }
     return res;
}

$(document).ready(function(){

	  $('#moreblocks').click(function() {

	  	show_letter();

	  });

	const wdthmax = 200;

	//standard sliders
	$('.axis-range').on('input', function(){

		let value = parseInt($(this).val()); //get slider input value
		// console.log(value);

		const slidertype = $(this).data('type'); //get slider axis

		// console.log("--"+slidertype, value );

		$('#font').css("--"+slidertype, value);

	});


});


// Function to generate random number 
function randomNumber(min, max) { 
    return Math.floor(Math.random() * (max - min) + min);
}