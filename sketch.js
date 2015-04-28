$(document).ready(function(){

	for(i = 0; i < 16 * 16; i++){
		$('.container').append('<div class="grid"></div>');
		var x = 16 *2;
		var y = 530;
		var z = x + y;
		$('.container').css({'width':z,'height':z,'border':'1px'});

	};	

	$('.grid').on('mouseenter',function(){
		$(this).addClass('highlight');
			$('.grid').on('mouseleave',function(){
				$('.highlight').fadeTo('fast',0);
});
	});


	//when button is clicked, clear grid and ask for new
	$('button').on('click',function(){

		//set default grid color
		$(this).closest('#button').next().find('.grid').css('background-color','#333333');
		var gridSize = prompt("what size do you want the grid?");		

	//calculate grid size
	function calcGrid(num){
		var area = num * num;
		return area;
	};

	//calculate pixel size
	function pxSize(num){
		var pixelSize = 530/num;
		var n = pixelSize.toString(); 
		return n;
	};

	function pxSize2(num){
		var pixelSize = 530;
		var num = 2 *num;
		var n = num + pixelSize;
		//var n = pixelSize.toString(); 
		return n;
	};
	//create grid based on user input
	for(i = 0; i < calcGrid(gridSize); i++){
		$('.container').append('<div class="grid"></div>');
		$('.grid').css({'width':pxSize(gridSize),'height':pxSize(gridSize)});
	};
		$('.container').css({'width':pxSize2(gridSize),'height':pxSize2(gridSize)});
	//change grid color while hovering
	$('.grid').on('mouseenter',function(){
		$(this).css('background-color','white');
	});

	});
	//change color selected by user
	$('div').on('click','.blue',function(){
		$('.grid').on('mouseenter',function(){
			$(this).css('background-color','blue');
		});
	});

	$('div').on('click','.red',function(){
		$('.grid').on('mouseenter',function(){
			$(this).css('background-color','red');
		});
	});
	$('div').on('click','.green',function(){
		$('.grid').on('mouseenter',function(){
			$(this).css('background-color','green');
		});
	});
	$('div').on('click','.yellow',function(){
		$('.grid').on('mouseenter',function(){
			$(this).css('background-color','yellow');
		});
	});

	$('div').on('click','.white',function(){
		$('.grid').on('mouseenter',function(){
			$(this).css('background-color','white');
		});
	});

});